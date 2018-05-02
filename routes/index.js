const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'tmp/' });
const fs = require('fs');
const app = express();

app.get('/', function(req, res) {
	// render to views/index.ejs template file
	res.render('index', {title: 'Express'})
})

router.get('/administration', (req, res, next) => {
    res.render('pages/administration');
});

// Route permettant d'acceder à l'espace admin
router.get('/administration/dashboard', (req, res, next) => {
    res.render('pages/dashboard');
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


/**
 * We assign app object to module.exports
 *
 * module.exports exposes the app object as a module
 *
 * module.exports should be used to return the object
 * when this file is required in another module like app.js
 */
module.exports = app;
module.exports = router;
