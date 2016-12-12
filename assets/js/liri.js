
var action = process.argv[2];
var userInput = process.argv[3];


var Twitter = require('twitter');
var spotify = require('spotify');




		//COMMAND
	 	//node liri.js my-tweets

	switch (action) {
	  case "my-tweets":
		twitter()
		break;


		//COMMAND
		//node liri.js spotify-this-song '<song name here>'

	  case "spotify-this-song":
	  spotify();
	  	
	    //This will show the following information about the song in your terminal/bash window
		// Artist(s)
		// The song's name
		// A preview link of the song from Spotify
		// The album that the song is from
		// if no song is provided then your program will default to
		//The Sign" by Ace of Base

	    console.log('');
	    break;





		


		//COMMAND
		// node liri.js do-what-it-says



	  case "movie-this":
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




		//COMMAND
		// node liri.js do-what-it-says

	    console.log('');
		break;


		// Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
		// It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt.
		// Feel free to change the text in that document to test out the feature for other commands.




  case "do-what-it-says":
    console.log('');
    break;
}






// Function Area-------------

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

} // End of twitter function



function spotify() {
	spotify.search({ type: 'track', query: 'dancing in the moonlight' }, function(err, data) {
    	if ( err ) {
        	console.log('Error occurred: ' + err);
        	return;
    	}

    // Do something with 'data'
	});


}




















//BONUS

// In addition to logging the data to your terminal/bash window, output the data to a .txt file called log.txt.
// Make sure you append each command you run to the log.txt file.
// Do not overwrite your file each time you run a command.

