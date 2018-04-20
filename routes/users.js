var express = require('express')
var app = express()

// SHOW LIST OF USERS
app.get('/', function(req, res, next) {
	req.getConnection(function(error, conn) {
		conn.query('SELECT * FROM users ORDER BY id DESC',function(err, rows, fields) {
			//if(err) throw err
			if (err) {
				req.flash('error', err)
				res.render('user/list', {
					title: 'User List',
					data: ''
				})
			} else {
				// render to views/user/list.ejs template file
				res.render('user/list', { //user/list
					title: 'User List',
					data: rows
				})
			}
		})
	})
});

// SHOW ADD USER FORM
app.get('/signup', function(req, res, next){
	// render to views/user/add.ejs
	res.render('/', {
		title: 'Add New User',
		pseudo: '',
		email: '',
		password: ''
	})
})

// ADD NEW USER POST ACTION
app.post('/signup', function(req, res, next){
	req.assert('pseudo', 'Pseudo is required').notEmpty()           //Validate pseudo
	req.assert('email', 'Email is required').isEmail()             //Validate email
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
			pseudo: req.sanitize('pseudo').escape().trim(),
			email: req.sanitize('email').escape().trim(),
			password: req.sanitize('password').escape().trim()
		}

		req.getConnection(function(error, conn) {
			conn.query('INSERT INTO users SET ?', user, function(err, result) {
				//if(err) throw err
				if (err) {
					req.flash('error', err)

					// render to views/user/add.ejs
					res.render('user/add', {
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

// SHOW EDIT USER FORM
app.get('/edit/(:id)', function(req, res, next){
	req.getConnection(function(error, conn) {
		conn.query('SELECT * FROM users WHERE id = ' + req.params.id, function(err, rows, fields) {
			if(err) throw err

			// if user not found
			if (rows.length <= 0) {
				req.flash('error', 'User not found with id = ' + req.params.id)
				res.redirect('/users')
			}
			else { // if user found
				// render to views/user/edit.ejs template file
				res.render('user/edit', {
					title: 'Edit User',
					//data: rows[0],
					id: rows[0].id,
					pseudo: rows[0].pseudo,
					email: rows[0].email,
					password: rows[0].password
				})
			}
		})
	})
})


// ------ Admin -------

// EDIT USER POST ACTION
app.put('/edit/(:id)', function(req, res, next) {
	req.assert('pseudo', 'Pseudo is required').notEmpty()           //Validate name
	req.assert('email', 'Email is required').isEmail()             //Validate email
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
		var user = {
			pseudo: req.sanitize('pseudo').escape().trim(),
			email: req.sanitize('email').escape().trim(),
			password: req.sanitize('password').escape().trim()
		}

		req.getConnection(function(error, conn) {
			conn.query('UPDATE users SET ? WHERE id = ' + req.params.id, user, function(err, result) {
				//if(err) throw err
				if (err) {
					req.flash('error', err)

					// render to views/user/add.ejs
					res.render('user/edit', {
						title: 'Edit User',
						id: req.params.id,
						pseudo: req.body.pseudo,
						email: req.body.email,
						password: req.body.password
					})
				} else {
					req.flash('success', 'Data updated successfully!')

					// render to views/user/add.ejs
					res.render('user/edit', {
						title: 'Edit User',
						id: req.params.id,
						pseudo: req.body.pseudo,
						email: req.body.email,
						password: req.body.password
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
        res.render('user/edit', {
            title: 'Edit User',
			id: req.params.id,
			pseudo: req.body.pseudo,
			email: req.body.email,
			password: req.body.password
        })
    }
})

// DELETE USER
app.delete('/delete/(:id)', function(req, res, next) {
	var user = { id: req.params.id }

	req.getConnection(function(error, conn) {
		conn.query('DELETE FROM users WHERE id = ' + req.params.id, user, function(err, result) {
			//if(err) throw err
			if (err) {
				req.flash('error', err)
				// redirect to users list page
				res.redirect('/users')
			} else {
				req.flash('success', 'User deleted successfully! id = ' + req.params.id)
				// redirect to users list page
				res.redirect('/users')
			}
		})
	})
})

module.exports = app