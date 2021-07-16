class PlayerArrow {
    constructor(x, y, width, height,archerAngle) {
      var options = {
        restitution: 0.6,
        friction: 0.6,
        density: 0.6,
        isStatic: true
      };
      
      this.width = width;
      this.height = height;
      this.body = Bodies.rectangle(x, y, this.width, this.height, options);
      World.add(world, this.body);
      this.image = loadImage("./assets/arrow.png");
    }
  
   display() {
      var pos = this.body.position;
      var angle = this.body.angle;

      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image,0,0,this.width, this.height);
      pop();
    }

    
      shoot(archerAngle){
      var velocity = p5.Vector.fromAngle(archerAngle);
      velocity.mult(20);
      Matter.Body.setStatic(this.body,false);
      Matter.Body.setVelocity(this.body,{x:50 ,y:0})
    }
  }
  