var x = []; //Es un arreglo
var y = []; //Es un arreglo
var incremento = [];
var h = [];

function setup() {
  createCanvas(600, 400);
  for(var i =0; i < 5; i = i + 1){
    x[i] = floor(random(1, 600))
    y[i] = 0;  
    incremento[i] = floor(random(1, 20));
    h[i] = floor(random(1, 20));
  } 
   print(x);
   print(y);
   print(incremento);
   print(h);
}

function draw() {
  background(255,0,0);
  stroke(255);
  strokeWeight(4);
  noFill();
  ellipse(200, 0, 100, 100);
  
  
}
