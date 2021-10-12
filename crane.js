class Crane {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.image= loadImage("Images/bCraneTexture5.png")
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      //rectMode(CENTER);
      imageMode(CENTER);
      image(this.image, pos.x, pos.y, this.width+460, this.height+700);
      //fill("magenta");
      //rect(pos.x, pos.y, this.width, this.height);
      pop();
    }
  };