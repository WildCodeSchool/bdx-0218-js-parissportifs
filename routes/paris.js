var express = require('express');
var router = express.Router();

router.post('/matches/:id(\d+)', function (req, res, next) {
  res.send(req.params.id_match);
});

router.get('/game/:id(\d+)', function (req, res, next) {
  res.render('game', {id : req.params.id_match});
})