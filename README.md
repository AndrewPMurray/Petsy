# Welcome to Petsy!
![petsy home page](https://user-images.githubusercontent.com/89945390/158039225-604c9ced-6edd-47f3-8edd-7b0646720699.png)

[Petsy](https://aa-petsy.onrender.com), a fullstack clone of Etsy, is an online marketplace where people sell, buy, and collect unique pet items. Contributors: [Andrew Murray](https://www.linkedin.com/in/andrew-murray-304b39231/), [Lucas Monteiro](https://www.linkedin.com/in/lucascostamonteiro/), [Whit Minson](https://www.linkedin.com/in/whitneylynnminson/), [Yanelys Mena](https://www.linkedin.com/in/yanelysmena/).

## Wiki Links

 -  [MVP Feature List](https://github.com/AndrewPMurray/Petsy/wiki/MVP-Features-List)
 - [React Components & Frontend Routes](https://github.com/AndrewPMurray/Petsy/wiki/Routes-&-Components)
 - [Database Schema](https://github.com/AndrewPMurray/Petsy/wiki/Database-Schema)
 - [API Routes](https://github.com/AndrewPMurray/Petsy/wiki/API-Routes)
 - [User Stories](https://github.com/AndrewPMurray/Petsy/wiki/User-Stories)

## Technologies

 - **Backend:** Python, Flask
 - **Frontend:** JavaScript, React/Redux, AJAX, WTForms
 - **Database:** PostgresSQL
 - **Image hosting:** AWS/S3
 - **Design and Styling:** HTML/CSS
- **External APIs:** boto3, botocore

## Features

 - User login/signup
 ![signup window](https://user-images.githubusercontent.com/89945390/158081458-7d170b5d-adff-4087-8669-b0ef325efeec.png)
 -----------------------------
 - Products
![product page - leopard gecko tent](https://user-images.githubusercontent.com/89945390/158081788-241db514-fbc3-4c69-88ac-8a3d0e5986cf.png)
-----------------------------
![edit listing](https://user-images.githubusercontent.com/89945390/158081538-866e65cd-0c6a-4575-9483-9853bc4591f8.png)

-----------------------------
 - Shopping cart
![petsy cart](https://user-images.githubusercontent.com/89945390/158081351-faee161b-bc92-4880-96cb-ead0034483bf.png)
-----------------------------
 - Reviews/Ratings
![product reviews list](https://user-images.githubusercontent.com/89945390/158039176-b8dee328-548a-42c7-b362-2db16bc0c762.png)
-----------------------------
- Purchases
![purchases](https://user-images.githubusercontent.com/89945390/158081639-ad33db9d-14c8-49a8-9e65-7e911d4e2a25.png)
-----------------------------
 - Search
![bird search result](https://user-images.githubusercontent.com/89945390/158081400-a94f6619-6eff-4c3b-9d6b-82db2579dff1.png)
-----------------------------

## Install Instructions

 1. Clone this repo
	 - `git clone git@github.com:AndrewPMurray/Petsy.git`
 2. Install dependencies for backend 
	 - `pipenv install`
 3. Install dependencies for frontend
	 - `cd react-app`
	 - `npm install`
 4. Create PostgreSQL user
	 - `CREATE USER petsy_user WITH CREATEDB PASSWORD '<password>'`
 5. Create PostgreSQL database
	 - `CREATE DATABASE petsy_db WITH OWNER <user name>`
6. Create a `.env` file in the root directory based on the `.env.example` file
7. In `.env` file:
	- Replace 'password' in DATABASE_URL with your chosen password
	- Enter a secure combination of characters for you SECRET_KEY
	- Create your own [S3](https://s3.console.aws.amazon.com/s3/home?region=us-east-1) image bucket and [AWS user](https://console.aws.amazon.com/iam/home?#/users) and connect them, and enter in the information for S3_BUCKET, S3_KEY, and S3_SECRET. 
8. Flask Migrate and Seed your database in root directory
	- `pipenv shell`
	- `flask db upgrade` 
	- `flask seed all`
9. Start backend server in root directory
	- `flask run`  
10. Start frontend server in `react-app` directory
	- `npm start`
11. In your browser go to `localhost:3000`
12. You may use the Demo user or create a new user by clicking on the  `Log In` button. Then you can search, look at products, leave reviews, add items to cart, purchase items, etc..

## Bonus Features
- Purchases
    - A user can view their past purchases' information and create/edit reviews on each purchase.
- 404 page

![not found page gif](https://user-images.githubusercontent.com/89945390/158082119-54c72160-20d4-41a1-ba86-757409070659.gif)

---------------------
