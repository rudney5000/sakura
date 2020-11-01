var map = document.querySelector('#map')
var paths = map.querySelectorAll('.map__image a')
var links = map.querySelectorAll('.map__info')


if (NodeList.prototype.forEach === undefined) {
    NodeList.prototype.forEach = function (callback) {
        [].forEach.call(this, callback)
    }
}


// Les données a utilisé (à adapter avec la forme réelle des données)
var allData = {
"RU-AD" : {
  Dinosaur : [
    "Acrocanthosaurus (top-spined lizard)",
    "Albertosaurus (Alberta lizard)",
    "Allosaurus (other lizard)",
    "Apatosaurus (deceptive lizard)"
  ],
  Length : [
    12.2,
    15,
    36,
    20
  ]
},
"RU-SA" : {
  Dinosaur : [
    "ЖКХ",
    "Дороги",
    "гранжданская ответственность",
    "автрокатастрофы"
  ],
  Length : [
    50,
    26,
    36,
    20
  ]
}
}


var b = 0
function tabeauValeur(id) {

  /**
   * Il faut deux tableaux, une qui sera conteneur (elements) et l'autre qui sera l'ensemble 
   * des enfants (element) selon la structure de la librairie
   */
  var  elements = [];
  var element = [];

  // C'est le tableau qui va contenir l'ensemble des élément d'un axe
  var dino, tailleDino = [];
   dino = allData[id].Dinosaur;

    // C'est le tableau qui va contenir l'ensemble des élément de l'autre axe
   tailleDino = allData[id].Length;

   // Cette line permettra à la librairie de conaitre les exe, à l'occurence ici 2
  elements[0]  = ['Dinosaur', 'Length']  


    for (var i = 0; i < dino.length; i++) {

      // On forme les deux lignes
      element [0] = dino[i]
      element [1] = tailleDino[i]
      // On insert les deux lignes
      elements.push(element) ;  
      // On reintialise pour prendre à nouveau des lignes (les ligne selon l'exemple de documentation)
      element = [];
    }
    
  // On retourne le tableau complèt pour former l'ensemble de nos données 
  return elements
}



paths.forEach(function (path) {
    path.addEventListener('mouseenter', function (e) {
    

      google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable(
          // On appelle notre fonction on lui passant l'id de la region survolé et la 
          // fonction fera la correspondance dans depuis les données qui se trouve dans 
          // le tableau ou la source de données (json, xml, csv...)
          tabeauValeur(path.getAttribute('id'))  
        );

        var options = {
          title: 'избранный город',
          legend: { position: 'none' },
        };

        var chart = new google.visualization.Histogram(document.getElementById('chart_div'));
        chart.draw(data, options);
      }
      
        
    })
})

