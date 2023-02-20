const http = require('http');
const fs = require('fs');
const portno = require('minimist')(process.argv.slice(2));

let homePage;
let projectPage;
let registrationPage;
let registrationScript;

fs.readFile("home.html", (err, data) => {
  if (err) throw err;
  homePage = data.toString();
})

fs.readFile("project.html", (err, data) => {
  if (err) throw err;
  projectPage = data.toString();
})

fs.readFile("registration.html", (err, data) => {
  if (err) throw err;
  registrationPage = data.toString();
})

fs.readFile("script.js", (err, data) => {
  if (err) throw err;
  registrationScript = data.toString();
})

//app.get() method to define routes for the project and registration pages. 
//res.send() method to send the appropriate HTML content back to the client.
const express = require('express');
const app = express();

// Define a route for the project page
app.get('/project', (req, res) => {
  res.send(projectPage);
});

// Define a route for the registration page
app.get('/registration', (req, res) => {
  res.send(registrationPage);
});

// Start the server
app.listen(portno.port, () => {
  console.log(`Server listening on port ${portno.port}`);
});
