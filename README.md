# MoviePull
Using languages and frameworks I haven't yet used to build micro-services which power a Movie Viewing application.
This is a microservice in a larger project. This microservice will be pulling movie data from an api and serving select data to the front end in order to provide hints and answers to a hang-man style game.

-----
## Pre-requesites
.env: This application uses .env to handle private keys.

Add a .env file to the root directory with an entry of [API_KEY](https://rapidapi.com/rapidapi/api/movie-database-alternative/).
Alternatively add the entry to the environment variables of your system before running the application.


### Stack
This microservice is build using Node.js with express, using the [Rapid API Movie Database Alternative](https://rapidapi.com/rapidapi/api/movie-database-alternative/) to get movie data.


### Flow
The application works by first receiving a request, this'll usually come from the react app at the front end.
Then a random movie will be selected, pulling some key information from the api.
This is then formatted and sent via JSON back to the requester.
