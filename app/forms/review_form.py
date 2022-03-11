from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField, IntegerField, SubmitField, FloatField, DateField, FileField
from wtforms.validators import DataRequired

class ReviewForm(FlaskForm):
    content = TextAreaField('Review')
    rating = IntegerField('Rating', validators=[DataRequired()])
    user_id = IntegerField('User Id', validators=[DataRequired()])
    image = FileField('image')
    product_id = IntegerField('Product Id', validators=[DataRequired()])
    created_at = DateField('Created at')   
    updated_at = DateField('Updated At')
    purchase_id = IntegerField('Purchase Id',validators=[DataRequired()] )