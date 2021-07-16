class PlayerArcher {
    constructor(x, y, width, height, angle) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.angle = angle;
  
  
    this.body=Bodies.rectangle(x,y,this.width,this.height)
    this.image=loadImage("./assets/playerArcher.png");
    
       



    World.add(world,this.body)
    }
  
    
  
    display() {

     var angle = this.body.angle;

      if (keyIsDown(DOWN_ARROW)){
       angle =angle+ 0.2;
        Matter.Body.setAngle(this.body, angle);
      }
  
      if (keyIsDown(UP_ARROW)) {
        angle=angle-0.2
        Matter.Body.setAngle(this.body, angle);
      }
  
      push();
      translate(this.x, this.y);
      rotate(angle);
      image(this.image,-100, -100, 100, 100);
      imageMode(CENTER);
      Matter.Body.setAngle(this.body,-PI/2);
      pop();
    }
  }
  