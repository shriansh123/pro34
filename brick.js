class Brick {
    constructor(x, y, width, height) {
     
      
      this.body = Bodies.rectangle(x, y, width, height);
      this.width = width;
      this.height = height;
  
      
  
      World.add(world, this.body);
    }
    
    display() {
      var angle = this.body.angle;
      var pos = this.body.position;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.animation[index], 0, this.boatPosition, this.width, this.height);
      noTint();
      pop();
    }
}