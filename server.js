const express = require('express');
const app = express();
const path = require('path');
var bodyParser = require('body-parser');
var xhub = require('express-x-hub');
const axios = require('axios')

// If an incoming request uses
// a protocol other than HTTPS,
// redirect that request to the
// same url but with HTTPS
const forceSSL = function() {
  return function (req, res, next) {
    if (req.headers['x-forwarded-proto'] !== 'https') {
      return res.redirect(
       ['https://', req.get('Host'), req.url].join('')
      );
    }
    next();
  }
}

// Instruct the app
// to use the forceSSL
// middleware
app.use(forceSSL());

// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/dist/ng-base'));


// For all GET requests, send back index.html
// so that PathLocationStrategy can be used
console.log('Implementation for all requests');
app.get('/*', function(req, res) {
  console.log('I am reading all other request');
  res.sendFile(path.join(__dirname + '/dist/ng-base/index.html'));
});

// Start the app by listening on the default
// Heroku port
app.listen(process.env.PORT || 8080);
