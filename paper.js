class Paper {
  constructor(x,y,radius) {
    var options = {
      isStatic:false,
      restitution:0.1,
      friction:0.5,
      density:1.7
    }
    this.body = Bodies.circle(x,y,radius,options);
    this.radius = radius

    World.add(world,this.body)
  }
  display(){
    var pos = this.body.position;
    push()
    translate(pos.x,pos.y);
    ellipseMode(RADIUS);
    stroke("red")
    fill("white")
    ellipse(0,0,this.radius,this.radius);
    pop();
  }
}