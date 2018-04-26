
console.log("je suis dans losts.Sql =)")



const afficherLots = document.getElementById("dropdownMenuButton");

afficherLots.addEventListener('click', function (event){
  
  console.log("je suis dans mon event");

  let request = new XMLHttpRequest();

  request.open("GET", "/paris/api/laroutedansmonrouter", true);
  request.send()

  event.preventDefault();
})

  // ecrire une requete ajax avec jQuery ou XMLHttpRequest vers le router nodeJs

//   // Au clic sur le bouton #dropdownMenuButton je lance la fonction
// $('#dropdownMenuButton').on('click', function(){

//   // J'initialise le variable box
//   var box = $('#result');

//   // Je définis ma requête ajax
//   $.ajax({

//       // Adresse à laquelle la requête est envoyée
//       url: '/paris/api/laroutedansmonrouter',

//       // La fonction à apeller si la requête aboutie
//       success: function (data) {
//           // Je charge les données dans box
//           box.html(data);
//       },

//       // La fonction à appeler si la requête n'a pas abouti
//       error: function() {
//           // J'affiche un message d'erreur
//           box.html("Désolé, aucun résultat trouvé.");
//       }

//   });

// });
  // TRAITEMENT de la response du serveur DU SERVEUR

  // modifier le DOM jeu.ejs




// LE CODE EN DESSOUS EST A OUBLIE ICI CAR C EST POUR LE BACK


// const mysql = require('mysql');

// const connectionParameters = {
//   host     : 'localhost',
//   user     : 'root',
//   password : 'root',
//   database : 'edual'
// }


// getLots = (id, cb) => {
//   try {
//   const connection = mysql.createConnection(connectionParameters);
//     // Définition des variables
//     let callLots = {lots: []}
//     let giftArr = []
//     // Initialisation de la connection
//     connection.connect((err) => {
//       try {
//         if (err) {
//           throw ('connection with the database failed '+err);
//         } else {
//           //Requête SQL
//           connection.query(
//             `SELECT gifts FROM lots`
//         }
//           callLots.Lots.push({giftArr}); // je rempli mon tableau par les données de ma colonne gifts
//             }
//             cb(callLots);
//     });
//     }
// } catch (err) {
//           throw ("An error occur : "+err);
//       } finally {
//         connection.end();
//       }
// );





// module.exports = {
//   getLots
// };

// getLots(1,function(data) {
//    console.log(JSON.stringify(data,0,2));
//   });



/* Pour appeler la fonction getLots, il faut mettre un callback qui retournera l'objet voulu comme dans l'exemple ci dessous

Le 1 correspond à l'Id du gift que vous voulez charger
La fonction en exemple affichera le résultat dans la console de manière "lisible"


La solution en dessous nous permettra de prévoir des routes passant en paramètre l'objet correspondant

router.get("/:id",(req,res)=>{

  getLots(1, function(err,data){
    res.render("mavue",{lots});
    
  });
}

*/