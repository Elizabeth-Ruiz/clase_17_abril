var spaceOddity;

function setup() {
  loadJSON('https://faco.cl/data/ejemplo.json', gotData,'jsonp');
  var miCanvas = createCanvas(windowWidth, 400);
  miCanvas.parent('miContenedor');
}

function gotData(data){
   console.log(data); // me tira un dato a la consola
   spaceOddity = data;
}

function draw(){ // dibujar
  background(235);
  if(spaceOddity){
    rectMode(CORNER)
    for (var n = 0; n < spaceOddity.Oscar.length; n++){          // repitición
    text(spaceOddity[0].Oscar.length, 10, 20*(n+1));
    }
  }
}



//no se pudo desarrolla
