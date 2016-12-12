
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


		//COMMAND
		//node liri.js spotify-this-song '<song name here>'

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
		//COMMAND
		// node liri.js do-what-it-says



		// This will output the following information to your terminal/bash window:

		// Title of the movie.
		// Year the movie came out.
		// IMDB Rating of the movie.
		// Country where the movie was produced.
		// Language of the movie.
		// Plot of the movie.
		// Actors in the movie.
		// Rotten Tomatoes Rating.
		// Rotten Tomatoes URL.
		// If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'

		// If you haven't watched "Mr. Nobody," then you should: http://www.imdb.com/title/tt0485947/
		// It's on Netflix!


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
	
	var twitterKeys = require("./keys.js");
	var client = new Twitter(twitterKeys);

	var params = {
		q: 'teched5563', //can be changed to action
		count: 20
	};

	client.get('search/tweets', params, function(err, data, response) {
	   var myTweets = data.statuses;
	  	for (var i = 0; i < myTweets.length; i++) {
	  		console.log(myTweets[i].text);
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











//BONUS

// In addition to logging the data to your terminal/bash window, output the data to a .txt file called log.txt.
// Make sure you append each command you run to the log.txt file.
// Do not overwrite your file each time you run a command.

