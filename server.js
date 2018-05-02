// server.js
// load the things we need
const express = require('express');
const app = express();
const mysql = require('mysql');

// IMPORT DE MON ROUTEUR
var paris = require('./routes/paris');
var index = require('./routes/index')
var users = require('./routes/users')

app.use(express.static(__dirname + '/public'));

/**
 * This middleware provides a consistent API
 * for MySQL connections during request/response life cycle
 */
var myConnection  = require('express-myconnection')
/**
 * Store database credentials in a separate config.js file
 * Load the file/module and its values
 */
// var config = require('./config')
// var dbOptions = {
// 	host:	  config.database.host,
// 	user: 	  config.database.user,
// 	password: config.database.password,
// 	port: 	  config.database.port,
// 	database: config.database.db
// }
/**
 * 3 strategies can be used
 * single: Creates single database connection which is never closed.
 * pool: Creates pool of connections. Connection is auto release when response ends.
 * request: Creates new connection per new request. Connection is auto close when response ends.
 */
// app.use(myConnection(mysql, dbOptions, 'pool'))

// set the view engine to ejs
app.set('view engine', 'ejs');

/**
 * Express Validator Middleware for Form Validation
 */
var expressValidator = require('express-validator')
app.use(expressValidator())


/**
 * body-parser module is used to read HTTP POST data
 * it's an express middleware that reads form's input
 * and store it as javascript object
 */
var bodyParser = require('body-parser')
/**
 * bodyParser.urlencoded() parses the text as URL encoded data
 * (which is how browsers tend to send form data from regular forms set to POST)
 * and exposes the resulting object (containing the keys and values) on req.body.
 */
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


/**
 * This module let us use HTTP verbs such as PUT or DELETE
 * in places where they are not supported
 */
var methodOverride = require('method-override')

/**
 * using custom logic to override method
 *
 * there are other ways of overriding as well
 * like using header & using query value
 */
app.use(methodOverride('_method'));

/**
 * This module shows flash messages
 * generally used to show success or error messages
 *
 * Flash messages are stored in session
 * So, we also have to install and use
 * cookie-parser & session modules
 */
var flash = require('express-flash')
var cookieParser = require('cookie-parser');
var session = require('express-session');

app.use(cookieParser('keyboard cat'))
app.use(session({
	secret: 'keyboard cat',
	resave: false,
	saveUninitialized: true,
	cookie: { maxAge: 60000 }
}))
app.use(flash())    

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/', index);
app.use('/users', users);
app.use('/paris', paris);
// app.use('/administration', config)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

app.listen(3000);
console.log('3000 is the magic port');
