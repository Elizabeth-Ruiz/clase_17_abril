var hxd;

function preload() {
  hxd = loadTable("https://raw.githubusercontent.com/profesorfaco/dgp602.data/gh-pages/data/hdx.csv", "csv", "header");
}

function setup() {
  var miCanvas = createCanvas(windowWidth, 400);
  miCanvas.parent('miContenedor');
  print(hxd.getRowCount() + " filas en la tabla");
  print(hxd.getColumnCount() + " columnas en la tabla");
  noLoop();
}

function windowResized() {
  resizeCanvas(windowWidth, 400);
}

function draw(){
  background(230);
  var chile =29;
  var otro = 47;

  textAlign(LEFT);
  textSize(20);
    fill(255,100,100);
  text(hxd.get(chile,1),+ ((width/30)-10),50);
    fill(100);
  text(hxd.get(otro,1),+ ((width/30)+60),50);// chile es la cooordenada 29

  for (var i = 0; i < (hxd.getRowCount()+4); i++){
    textSize(11);
    textAlign(CENTER);
    fill(255,100,100);
    text(hxd.get(chile,(3+i)), ((width/30)*(i+1)), (height-30)- hxd.get(chile,(3+i)));
      fill(100);
    text(hxd.get(otro,(3+i)), ((width/30)*(i+1)), (height-30)- hxd.get(otro,(3+i)));
    fill(0);
    text('2015'-i,((width/30)*(i+1)),height-20);
  }
}
