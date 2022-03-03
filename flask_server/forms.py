from flask_wtf import FlaskForm
from wtforms import DateField, StringField, IntegerField, SelectField, BooleanField, SubmitField
from wtforms.validators import DataRequired

v = [DataRequired()]

class NewInstrument(FlaskForm):
    date_bought = DateField("Date Bought", v)
    nickname = StringField("Nickname", v)
    year = IntegerField("Year")
    maker = StringField("Maker")
    type = SelectField("Type", choices=['Other', 'String', 'Woodwind', 'Brass', 'Percussion'])
    used = BooleanField("Used", v)
    submit = SubmitField("Submit")