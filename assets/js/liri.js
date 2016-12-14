
var action = process.argv[2];
var userInput = process.argv[3];


var Twitter = require('twitter');
var spotify = require('spotify');
var request = require("request");
var 	 fs = require('fs');

logger()
		//COMMAND
	 	//node liri.js my-tweets

	switch (action) {
	  case "my-tweets":
		twitter();
		addToLog()
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
		  	addToLog()
	  break;



	  case "movie-this":
	  	if (userInput == undefined) {
	  		console.log("Underfined search... Default search Enabled");
	  		userInput = "Batman";
	  		movies(userInput);
	  		} else {
	  			movies(userInput);
	  		}
	  		addToLog()	
	  break;

      case "do-what-it-says":
      	doWhatItSays();
      	addToLog()
      break;
}






// Function Area-------------


// Twitter NPM
function twitter(){
	var keys = require("./keys.js"); //Import keys
	keys = keys.twitterKeys;
	var client = new Twitter(keys);
	var params = { 
		count: 20  // Automatically sets to user profile so i set tweet count to 20
	};

	client.get('statuses/user_timeline', params, function(err, data, response) {
   		for (var i = 0; i < data.length; i++) {
  			// var myTweets = ;
  			console.log(data[i].text);//  Sends out my Tweets
  			console.log('-----------------------------------------------------------------');
  		}
	})
} // End Twitter Function

//Spotify NPM  ||WARNING||, Needs to be looged in your spotify account to work.
function song(userInput) {
	spotify.search({ type: 'track', query: userInput }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }  // Calls the NPM for info and sends out song information
    	console.log('Artist: '+ data.tracks.items[0].album.artists[0].name);
    	console.log('Preview Link: '+ data.tracks.items[0].external_urls.spotify);
    	console.log('Song Name: '+ data.tracks.items[0].name);
    	console.log('Album of Song: '+ data.tracks.items[0].album.name);
	});
}// try running default mode! and enjoy singing to it! Youll thank me later!

//add notes
function movies(userInput) {
//Found a  weird bug that Node automatically seperates your words with +'s when you make your call use "example" to activate this feature
	var nodeArgs = process.argv[3];
	var movieName = nodeArgs;

	var webQuery = 'http://www.omdbapi.com/?t='+ movieName +'&y=&plot=short&tomatoes=true&r=json';
	// console.log(webQuery);// For testing

	// Then run a request to the OMDB API with the movie entered by user.
	request(webQuery, function(error, response, body) {
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
	}); // run default and enjoy.
}


function doWhatItSays() {
  fs.readFile('random.txt', 'utf8', function(err, data) {
  	if (err) return console.log(err);
  	  
  	var objectData = data.split(','); //Splits Data .

  	var dataAction = objectData[0]; // Grabs item 0 from object
  	var dataInput = objectData[1]; // grabs item 1 from object

switch (dataAction) {
	  case "my-tweets":
		twitter();
	  break;

	  case "spotify-this-song":
		  	if (dataInput == undefined) {
		  		console.log("Underfined search... Default search Enabled");
		  		dataInput = "Crazy Train";
		  		song(dataInput);
		  	} else {
		  		song(dataInput);
		  	}
	  break;

	  case "movie-this":
	  	if (dataInput == undefined) {
	  		console.log("Underfined search... Default search Enabled");
	  		dataInput = "Batman";
	  		movies(dataInput);
	  		} else {
	  			movies(dataInput);
	  		}
	  break;
	}

	eval(dataAction, dataInput); // this i had a bit of a hard time using. Because so many
// people warned againts using it because it has security warnings when running a app.
// and not many options i could find.
	});
  } 





//BONUS

// In addition to logging the data to your terminal/bash window, output the data to a .txt file called log.txt.
// Make sure you append each command you run to the log.txt file.
// Do not overwrite your file each time you run a command.

function logger() {
	var toLog = [action, userInput];
	var fs = require('fs');
	fs.writeFile('log.txt', toLog, function(err){
  	if (err){return console.log(err);}
	return console.log('\n');
	});
}


function addToLog() {
var toLog = [action, userInput];

	var fs = require('fs');
	fs.appendFile('log.txt', toLog, function(err){if (err) return console.log(err);
		return console.log("Content Added\n");
	});
}






