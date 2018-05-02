const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'tmp/' });
const fs = require('fs');
const mysql = require('mysql');

const db = mysql.createConnection({
    host     :  'localhost', 	// database host
	user     :  'root', 		// your database username
	password :  'cupcat16', 		// your database password
	database :  'edual' 		// your database name
});

router.get('/', function(req, res) {
    res.render('pages/index');
});

router.get('/administration', (req, res, next) => {
    res.render('pages/administration');
});

/* ----- Upload ----- */
router.post('/jbgfydthgj', upload.array('monfichier'), (req, res, next) => {
    for(let i = 0; i < req.files.length; i++) {
        if (req.files[i].size > 3000000) {
            res.send('Fichier trop volumineux');
        } else if (req.files[i].mimetype !== 'image/png'){
            res.send('Extension de fichier non accepté')
        } else {
            fs.rename(req.files[i].path, 'public/img/' + 'background.png', (err) => {
                if (err) {
                    res.send('Problème durant le déplacement');
                } else {
                	res.send('Fichier uploadé avec succès');
                }
            });
        }
    }
});

// "Je rentre dans l'arêne //
router.post('/quotes', (req, res) => {
    console.log('vous êtes inscris!')
})


// about page
router.get('/about', function(req, res) {
    res.render('pages/about');
});

// profil page
router.get('/profil', function(req, res) {
    res.render('pages/profil');
});

// let sql = 'SELECT gifts from Lots';
// game
router.get('/game/:id(\\d+)', function(req, res) {
    res.render('pages/game');
});


router.get('/game/:id(\\d+)', function(req, res) {
    res.render('pages/game');
});

module.exports = router;
