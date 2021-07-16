class ComputerArrow {
  constructor(x, y, width, height,archerAngle) {
    var options = {
      restitution: 0.1,
      friction: 0.1,
      density: 0.1,
      isStatic: true
    };
    this.width = width;
    this.height = height;
    this.body = Bodies.rectangle(x, y, this.width, this.height, options);
    this.image = loadImage("./assets/arrow.png");
    World.add(world, this.body);
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
}
