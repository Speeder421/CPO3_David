let bird,floor;
let flapMidImg,bg,base;
let flapDownImg,flapUpImg;
let pipeImg;
let pipeGroup;
let bottomPipe,topPipe;
let gameOver;
let startScreenLabel;
let startScreenImg;
let startGame=false;

function preload(){
  flapMidImg=loadImage('assets/yellowbird-midflap.png');
  bg=loadImage('assets/background-day.png');
  base=loadImage('assets/base.png');
  flapUpImg=loadImage('assets/yellowbird-upflap.png')
  flapDownImg=loadImage('assets/yellowbird-downflap.png')
  pipeImg=loadImage('assets/pipe-green.png');
  gameOverImg=loadImage('assets/gameover.png')
  startScreenImg=loadImage('assets/message.png')
}

function setup(){
  new Canvas(400,600);
  bird= new Sprite();
  bird.x=width/2;
  bird.y=200;
  bird.width=34;
  bird.height=24;
  bird.img=flapMidImg;
  bird.collider="dynamic";
  bird.mass=2;
  bird.drag=0.02;
  bird.bounciness=0.5;
  world.gravity.y=10;

  floor=new Sprite();
  floor.x=200;
  floor.y=height-20;
  floor.width=400;
  floor.height=125;
  floor.collider="static";
  floor.img=base;

  pipeGroup=new Group();

  startScreenLabel = new Sprite(width/2,height/2,50,50,none);
  startScreenLabel.img=startScreenImg;



}

function draw(){
  image(bg,0,0,width,height);

  fill('red');
  textSize(14);
  text("vel.y:"+bird.vel.y.toFixed(2),10,20);
  text("isMoving:"+bird.isMoving,10,40);
  text("sleeping:"+bird.sleeping,10,60);


  if(kb.presses('space')||mouse.presses()){
    bird.vel.y=-5;
    bird.sleeping=false;
  }
//   if(mouse.presses()){
//     new Sprite(mouse.x,200,30,30,'dynamic');
//   }
  if(bird.vel.y<-1){
    bird.img=flapUpImg;
    bird.rotation=-45;
  }

  else if(bird.vel.y>1){
    bird.img=flapDownImg;
    bird.rotation=45;
  }
  else{
    bird.img=flapMidImg;
    bird.rotation=0;
  }

  bird.x=bird.x+2;
  camera.x=bird.x;
  floor.x=bird.x;

  if(frameCount===1){
    spawnPipePair();
  }
  else if(frameCount%80==0){
    spawnPipePair();
  }
  if (bird.collides(pipeGroup)||bird.collides(floor)){
    gameOver=new Sprite(width/2,height/2,192,42);
    gameOver=gameOverImg;
    gameOver.layer=100;
    gameOver.x=camera.x;
    noLoop();
  }

  if(kb.presses("spaces")||mouse.presses()){
    startGame=true;
    startScreenLabel.visible=false;
    bird.visible=true;
  }



}
function spawnPipePair(){
  let gap=60;
  let midY=random(250,height-250);
  bottomPipe=new Sprite(bird.x+350,midY+gap/2+200,52,320,"static");
  bottomPipe.img=pipeImg;
  pipeGroup.add(bottomPipe);
  pipeGroup.layer=0;

  topPipe=new Sprite(bird.x+350,midY-gap/2-200,52,320,"static")
  topPipe.img=pipeImg;
  pipeGroup.add(topPipe);
  topPipe.rotation=-180;
}
