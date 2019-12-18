// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
const { prompt } = require('inquirer');
const  question = require('./lib/Question.js')
const {conexion} = require ('./server.js')
var fs = require('fs')

const askThequestions = async ()  => {
  try { 
    let {user} = await prompt(question)
  console.log(question)
  

}catch (error) {
    console.log(error)
}

}
askThequestions()
// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get("/api/notes", function(req, res){
  res.json(db)
})






// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });