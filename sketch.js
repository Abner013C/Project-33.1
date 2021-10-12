//constantes
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

//declaracion de variables
var engine, world;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20,box21,box22,box23,box24,box25,box26,box27,box28,box29,box30,box31,box32,box33,box34,box35,box36,box37,box38,box39,box40;
var ground, crane, dot;
var ball, rope;
var gameState = "static";
var bcg= "Images/daybcgv3.png";
var bcgImg;
var score= 0;

//llama la funcion que permite cambiar el fondo del juego dependiendo la hora
function preload(){
  getBcgImg();
}

function setup() {
  createCanvas(1350, 1000);
  engine = Engine.create();
  world = engine.world;

  //creacion de un punto, el sueloy la grúa
  dot = new Ground(272, 389, 1, 1);
  ground = new Ground(675, 950, 1350, 20);
  crane = new Crane(350, 580, 10, 10);

  //creacion de los 40 andamios
  box1 = new Scaffolding(800, 545, 50, 50);
  box2 = new Scaffolding(800, 545, 50, 50);
  box3 = new Scaffolding(800, 545, 50, 50);
  box4 = new Scaffolding(800, 545, 50, 50);
  box5 = new Scaffolding(800, 545, 50, 50);
  box6 = new Scaffolding(800, 545, 50, 50);
  box7 = new Scaffolding(750, 545, 50, 50);
  box8 = new Scaffolding(750, 545, 50, 50);
  box9 = new Scaffolding(750, 545, 50, 50);
  box10 = new Scaffolding(750, 545, 50, 50);
  box11 = new Scaffolding(750, 545, 50, 50);
  box12 = new Scaffolding(750, 545, 50, 50);
  box13 = new Scaffolding(700, 545, 50, 50);
  box14 = new Scaffolding(700, 545, 50, 50);
  box15 = new Scaffolding(700, 545, 50, 50);
  box16 = new Scaffolding(700, 545, 50, 50);
  box17 = new Scaffolding(700, 545, 50, 50);
  box18 = new Scaffolding(700, 545, 50, 50);
  box19 = new Scaffolding(700, 545, 50, 50);
  box20 = new Scaffolding(700, 545, 50, 50);
  box21 = new Scaffolding(750, 545, 50, 50);
  box22 = new Scaffolding(800, 545, 50, 50);
  box23 = new Scaffolding(750, 545, 50, 50);
  box24 = new Scaffolding(800, 545, 50, 50);
  box25 = new Scaffolding(850, 545, 50, 50);
  box26 = new Scaffolding(850, 545, 50, 50);
  box27 = new Scaffolding(850, 545, 50, 50);
  box28 = new Scaffolding(850, 545, 50, 50);
  box29 = new Scaffolding(850, 545, 50, 50);
  box30 = new Scaffolding(850, 545, 50, 50);
  box31 = new Scaffolding(850, 545, 50, 50);
  box32 = new Scaffolding(850, 545, 50, 50);
  box33 = new Scaffolding(900, 545, 50, 50);
  box34 = new Scaffolding(900, 545, 50, 50);
  box35 = new Scaffolding(900, 545, 50, 50);
  box36 = new Scaffolding(900, 545, 50, 50);
  box37 = new Scaffolding(900, 545, 50, 50);
  box38 = new Scaffolding(900, 545, 50, 50);
  box39 = new Scaffolding(900, 545, 50, 50);
  box40 = new Scaffolding(900, 545, 50, 50);

  //creacion de la cuerda y de la bola de demolicion
  ball = new Ball(500, 700, 80, 80);
  rope = new Rope(ball.body, { x: 500, y: 480 });
}

function draw(){
  //si la funcion bcgImg está bien definida, cambiar el fondo dependiendo de la hora del dia
  if(bcgImg){
    //background(bcgImg);
    //desplegar el puntaje y sus caracteristicas
    noStroke();
    textSize(55);
    textFont("classic");
    fill("black");
    text("Score: "+ score, 1000, 150);
  }
  background("white");

  Engine.update(engine);

  //desplegar en el mundo el suelo, la grúa y el punto
  ground.display();
  crane.display();
  dot.display();

  //display(): desplegar en el mundo las 40 cajas
  //remove(): permite que los andamios desaparezcan una vez que alcanzaron cierta velocidad
  //score(): permite incluir a cada andamio individualente en el conteo del puntaje
  box1.display(); box1.remove(); box1.score();
  box2.display(); box2.remove(); box2.score();
  box3.display(); box3.remove(); box3.score();
  box4.display(); box4.remove(); box4.score();
  box5.display(); box5.remove(); box5.score();
  box6.display(); box6.remove(); box6.score();
  box7.display(); box7.remove(); box7.score();
  box8.display(); box8.remove(); box8.score();
  box9.display(); box9.remove(); box9.score();
  box10.display(); box10.remove(); box10.score();
  box11.display(); box11.remove(); box11.score();
  box12.display(); box12.remove(); box12.score();
  box13.display(); box13.remove(); box13.score();
  box14.display(); box14.remove(); box14.score();
  box15.display(); box15.remove(); box15.score();
  box16.display(); box16.remove(); box16.score();
  box17.display(); box17.remove(); box17.score();
  box18.display(); box18.remove(); box18.score();
  box19.display(); box19.remove(); box19.score();
  box20.display(); box20.remove(); box20.score();
  box21.display(); box21.remove(); box21.score();
  box22.display(); box22.remove(); box22.score();
  box23.display(); box23.remove(); box23.score();
  box24.display(); box24.remove(); box24.score();
  box25.display(); box25.remove(); box25.score();
  box26.display(); box26.remove(); box26.score();
  box27.display(); box27.remove(); box27.score();
  box28.display(); box28.remove(); box28.score();
  box29.display(); box29.remove(); box29.score();
  box30.display(); box30.remove(); box30.score();
  box31.display(); box31.remove(); box31.score();
  box32.display(); box32.remove(); box32.score();
  box33.display(); box33.remove(); box33.score();
  box34.display(); box34.remove(); box34.score();
  box35.display(); box35.remove(); box35.score();
  box36.display(); box36.remove(); box36.score();
  box37.display(); box37.remove(); box37.score();
  box38.display(); box38.remove(); box38.score();
  box39.display(); box39.remove(); box39.score();
  box40.display(); box40.remove(); box40.score();

  //desplegar la bola de demolicion
  ball.display();

  //desplegar la cuerda
  rope.display();

  //if que condiciona cuantos puntos se necesitan para ganar
  if(score>=1500){
    gameState= "over";
  }else{
    fill("black")
    textSize(32);
    text("Not enough points!, get at least 1500 to win", 50, 100);
    textSize(19);
    text("Press SPACE to restart", 50, 120); //SPACE BAR TWICE???
    
  }

  //if que condiciona cuando el juego acaba 
  if(gameState== "over"){
    fill("black");
    textFont("fantasy");
    textSize(80);
    text("VICTORY!!", 500, 500);
    keyPressed();

  }

  //localizador de cursor
  fill("black");
  textSize(30);
  text(Math.round(mouseX) +","+Math.round(mouseY), mouseX, mouseY);
}

//funcion que permite controlar la bola de demolicion con el ratón
function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x: mouseX, y: mouseY});
}

//funcion que permite el perfecto reinicio del juego
function keyPressed(){
  if(keyCode== 32){

    dry();

    score= 0;
    gameState= "static";
    console.log(box1.body.position.x);
  }
}

