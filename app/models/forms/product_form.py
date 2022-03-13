from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField, IntegerField, SubmitField, FloatField
from wtforms.validators import DataRequired



class ProductForm(FlaskForm):
    title = StringField('Title', validators=[DataRequired()])
    price = FloatField('Price', validators=[DataRequired()])
    details = TextAreaField('Details')
    description = TextAreaField('Description', validators=[DataRequired()])
    quantity = IntegerField('Quantity', validators=[DataRequired()])
    user_id = IntegerField('User Id', validators=[DataRequired()])
    product_type_id = IntegerField('Product Type Id', validators=[DataRequired()])
    pet_type_id = IntegerField('Pet Type Id', validators=[DataRequired()])
    