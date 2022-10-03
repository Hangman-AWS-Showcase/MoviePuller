const { getRandomMovieTtid } = require('./movies');

const axios = require("axios");
const express = require('express');

const app = express()
const port = 3000;


app.get('/', async (req, res) => {
	let movId = getRandomMovieTtid();

  const options = {
	  method: 'GET',
	  url: 'https://online-movie-database.p.rapidapi.com/title/get-details',
	  params: {tconst: movId},
	  headers: {
	    'X-RapidAPI-Key': 'e884813beemsh3c1c69210ca36b2p175174jsnf675d2d554b7',
	    'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
	  }
	};


	await axios.request(options).then(function (response) {
		console.log("Movie retrieved.");
		console.log(response.data);
		res.send({
			answer: response.data.title, 

			hint_1: "The total runtime of the movie is: " + response.data.runningTimeInMinutes + " minutes", 
			hint_2: "The movie was released in " + response.data.year, 
			hint_3: response.data.image.url;
		});
	}).catch(function (error) {
		console.error(error);
		res.json({answer: null, hint_1: null, hint_2: null, hint_3: null});
	});
	
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})