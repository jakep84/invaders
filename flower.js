function Flower() {
  this.x = 100;
  this.y = 50;
  
  this.show = function() {
    fill(255);
    ellipse(this.x, this.y, 60, 60);
  }
  this.move = function(dir) {
    this.x += dir+5;
  }
  
}