function dry(){
  //reestablece la posicion de la bola de demolicion
  Matter.Body.setPosition(ball.body, {x:500, y:700});

  //
  //Matter.Body.translate(box1.body, {x:800,y:545});
  Matter.Body.setPosition(box1.body, {x:800, y:545});
  Matter.Body.setVelocity(box1.body, {x:0, y:0});
  Matter.Body.setStatic(box1.body, true);
  Matter.Body.setStatic(box1.body, false);
  //Matter.Body.setInertia(box1.body, 0);
  Matter.Body.setAngle(box1.body, 0);

  //Matter.Body.translate(box2.body, {x:800,y:545});
  Matter.Body.setPosition(box2.body, {x:800, y:545});
  Matter.Body.setVelocity(box2.body, {x:0, y:0});
  Matter.Body.setStatic(box2.body, true);
  //Matter.Body.setStatic(box2.body, false);
  //Matter.Body.setInertia(box2.body, 0);
  Matter.Body.setAngle(box2.body, 0);

  //Matter.Body.translate(box3.body, {x:800,y:545});
  Matter.Body.setPosition(box3.body, {x:800, y:545});
  Matter.Body.setVelocity(box3.body, {x:0, y:0});
  Matter.Body.setStatic(box3.body, true);
  //Matter.Body.setStatic(box3.body, false);
  //Matter.Body.setInertia(box3.body, 0);
  Matter.Body.setAngle(box3.body, 0);

  //Matter.Body.translate(box4.body, {x:800,y:545});
  Matter.Body.setPosition(box4.body, {x:800, y:545});
  Matter.Body.setVelocity(box4.body, {x:0, y:0});
  Matter.Body.setStatic(box4.body, true);
  //Matter.Body.setStatic(box4.body, false);
  //Matter.Body.setInertia(box4.body, 0);
  Matter.Body.setAngle(box4.body, 0);

  //Matter.Body.translate(box5.body, {x:800,y:545});
  Matter.Body.setPosition(box5.body, {x:800, y:545});
  Matter.Body.setVelocity(box5.body, {x:0, y:0});
  Matter.Body.setStatic(box5.body, true);
  //Matter.Body.setStatic(box5.body, false);
  //Matter.Body.setInertia(box5.body, 0);
  Matter.Body.setAngle(box5.body, 0);

  //Matter.Body.translate(box6.body, {x:800,y:545});
  Matter.Body.setPosition(box6.body, {x:800, y:545});
  Matter.Body.setVelocity(box6.body, {x:0, y:0});
  Matter.Body.setStatic(box6.body, true);
  //Matter.Body.setStatic(box6.body, false);
  //Matter.Body.setInertia(box6.body, 0);
  Matter.Body.setAngle(box6.body, 0);

  //Matter.Body.translate(box7.body, {x:750,y:545});
  Matter.Body.setPosition(box7.body, {x:750, y:545});
  Matter.Body.setVelocity(box7.body, {x:0, y:0});
  Matter.Body.setStatic(box7.body, true);
  Matter.Body.setStatic(box7.body, false);
  //Matter.Body.setInertia(box7.body, 0);
  Matter.Body.setAngle(box7.body, 0);
  
  //Matter.Body.translate(box8.body, {x:750,y:545});
  Matter.Body.setPosition(box8.body, {x:750, y:545});
  Matter.Body.setVelocity(box8.body, {x:0, y:0});
  Matter.Body.setStatic(box8.body, true);
  //Matter.Body.setStatic(box8.body, false);
  //Matter.Body.setInertia(box8.body, 0);
  Matter.Body.setAngle(box8.body, 0);

  //Matter.Body.translate(box9.body, {x:750,y:545});
  Matter.Body.setPosition(box9.body, {x:750, y:545});
  Matter.Body.setVelocity(box9.body, {x:0, y:0});
  Matter.Body.setStatic(box9.body, true);
  //Matter.Body.setStatic(box9.body, false);
  //Matter.Body.setInertia(box9.body, 0);
  Matter.Body.setAngle(box9.body, 0);

  //Matter.Body.translate(box10.body, {x:750,y:545});
  Matter.Body.setPosition(box10.body, {x:750, y:545});
  Matter.Body.setVelocity(box10.body, {x:0, y:0});
  Matter.Body.setStatic(box10.body, true);
  //Matter.Body.setStatic(box10.body, false);
  //Matter.Body.setInertia(box10.body, 0);
  Matter.Body.setAngle(box10.body, 0);

  //Matter.Body.translate(box11.body, {x:750,y:545});
  Matter.Body.setPosition(box11.body, {x:750, y:545});
  Matter.Body.setVelocity(box11.body, {x:0, y:0});
  Matter.Body.setStatic(box11.body, true);
  //Matter.Body.setStatic(box11.body, false);
  //Matter.Body.setInertia(box11.body, 0);
  Matter.Body.setAngle(box11.body, 0);

  //Matter.Body.translate(box12.body, {x:750,y:545});
  Matter.Body.setPosition(box12.body, {x:750, y:545});
  Matter.Body.setVelocity(box12.body, {x:0, y:0});
  Matter.Body.setStatic(box12.body, true);
  //Matter.Body.setStatic(box12.body, false);
  //Matter.Body.setInertia(box12.body, 0);
  Matter.Body.setAngle(box12.body, 0);

  //Matter.Body.setPosition(box13.body, {x:700, y:545});
  //Matter.Body.setPosition(box14.body, {x:700, y:545});
  //Matter.Body.setPosition(box15.body, {x:700, y:545});
  //Matter.Body.setPosition(box16.body, {x:700, y:545});
  //Matter.Body.setPosition(box17.body, {x:700, y:545});
  //Matter.Body.setPosition(box18.body, {x:700, y:545});
  //Matter.Body.setPosition(box19.body, {x:700, y:545});
  //Matter.Body.setPosition(box20.body, {x:700, y:545});
  //Matter.Body.setPosition(box21.body, {x:750, y:545});
  //Matter.Body.setPosition(box22.body, {x:800, y:545});
  //Matter.Body.setPosition(box23.body, {x:750, y:545});
  //Matter.Body.setPosition(box24.body, {x:800, y:545});
  //Matter.Body.setPosition(box25.body, {x:850, y:545});
  //Matter.Body.setPosition(box26.body, {x:850, y:545});
  //Matter.Body.setPosition(box27.body, {x:850, y:545});
  //Matter.Body.setPosition(box28.body, {x:850, y:545});
  //Matter.Body.setPosition(box29.body, {x:850, y:545});
  //Matter.Body.setPosition(box30.body, {x:850, y:545});
  //Matter.Body.setPosition(box31.body, {x:850, y:545});
  //Matter.Body.setPosition(box32.body, {x:850, y:545});
  //Matter.Body.setPosition(box33.body, {x:900, y:545});
  //Matter.Body.setPosition(box34.body, {x:900, y:545});
  //Matter.Body.setPosition(box35.body, {x:900, y:545});
  //Matter.Body.setPosition(box36.body, {x:900, y:545});
  //Matter.Body.setPosition(box37.body, {x:900, y:545});
  //Matter.Body.setPosition(box38.body, {x:900, y:545});
  //Matter.Body.setPosition(box39.body, {x:900, y:545});
  //Matter.Body.setPosition(box40.body, {x:900, y:545});
}

//funcion asincrona que llama un API de la zona horaria de la ciudad de mexico para determinar el fondo desplegado
async function getBcgImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/America/Mexico_City");
  var responseJSON = await response.json();
  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);

  if(hour>=06 && hour<=18){
    bcg= "Images/daybcgv3.png";
  }
  else{
    bcg= "Images/nightbcgv4.png";
  }

  bcgImg= loadImage(bcg);
  //console.log(hour);
}