//Upcoming matchs LOL
fetch('https://api.pandascore.co/lol/matches/upcoming.json?token=mJ8REQ0o29P34viQidrlA7hIs6vKs94-orJbzoWY-2ZMMY9TAoo')
    .then(res => res.json())
    .then(json => {
    console.log("LOL json", json)
    document.getElementById("lol_match1_opp1").innerHTML = json[0].opponents[0].opponent.name;
   document.getElementById("lol_match1_opp2").innerHTML = json[0].opponents[1].opponent.name;
   document.getElementById("lol_match1_date").innerHTML = json[0].begin_at;
  // document.getElementById("lol_match1_id").innerHTML = json[0].id;
   document.getElementById("lol_match2_opp1").innerHTML = json[1].opponents[0].opponent.name;
   document.getElementById("lol_match2_opp2").innerHTML = json[1].opponents[1].opponent.name;
   document.getElementById("lol_match2_date").innerHTML = json[1].begin_at; 
  // document.getElementById("lol_match2_id").innerHTML = json[5].id;
    document.getElementById("lol_match3_opp1").innerHTML = json[2].opponents[0].opponent.name;
   document.getElementById("lol_match3_opp2").innerHTML = json[2].opponents[1].opponent.name;
   document.getElementById("lol_match3_date").innerHTML = json[2].begin_at;
 //  document.getElementById("lol_match3_id").innerHTML = json[10].id;
   document.getElementById("lol_match4_opp1").innerHTML = json[20].opponents[0].opponent.name;
   document.getElementById("lol_match4_opp2").innerHTML = json[20].opponents[1].opponent.name;
   document.getElementById("lol_match4_date").innerHTML = json[20].begin_at;
 //  document.getElementById("lol_match4_id").innerHTML = json[15].id;
    document.getElementById("lol_match5_opp1").innerHTML = json[21].opponents[0].opponent.name;
   document.getElementById("lol_match5_opp2").innerHTML = json[21].opponents[1].opponent.name;
   document.getElementById("lol_match5_date").innerHTML = json[21].begin_at; 
 //  document.getElementById("lol_match5_id").innerHTML = json[20].id;
});

//Upcoming matchs Overwatch
fetch('https://api.pandascore.co/ow/matches/upcoming.json?token=mJ8REQ0o29P34viQidrlA7hIs6vKs94-orJbzoWY-2ZMMY9TAoo')
    .then(res => res.json())
    .then(json => {
        console.log(json[0].serie_id)

    console.log("OW json", json)
    document.getElementById("ow_match1_opp1").innerHTML = json[0].opponents[0].opponent.name;
   document.getElementById("ow_match1_opp2").innerHTML = json[0].opponents[1].opponent.name;
   document.getElementById("ow_match1_date").innerHTML = json[0].begin_at;
  //  document.getElementById("ow_match1_id").value = json[0].id;
   document.getElementById("ow_match2_opp1").innerHTML = json[5].opponents[0].opponent.name;
   document.getElementById("ow_match2_opp2").innerHTML = json[5].opponents[1].opponent.name;
   document.getElementById("ow_match2_date").innerHTML = json[5].begin_at; 
  // document.getElementById("ow_match2_id").innerHTML = json[5].id;
    document.getElementById("ow_match3_opp1").innerHTML = json[10].opponents[0].opponent.name;
   document.getElementById("ow_match3_opp2").innerHTML = json[10].opponents[1].opponent.name;
   document.getElementById("ow_match3_date").innerHTML = json[10].begin_at;
  // document.getElementById("ow_match3_id").innerHTML = json[10].id;
   document.getElementById("ow_match4_opp1").innerHTML = json[15].opponents[0].opponent.name;
   document.getElementById("ow_match4_opp2").innerHTML = json[15].opponents[1].opponent.name;
   document.getElementById("ow_match4_date").innerHTML = json[15].begin_at;
  // document.getElementById("ow_match4_id").innerHTML = json[15].id;
    document.getElementById("ow_match5_opp1").innerHTML = json[20].opponents[0].opponent.name;
   document.getElementById("ow_match5_opp2").innerHTML = json[20].opponents[1].opponent.name;
   document.getElementById("ow_match5_date").innerHTML = json[20].begin_at; 
  // document.getElementById("ow_match5_id").innerHTML = json[20].id;
});




//Upcoming matchs Dota2
fetch('https://api.pandascore.co/dota2/matches/upcoming.json?token=mJ8REQ0o29P34viQidrlA7hIs6vKs94-orJbzoWY-2ZMMY9TAoo')
    .then(res => res.json())
    .then(json => {
    console.log("Dota2 json", json)
    document.getElementById("dota2_match1_opp1").innerHTML = json[0].opponents[0].opponent.name;
   document.getElementById("dota2_match1_opp2").innerHTML = json[0].opponents[1].opponent.name;
   document.getElementById("dota2_match1_date").innerHTML = json[0].begin_at;
    console.log(json[0].toString().serie_id);
  // document.getElementById("dota2_match1_id").innerHTML = json[0].id;
   document.getElementById("dota2_match2_opp1").innerHTML = json[5].opponents[0].opponent.name;
   document.getElementById("dota2_match2_opp2").innerHTML = json[5].opponents[1].opponent.name;
   document.getElementById("dota2_match2_date").innerHTML = json[5].begin_at; 
 //  document.getElementById("dota2_match2_id").innerHTML = json[5].id;
    document.getElementById("dota2_match3_opp1").innerHTML = json[10].opponents[0].opponent.name;
   document.getElementById("dota2_match3_opp2").innerHTML = json[10].opponents[1].opponent.name;
   document.getElementById("dota2_match3_date").innerHTML = json[10].begin_at;
 //  document.getElementById("dota2_match3_id").innerHTML = json[10].id;
   document.getElementById("dota2_match4_opp1").innerHTML = json[15].opponents[0].opponent.name;
   document.getElementById("dota2_match4_opp2").innerHTML = json[15].opponents[1].opponent.name;
   document.getElementById("dota2_match4_date").innerHTML = json[15].begin_at;
  // document.getElementById("dota2_match4_id").innerHTML = json[15].id;
    document.getElementById("dota2_match5_opp1").innerHTML = json[20].opponents[0].opponent.name;
   document.getElementById("dota2_match5_opp2").innerHTML = json[20].opponents[1].opponent.name;
   document.getElementById("dota2_match5_date").innerHTML = json[20].begin_at;    
  //  document.getElementById("dota2_match5_id").innerHTML = json[20].id;
});


/*$(document).ready(function() {
    $.get('https://api.pandascore.co/lol/matches/upcoming.json?token=mJ8REQ0o29P34viQidrlA7hIs6vKs94-orJbzoWY-2ZMMY9TAoo', function(err, json) {
        const data = json[0]
      $("#match1_opp1").text(data.opponents[0].opponent.name); 
      $("#match1_opp2").text(data.opponents[1].opponent.name);
    });
});*/