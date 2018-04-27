var express = require('express');
var router = express.Router();
var require = require('mysql');

///////////////////////////////////////////
/////// Lier la Bdd //////////////////////
/////////////////////////////////////////
var mySqlClient = mysql.creationConnection({
   host: "localhost",
    user: "root",
    password: "wildcodeschool2018",
    database: "edual"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

/* GET users listing. */
router.get('/', function (req, res) {
  let users = [];
  db.each("SELECT * FROM users", (err, row) => {
    console.log(row);
    users.push(row);
  }, () => res.json(users));
});

router.get('/:id', function (req, res) {
  let user = {};
  db.each("SELECT * FROM users WHERE id=" + req.params.id,
    (err, row) => {
      user = row
    },
    () => res.json(user));
});

router.post('/', function (req, res) {
  console.log(req.body);
  let stmt = db.prepare("INSERT INTO users (id, pseudo, email, password, avatar) VALUES (?,?,?,?,?)");
  stmt.run(req.body.pseudo);
  stmt.finalize(() => {

    res.status(200).end();
  })
});
router.put('/:id', function (req, res) {
  let stmt = db.prepare("UPDATE users set pseudo=?, email=?, password=?  WHERE id=?");
  stmt.run(req.body.pseudo);
  stmt.finalize(() => {

    res.status(200).end();
  })
});
router.delete('/:id', function (req, res) {
  let stmt = db.exec("DELETE FROM users WHERE id=" + req.params.id,
    () => res.status(200).end());
});

module.exports = router;