var you; 
var invaders = [];
var rnd = [];


function setup() {
  createCanvas(600,400);
  you = new You();
  rnd = new Round(width/2, height/2);
  for (var i = 0; i < 6; i++ ) {
    invaders[i] = new Invader(i*80+80, 60);
  }
};


function draw() {
    background(51);
    you.show();
      rnd.show();
      rnd.move();
    for (var i = 0 ; i < rnd.length; i++) {
    rnd[i].show();
    rnd[i].move();
      }
        
   for (var i = 0; i < invaders.length; i++ ) {
      invaders[i].show(); 
    }
};



function keyPressed() {
  var rnd = new Round(you.x, height/2);

  if (key === ' ') {
    // rnd.push(rnd);
    println("space pressed");
  };
  
  if (keyCode === RIGHT_ARROW) {
    you.move(1);
  } else if (keyCode === LEFT_ARROW) {
    you.move(-1);
  }
};
