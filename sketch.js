var x = [];// esto es un arreglo
var y = [];// esto es un arreglo
var incremento = [];
var h = [];
var nieve = true;

function setup() {
  createCanvas(600, 600);

  for(var i = 0; i < 50; i = i +1){
    x[i] = random(0, width);
    y[i] = random(0, height);
    incremento[i] = random(1, 5);
    h[i] = random(1, 10);
  }
 
}

function draw() {
  if (keyIsPressed){
    if (key == 'j'){
      nieve = !nieve;
    }
    print(key);
  }
  
  background(0);
  stroke("white");
  strokeWeight(4);
  
  fill("green")
  triangle(width/3 -100, 400, width/3*2 +100, 400, width/2, 125);
  triangle(width/3 -50, 300, width/3*2 +50, 300, width/2,100);
  triangle(width/3, 200, width/3*2, 200, width/2, 75);
  fill("brown")
  rect(width/2 -50, 400, 100, 125)
  
  fill("yellow")
  stroke("yellow")
  beginShape();
    vertex(width/2, 25);
    vertex(width/2 +40, 100);
    vertex(width/2 -50, 50);
    vertex(width/2 +50, 50);
    vertex(width/2-40, 100);
  endShape(CLOSE);
  
  if (nieve){
    stroke("white");
    strokeWeight(4);
    fill("white");
    for(var i = 0; i < 50; i = i +1){
       ellipse(x[i], y[i] ,h[i]);  
      if (y[i] > height) {
        y[i] = 0;
      }else if(y[i] <0 ){
        incremento[i] = incremento[i] * -1;
      }
      y[i] = y[i] + incremento[i];
    }
  }
}
