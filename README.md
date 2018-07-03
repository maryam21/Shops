# Shops
App that lists shops nearby

To build this app I used Nodejs in the backend and Vuejs for the frontend. The features currently implemented:

- [ ] As a User, I can sign up using my email & password (in progress)
- [ ] As a User, I can sign in using my email & password
- [x] As a User, I can display the list of shops sorted by distance
- [ ] As a User, I can like a shop, so it can be added to my preferred shops. 
        Acceptance criteria: liked shops shouldn’t be displayed on the main page

To start using the app first configure the .env file in the root directory of the project:

    CLIENT_HOST=<your frontend server address>
    SERVER_HOST=<your backend server address>
    SERVER_PORT=<the port in which the backend server is listening>
    API_KEY=<API key from google developers console>
    DATABASE=<your database url> // e.g 'mongodb://localhost/my_database'
