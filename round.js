function Round(x, y) {
  this.x = x;
  this.y = y;
  
  this.show = function() {
    noStroke();
    fill(70, 0, 0);
    ellipse(this.x, this.y, 8, 8);
  }
  this.move = function() {
    this.y = this.y - 1; 
  }
}