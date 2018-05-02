let url = window.location.pathname;
let id_match = url.substring(url.lastIndexOf('/') + 1);
let url_match = "https://api.pandascore.co/matches/" + id_match + ".json?token=mJ8REQ0o29P34viQidrlA7hIs6vKs94-orJbzoWY-2ZMMY9TAoo";

//match selectionne
fetch(url_match)
.then(res => res.json())
.then(json => {
  console.log("match select json", json)
  //document.getElementById("match_id").textContent = json.id;
  document.getElementById("opp1").textContent = json.opponents[0].opponent.name;
  document.getElementById("opp2").textContent = json.opponents[1].opponent.name;
  //document.getElementById("match_date").textContent = json.begin_at;
});


  