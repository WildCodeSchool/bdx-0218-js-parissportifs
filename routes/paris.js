var express = require('express');
var router = express.Router();
const mysql = require('mysql');

// Create connection
const db = mysql.createConnection({
  host: 'localhost', // database host
  user: 'root', // your database username
  password: 'Azerty123!', // your database password
  database: 'edual' // your database name
});

router.get('/game/:id(\\d+)', function (req, res, next) {
  res.render('game', {id : req.params.id_match});
})

router.get("/", function (req, res) {
  res.render('pages/paris');

})

router.get('/api/laroutedansmonrouter', function (req, res, next) {
  let sql = 'SELECT gifts from Lots';
  let query = db.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
})


module.exports = router;