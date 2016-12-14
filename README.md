# liri-node-app
Week 10 Homework
Completed as tasked. Bonus to be worked on before class 

-------------------------------------------
//Errors encountered with Twitter NPM//

-------------------------------------------
//Errors encountered with (Spotify) NPM//
No errors. Task Complete

-------------------------------------------
//Errors encountered with (OMBD) NPM//

-------------------------------------------
//Errors encountered with (FS) NPM//






--------------------------- Reads the file
var fs = require('fs');
fs.readFile('movies.txt', 'utf8', function(err, data) {
  if (err) return console.log(err);
  console.log(data);
});


--------------------------- Appends to file
var file = process.argv[2];

fs.appendFile(file, "Hello Barry Allen", function(err){
if (err) return console.log(err);
console.log("Content Added");
});










