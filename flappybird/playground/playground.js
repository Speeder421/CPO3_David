let bird, floor; 
let flapMidImg,  bg, base; 
let flapUpImg,flapDownImg; 
let pipe; 
let topPipe, bottomPipe;
let pipeGroup; 
let gameoverImg; 
let gameoverLabel; 
let startGame = false;
let startScreenLabel; 
let startScreenImg; 
let score=0;
let list=[];
let scoreDigits;

function preload() {
    flapMidImg = loadImage('assets/yellowbird-midflap.png'); 
    flapUpImg = loadImage('assets/yellowbird-upflap.png');
    flapDownImg = loadImage('assets/yellowbird-downflap.png');
    pipe = loadImage('assets/pipe-green.png');
    bg = loadImage('assets/background-day.png');
    base = loadImage('assets/base.png');
    gameoverImg = loadImage('assets/gameover.png');
    startScreenImg = loadImage('assets/message.png'); 
    for(let i=0;i<10;1++){
      list[i]=loadImage('assets/'+i+'.png');
    }
}

function setup() {
  new Canvas(400, 600);

  bird = new Sprite();
  bird.x = width / 2;
  bird.y = 200;
  bird.width = 34;
  bird.height = 24;
  bird.img = flapMidImg; 
  bird.visible = false;

  bird.collider = "static"; 
  bird.mass = 2;        
  bird.drag = 0.02;      
  bird.bounciness = 0.5; 
  world.gravity.y = 10;

  
  floor = new Sprite();
  floor.x = 200;
  floor.y = height - 20;
  floor.width = 400;
  floor.height = 125;
  floor.collider = "static"; 
  floor.img = base;

  pipeGroup = new Group();

  startScreenLabel = new Sprite(width/2, height/2, 50, 50, 'none');
  startScreenLabel.img = startScreenImg;

  scoreDigits=new Group();
  scoreDigits.collider="none";
  scoreDigits.layer=1000;

}

function draw() {
  image(bg, 0, 0, width, height);   
  drawScore(width/2,20,score,24,36);     

 
  if (kb.presses('space') || mouse.presses()){
    startGame = true;
    startScreenLabel.visible = false;
    bird.visible = true;
  }
  if (startGame){
    bird.collider = "dynamic"; 
    bird.x += 2; 
    camera.x = bird.x; 
    floor.x = camera.x;

    if (kb.presses('space') || mouse.presses()) {
      bird.vel.y = -5; 
      bird.sleeping = false; 
    }
    
    if (bird.vel.y < -1) {
      bird.img = flapUpImg; 
      bird.rotation = -30; 
    } 
    else if (bird.vel.y > 1) {
      bird.img = flapDownImg; 
      bird.rotation = 30; 
    } 
    else {
      bird.img = flapMidImg;
      bird.rotation = 0;
    }

    if (frameCount === 1){
      spawnPipePair();
    }

    if (frameCount % 90 === 0){
      spawnPipePair();
    }

   
    for (let pipe of pipeGroup){
      if (pipe.x < -50){
        pipe.remove();
      }
    }


    if (bird.collides(pipeGroup) || bird.collides(floor)){
      gameoverLabel = new Sprite(width/2, height/2, 192, 42);
      gameoverLabel.img = gameoverImg;
      gameoverLabel.layer = 100;
      gameoverLabel.x = camera.x;
      noLoop(); 
    }


    fill("blue");
    textSize(14);
    text('vel.y: ' + bird.vel.y.toFixed(2), 10, 20);
    text('isMoving: ' + bird.isMoving, 10, 40);
    text('sleeping: ' + bird.sleeping , 10, 60);
    text('bird.x: ' + bird.x.toFixed(2), 10, 80);
  }
  
}
 

function spawnPipePair(){
  let gap = 60;
  let midY = random(250, height - 250); 
  topPipe = new Sprite(bird.x + 400, midY - gap / 2 - 200, 52, 320, 'static');
  topPipe.img = pipe;
  topPipe.rotation = 180;
  bottomPipe = new Sprite(bird.x + 400, midY + gap / 2 + 200, 52, 320, 'static');
  bottomPipe.img = pipe;
  pipeGroup.add(topPipe);
  pipeGroup.add(bottomPipe);
  pipeGroup.layer = 0;
}

function drawScore(x,y,score,digitWidth,digitHeight){
  scoreDigits.removeAll();
  let scoreStr=
}