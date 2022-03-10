from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField, IntegerField, SubmitField, FloatField, DateField
from wtforms.validators import DataRequired

class ReviewForm(FlaskForm):
    content = TextAreaField('Review')
    rating = IntegerField('Rating', validators=[DataRequired()])
    user_id = IntegerField('User Id', validators=[DataRequired()])
    url = StringField('Photo')
    product_id = IntegerField('Product Id', validators=[DataRequired()])
    created_at = DateField('Created at')   
    updated_at = DateField('Updated At')
