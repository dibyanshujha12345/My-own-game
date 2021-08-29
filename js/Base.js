class Base {
  constructor(x, y, w, h) {
    let options = {
      isStatic: true
    };

    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    this.image = loadImage("./assets/rocket.png");
   
    
    World.add(world, this.body);
  }

  show() {
    let pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    rectMode(CENTER);
    imageMode(CENTER); 
    image(this.image,this.x,this.y,this.w,this.h); 
    rect(0, 0, this.w, this.h);
    pop();
     
  }
}
