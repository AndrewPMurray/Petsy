# Python Web Assessment

In this assessment, you will create a simple, data-driven Web application using
Python. The tests are provided for you in this project; however, there is no
Pipfile because part of this assessment is for you to initialize and use your
own virtual environment using Pipenv.

## Getting started

Clone the assessment from here [python-assessment].

Your application should use a database.

* Create a database user named "app_academy" with password "password"
* Create a database named "pyweb_test_db" with owner "app_academy"
* Determine your [PostgreSQL database connection URI](https://flask-sqlalchemy.palletsprojects.com/en/2.x/config/#connection-uri-format)

**Note**: You should _never_ set the password of a database user to something so
easy to guess. This is merely for the convenience of grading this assessment.

Use Pipenv to install the following dependencies.

* pytest
* pycodestyle
* pylint
* rope
* flask
* flask-sqlalchemy
* alembic
* flask-migrate
* python-dotenv
* psycopg2-binary
* sqlalchemy
* wtforms
* flask-wtf

Once you have those installed, activate your virtual environment.

The tests will expect you to store your application's code in an `app/`
directory. Inside the `app/` directory, you will need to:

* Edit the `__init__.py` file which will contain your Flask app declaration
* Edit the `forms.py` file which will contain your form classes
* Edit the `models.py` file which will contain your Flask-SQLAlchemy model
  classes.
* Edit the `config.py` file which will contain your configuration object

**NOTE:** If you are going to view this application in the browser while you
develop it, you will need to set a `SECRET_KEY` in your configuration. The unit
tests do not require it to be set. There is a reminder, later, to add it when
you'll need it.

## The requirements

For each of the following routes, you need to implement the requirements. These
requirements are what the tests test.

Test your application by running the command `pytest` from the root directory.

### App location

In the `app/__init__.py` file, create your Flask application. You must name the
variable that holds the Flask application `app`.

You can define the routes wherever you'd like: in their own Blueprints using the
files in the `routes` folder, or in the `app/__init__.py` file.

Think of what you will need to import into the `__init__.py` file in the root of
the project directory.

### GET "/"

The response from this HTTP request must be of type "text/html" (Flask sets this
for you when you render a template) and contain the following HTML:

```html
<h1>Python Web Assessment</h1>
```

### GET "/new_instrument"

You must create a form class using Flask-WTF and WTForms. You must define this
in the `app.forms` module. The form class must be named `NewInstrument`. It must
define a form with the following specifications.

| Field name | Label        | Data type to collect   | Validators    |
|------------|------------- |------------------------|---------------|
| date_bought| "Date Bought"| date                   | data required |
| nickname   | "Nickname"   | string                 | data required |
| year       | "Year"       | integer                |               |
| maker      | "Maker"      | string                 |               |
| type       | "Type"       | string from dropdown   |               |
| used       | "Used"       | boolean                | data required |
| submit     | "Submit"     | n/a                    |               |

**NOTE:** The `type` field must display a drop-down menu with the following
options: _Other, String, Woodwind, Brass, Percussion_.

Create a route to handle `GET /new_instrument`. In it use the form class you
just defined and render a template containing the form HTML.

The response from this HTTP request must be of type "text/html" (Flask sets this
for you when you render a template) and contain the form fields described above.
The method of the form should be "post" and "/new_instrument". While PEP8 does not
have an opinion on single quotes vs. double quotes, the unit test does!

### **The form tag should look exactly like this.**

```html
<form method="post" action="/new_instrument">
```

**NOTE:** If you are going to view this in the browser, then you need to do
things:

* Don't forget to put the `{{ form.csrf_token }}` value in your form. (The
  `form` variable, there, is whatever you name the form parameter for the
  template.)
* Go ahead and create a class named `Configuration` in `app.config`. Add a
  `SECRET_KEY` value to it. Get that configuration into your application by
  following the instructions in the next section.

### POST "/new_instrument"

In the `app.config` module, create a class named `Configuration`. In there,
create an attribute named `SQLALCHEMY_DATABASE_URI` and set it to the value of
the proper PostgreSQL URL from the database information in the _Getting started_
section. Add `SQLALCHEMY_DATABASE_URI` and `SECRET_KEY` to your .env file.
Import your environment variables into app.config.py (We trust that you know how
to use `os.environ.get`)

Notes:
 - If you are going to view this in the browser, add a `SECRET_KEY` attribute to
   the `Configuration` object, as well, and set it to anything.
 - SQLAlchemy will issue a warnings about `SQLALCHEMY_TRACK_MODIFICATIONS`.
   These will not effect your tests passing, and can be ignored.  Alternatively
   you may set it's value to False in your configuration object to address the
   warnings.

Import the `Configuration` class into the `app/__init__.py` file and use it to
configure your Flask application.

Create a mapping class (model) in the `app.models` module named `Instrument`. It
must use the table name "instruments". It must have the following mappings on
it.

Remember that you will need to construct a `db` object by calling the
`SQLAlchemy` constructor.  In order to avoid circular dependencies (caused by
importing from `app`) import `db` into your `app/__init__.py` and call
`init_app` on it.


| Column name | Data type     | Constraints |
|-------------|---------------|-------------|
| id          | INTEGER       | Primary key |
| date_bought | DATE          | not null    |
| nickname    | VARCHAR(50)   | not null    |
| year        | INTEGER       |             |
| maker       | VARCHAR(50)   |             |
| type        | VARCHAR(50)   | not null    |
| used        | BOOL          | not null    |


Create a migration for this and upgrade your database.

* Create a *separate* route to handle `POST /new_instrument`.
* It should take the data from the posted form page (date_bought, nickname,
  etc.) and use the `Instrument` validate it
* If the form validates, it should
  * use the `Instrument` to insert it into the database using the `Instrument`
  * redirect to "/instrument_data".
* If the form does not validate, it should show a message that reads "Bad Data"
  (the content type can be anything, including plain text).

### GET "/instrument_data"

Create a route to handle `GET /instrument_data`. In that route, have it query
all of the records from using the `Instrument` for where the nickname begins
with "M". Loop over those records in your view and render them using the
following template.

```html
<-- Your for loop, here -->
<div>{{ instrument.date_bought }}</div>
<div>{{ instrument.nickname }}</div>
<div>{{ instrument.year }}</div>
<div>{{ instrument.maker }}</div>
<div>{{ instrument.type }}</div>
<div>{{ instrument.used }}</div>
<div>{{ instrument.submit }}</div>
{% endfor %}
```

## The tests

The tests are grouped into two categories: simple and data-driven. The "simple"
tests do not require a database. The "data-driven" tests require you to store
data in a database by creating proper models. The model classes will be
inspected.

### The "simple" tests

These tests will check that the responses have values in the HTML and in your
`Instrument` class.

### The "database" tests

These tests will check your `Configuration` class, that those values are put
into your Flask application's `config` object, the model exist in your
`app.models` module, and that your routes handle and show data created in your
application.

## Submission

When you are ready to submit:

1. Delete the `.venv` directory
2. Zip up your folder
3. Upload it

[python-assessment]: https://github.com/appacademy/assessment-for-week-18-version-a-python