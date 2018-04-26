var express = require('express');
var router = express.Router();
const connectionParameters = {
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  port : '3306',
  database : 'edual'
}

const gift  = 'SELECT gifts FROM Lots;'
// router.get('/game/:id(\\d+)', function (req, res, next) {
//   res.render('game', {id : req.params.id_match});
// })


router.get( '/api/laroutedansmonrouter', function(req,res,next) {
  console.log("je suis dans le router");
  
//   // ICI JE DOIS FAIRE MA REQUETE VERS MON SERVEUR MYSQL


// // le router doit renvoyer une res.send(lesdonnéesdemarequetesql)
//   res.send(maRequeteSQL)
})

module.exports = router;