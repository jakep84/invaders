var ship; 
var flowers =[];
var drop;
function setup() {
  createCanvas(600,400);
  ship = new Ship();
  for (var i = 0; i < 6; i++ ) {
  flowers[i] = new Flower(i*80+80, 60);
  drop = new Drop(width/2, height/2);
  }
}

function draw() {
    background(51);
    ship.show();
    for (var i = 0; i < flowers.length; i++ ) {
      flowers[i].show(); 
      drop.show();
      drop.move();
  }
} 

function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    ship.move(1);
  } else if (keyCode === LEFT_ARROW) {
    ship.move(-1);
  }
}
