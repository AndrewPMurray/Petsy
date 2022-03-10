from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField, IntegerField, SubmitField, FloatField
from wtforms.validators import DataRequired



class ProductForm(FlaskForm):
    title = StringField('Title', validators=[DataRequired('Title cannot be blank.')])
    price = FloatField('Price', validators=[DataRequired('Please input a price.')])
    details = TextAreaField('Details', validators=[DataRequired()])
    description = TextAreaField('Description', validators=[DataRequired('Please include a description of your item.')])
    quantity = IntegerField('Quantity', validators=[DataRequired('Please let us know how much of your item is in stock.')])
    user_id = IntegerField('User Id', validators=[DataRequired()])
    product_type_id = IntegerField('Product Type Id', validators=[DataRequired()])
    pet_type_id = IntegerField('Pet Type Id', validators=[DataRequired()])
    