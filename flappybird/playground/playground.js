let bird,floor;
let flapMidImg,bg,base;
function preload(){
  flapMidImg=loadImage('assets/yellowbird-midflap.png');
  bg=loadImage('assets/background-day.png');
  base=loadImage('assets/base.png');
  flapUpImg=loadImage('assets/yellowbird-upflap.png')
  flapDownImg=loadImage('assets/yellowbird-downflap.png')
}

function setup(){
  new Canvas(400,600);
  bird= new Sprite();
  bird.x=width/2;
  bird.y=200;
  bird.width=30;
  bird.height=30;
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
  floor.collider="static"
  floor.img=base;
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
    for(leti=0;i<-45;i++){
        bird.rotation=-1;
    }
    
  }

  else if(bird.vel.y>1){
    bird.img=flapDownImg;
    for(leti=0;i<45;i++){
        bird.rotation=45;
    }
    
  }
  else{
    bird.img=flapMidImg;
    bird.rotation=0;
  }


}