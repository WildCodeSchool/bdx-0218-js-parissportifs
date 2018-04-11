// server.js
// load the things we need
var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
    res.render('pages/index');
});

// paris page
app.get('/paris', function(req, res) {
    res.render('pages/paris');
});

// about page
app.get('/about', function(req, res) {
    res.render('pages/about');
});

// profil page
app.get('/profil', function(req, res) {
    res.render('pages/profil');
});

app.listen(3000);
console.log('3000 is the magic port');
