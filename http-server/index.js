const express = require('express');
const app = express();
//step 2 :

app.get('/registration', function(req, res) {
  res.sendFile('C:/Users/ashut/OneDrive/Desktop/http-server/registration.html');
});


// app.get('/registration', function(req, res) {
//   res.sendFile(__dirname + '/http-server/registration.html');
// });

//step 4 :
const args = require('minimist')(process.argv.slice(2));
const port = args['port'] || 5000;

//step 5 :
app.listen(port, function() {
  console.log('Server started on port ' + port);
});


// app.get('/registration', function(req, res) {
//   res.sendFile(__dirname + '/http-server/registration.html');
// });
