var express = require('express');
var router = express.Router();

router.get('/game/:id(\\d+)', function (req, res, next) {
  res.render('game', {id : req.params.id_match});
})