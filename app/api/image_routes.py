from flask import Blueprint, request, send_file
from app.models import db, Image
from flask_login import current_user, login_required
from app.aws import (
    delete_image_from_s3, upload_file_to_s3, allowed_file, get_unique_filename, download_image)

image_routes = Blueprint("images", __name__)

@image_routes.route("/<string:filename>")
def get_image(filename):
    image = download_image(filename)
    return send_file(image, 'image/png')

@image_routes.route("", methods=["POST"])
@login_required
def upload_image():
    if "image" not in request.files:
        return {"errors": "image required"}, 400

    image = request.files["image"]
    print('******', image)
    product_id = request.form['product_id']
    
    if not allowed_file(image.filename):
        return {"errors": "file type not permitted"}, 400
    
    image.filename = get_unique_filename(image.filename)
    
    upload = upload_file_to_s3(image)

    if "url" not in upload:
        # if the dictionary doesn't have a url key
        # it means that there was an error when we tried to upload
        # so we send back that error message
        return upload, 400

    url = upload["url"]
    new_image = Image(product_id=product_id, url=url)
    db.session.add(new_image)
    db.session.commit()
    return {"url": url}


@image_routes.route("/<int:id>", methods=["DELETE"])
@login_required
def delete_image(id):
    image = Image.query.get(id)
    name = request.form['name']
    
    if not 'etsystatic' in name:
        delete_image_from_s3(name)
        
    db.session.delete(image)
    db.session.commit()
    return {'message': 'success'}