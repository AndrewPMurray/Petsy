from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField, IntegerField, SubmitField, FloatField
from wtforms.validators import DataRequired

class NewReview(FlaskForm):
    rating = IntegerField('Rating', validators=[DataRequired()])
    content = IntegerField('Review')
    url = StringField('Photo')
    user_id = IntegerField('User Id', validators=[DataRequired()])
    product_type_id = IntegerField('Product Type Id', validators=[DataRequired()])
    # created_at
    