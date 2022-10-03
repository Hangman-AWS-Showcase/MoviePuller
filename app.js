const { getRandomMovieTtid } = require('./movies');

require('dotenv').config()

const axios = require("axios");
const express = require('express');

const app = express()
const port = 3000;


// Handle requests to the api server.
// Assume all requests are looking for a movie.
app.get('/', async (req, res) => {
	// Get the movie id
	let movId = getRandomMovieTtid();

	// Manage the api request
  const options = {
	  method: 'GET',
	  url: 'https://online-movie-database.p.rapidapi.com/title/get-details',
	  params: {tconst: movId},
	  headers: {
	    'X-RapidAPI-Key': process.env.API_KEY,
	    'X-RapidAPI-Host': process.env.API_ENDPOINT
	  }
	};

	// Send the api request
	await axios.request(options).then(function (response) {
		// Format the data from the api
		res.json({
			answer: response.data.title, 

			hint_1: "The total runtime of the movie is: " + response.data.runningTimeInMinutes + " minutes", 
			hint_2: "The movie was released in " + response.data.year, 
			hint_3: response.data.image.url,
			error:null
		});
	}).catch(function (error) {
		// Handle any errors
		console.error(error);
		res.json({answer: null, hint_1: null, hint_2: null, hint_3: null, error: "Could not communicate the API."});
	});
	
})


app.listen(port, () => {
  console.log(`Movie DB API has started on port ${port}`)
})