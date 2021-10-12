class Scaffolding {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':0.04,
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.image = loadImage("Images/ScaffoldingTexture2.png");
    this.Visibility = 255;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER)
    image(this.image,0,0,this.width,this.height);
    pop();
    //console.log(this.body.speed);
    //console.log(this.body.Visibility);
  }
  remove(){
    if(this.body.speed> 9){ 
      World.remove(world, this.body);
      push();
      this.Visibility = this.Visibility-10;
      tint(255, this.Visibility);
      //imageMode(CENTER)
      image(this.image,this.body.position.x, this.body.position.y,50,50);
      pop();
    }
  }
  score(){
    if(this.Visibility <0 && this.Visibility>-1005){
      score++;
    }
    if(keyCode== 32){
      this.Visibility =this.Visibility+255;
      tint(255, this.Visibility);
      World.add(world, this.body);
     
      //this.display();
    
    }
  }
}