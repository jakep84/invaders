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
    rnd.push(rnd);
    println("round fired");
  };
  
  if (keyCode === RIGHT_ARROW) {
    println("right pressed");
    you.move(1);
    println("you moved right");

  } else if (keyCode === LEFT_ARROW) {
    println("left pressed");
    you.move(-1);
    println("you moved left");

  }
};
