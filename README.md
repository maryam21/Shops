# Shops
App that lists shops nearby

This app is built using MEVN(Mongodb, Express, Vue, Node) stack. 

Features
=========
The features currently implemented:

- [x] As a User, I can sign up using my email & password
- [x] As a User, I can sign in using my email & password
- [x] As a User, I can display the list of shops sorted by distance
- [ ] As a User, I can like a shop, so it can be added to my preferred shops. 
        Acceptance criteria: liked shops shouldn’t be displayed on the main page. (in progress)

Structure
==========
This repository contains two main folders:

- frontend (VueJS)
- backend (NodeJS Express)

Installation
=============
Locally I am using the following versions:
    
    node -v
    v8.4.0
    
    npm -v
    5.3.0
    
    mongod --version
    db version v4.0.0
    
Install the dependencies:

    cd Shops/
    npm install
    
    cd frontend/
    npm install
    
    cd backend/
    npm install
   
Usage
======
To start using the app first configure the .env file in the root directory of the project:

    CLIENT_HOST=<your frontend server address>
    SERVER_HOST=<your backend server address>
    SERVER_PORT=<the port in which the backend server is listening>
    SERVER_API=<backend server api> // e.g 'localhost:3000/api'
    API_KEY=<API key from google developers console>
    DATABASE=<your database url> // e.g 'mongodb://localhost/my_database'
    SESSION_SECRET=<a phrase to be used for the session>

Start the backend server with:
   
    cd backend/
    npm start
    
And the frontend server in development mode:

    cd frontend/
    npm run dev
  
Or production mode:

    npm run build
