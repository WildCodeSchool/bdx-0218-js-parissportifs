const express = require('express');
const app = express();
const router = express.Router();
const mysql = require('mysql');

// Create connection
const db = mysql.createConnection({
    host     :  'localhost', 	// database host
	user     :  'root', 		// your database username
	password :  'root', 		// your database password
	database :  'edual' 		// your database name
});

// Insert
app.post('/addpost1', (req, res, next) => {
    let post = {
		pseudo: req.body.username, 
		password: req.body.userpassword
	};
    let sql = 'INSERT INTO users SET ?';
    let query = db.query(sql, post, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Posts 1 added...');
    });
});

app.post('/addUsers', (req, res, next) => {
	console.log('bitch plz');
	
	let post = {
	pseudo: req.body.pseudo,
	email: req.body.email,
	password: req.body.password
	};
	let sql = 'INSERT INTO users SET ?';
	let query = db.query(sql, post, (err, result) => { 
	if (err) throw err;
	console.log(result);
	res.redirect('/paris');
	});
	});
	

// ADD NEW USER POST ACTION
app.post('/hjgfdxgfhgjvb', function(req, res, next){
	req.assert('username', 'Username is required').notEmpty()           //Validate username
    req.assert('password', 'A valid password is required').notEmpty()  //Validate password

    var errors = req.validationErrors()

    if( !errors ) {   //No errors were found.  Passed Validation!

		/********************************************
		 * Express-validator module

		req.body.comment = 'a <span>comment</span>';
		req.body.username = '   a user    ';

		req.sanitize('comment').escape(); // returns 'a &lt;span&gt;comment&lt;/span&gt;'
		req.sanitize('username').trim(); // returns 'a user'
		********************************************/
		let user = {
			username: req.sanitize('username').escape().trim(),
			password: req.sanitize('password').escape().trim()
		}

		req.getConnection(function(error, conn) {
			conn.query('INSERT INTO users SET ?', user, function(err, result) {
				//if(err) throw err
				if (err) {
					req.flash('error', err)

					// render to views/user/add.ejs
					res.render('administration/add', {
						title: 'Add New User',
						pseudo: user.pseudo,
						email: user.email,
						password: user.password
					})
				} else {
					req.flash('success', 'Data added successfully!')

					// render to views/user/add.ejs
					res.render('user/add', {
						title: 'Add New User',
						pseudo: '',
						email: '',
						password: ''
					})
				}
			})
		})
	}
	else {   //Display errors to user
		var error_msg = ''
		errors.forEach(function(error) {
			error_msg += error.msg + '<br>'
		})
		req.flash('error', error_msg)

		/**
		 * Using req.body.name
		 * because req.param('name') is deprecated
		 */
        res.render('user/add', {
            title: 'Add New User',
            pseudo: req.body.pseudo,
            email: req.body.email,
            password: req.body.password
        })
    }
})

module.exports = app;
