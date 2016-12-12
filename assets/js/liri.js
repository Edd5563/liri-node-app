
var action = process.argv[2];
var userInput = process.argv[3];


var Twitter = require('twitter');
var spotify = require('spotify');
var request = require("request");



		//COMMAND
	 	//node liri.js my-tweets

	switch (action) {
	  case "my-tweets":
		twitter();
		break;


		// COMMAND
		// node liri.js spotify-this-song '<song name here>'

	  case "spotify-this-song":
		  	if (userInput == undefined) {
		  		console.log("Underfined search... Default search Enabled");
		  		userInput = "Crazy Train";
		  		song(userInput);
		  	} else {
		  		song(userInput);
		  	}
	  break;



	  case "movie-this":
	  	if (userInput == undefined) {
	  		console.log("Underfined search... Default search Enabled");
	  		userInput = "Batman";
	  		movies(userInput);
	  		} else {
	  			movies(userInput);
	  		}

			//COMMAND
			// node liri.js do-what-it-says
	  break;

  case "do-what-it-says":
		//COMMAND
		// node liri.js do-what-it-says

		// Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
		// It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt.
		// Feel free to change the text in that document to test out the feature for other commands.

    break;
}






// Function Area-------------


// add notes
function twitter(){
	var keys = require("./keys.js");
	keys = keys.twitterKeys;
	var client = new Twitter(keys);

	var params = { 
		count: 20
	};

	client.get('statuses/user_timeline', params, function(err, data, response) {
	   		for (var i = 0; i < data.length; i++) {
	  			// var myTweets = ;
	  			console.log(data[i].text);
	  			console.log('------------------------------------');
	  		}

	})

} 

// add notes
function song(userInput) {
	spotify.search({ type: 'track', query: userInput }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }
    	console.log('Artist: '+ data.tracks.items[0].album.artists[0].name);
    	console.log('Preview Link: '+ data.tracks.items[0].external_urls.spotify);
    	console.log('Song Name: '+ data.tracks.items[0].name);
    	console.log('Album of Song: '+ data.tracks.items[0].album.name);
	});
}

//add notes
function movies(userInput) {

	var nodeArgs = process.argv[3];
	var movieName = nodeArgs;

	var webQuery = 'http://www.omdbapi.com/?t='+ movieName +'&y=&plot=short&tomatoes=true&r=json';
	console.log(webQuery);

	// Then run a request to the OMDB API with the movie specified
	request(webQuery, function(error, response, body) {

  // If the request is successful (i.e. if the response status code is 200)
	    if (!error && response.statusCode === 200) {
	    console.log("The movie's Title is: " + JSON.parse(body).Title);
	    console.log("The movie's year release: " + JSON.parse(body).Year);
	    console.log("The movie's rating is: " + JSON.parse(body).imdbRating);
	    console.log("The movie's country released: " + JSON.parse(body).Country);
	    console.log("The movie's movie language: " + JSON.parse(body).Language);
	    console.log("The movie's Plot: " + JSON.parse(body).Plot);
	    console.log("The movie's actors: " + JSON.parse(body).Actors);
	    console.log("The movie's Rotten Tomatoes score: " + JSON.parse(body).tomatoRating);
	    console.log("The movie's Rotten Tomatoes URL: " + JSON.parse(body).tomatoURL);
		}
	});
}





//BONUS

// In addition to logging the data to your terminal/bash window, output the data to a .txt file called log.txt.
// Make sure you append each command you run to the log.txt file.
// Do not overwrite your file each time you run a command.

