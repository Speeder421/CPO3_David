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
let flapsound;
let pointsound;
let failsound;

function preload() {
    flapMidImg = loadImage('assets/yellowbird-midflap.png'); 
    flapUpImg = loadImage('assets/yellowbird-upflap.png');
    flapDownImg = loadImage('assets/yellowbird-downflap.png');
    pipe = loadImage('assets/pipe-green.png');
    bg = loadImage('assets/background-day.png');
    base = loadImage('assets/base.png');
    gameoverImg = loadImage('assets/gameover.png');
    startScreenImg = loadImage('assets/message.png'); 
    for(let i=0;i<10;i++){
      list[i]=loadImage('assets/'+i+'.png');
    }
    flapsound=createAudio('assets/sfx_wing.mp3');
    pointsound=createAudio('assets/sfx_point.mp3');
    failsound=createAudio('assets/sfx_die.mp3');
    
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

    for(let pipe of pipeGroup){
      let piperight=pipe.x+(pipe.w/2);
      let birdleft=bird.x-(bird.w/2);
      if(pipe.passed==false&&piperight<birdleft){
        pipe.passed=true;
        score++;
        pointsound.play()
    }
  }
  drawScore(width/2,20,score,24,36);    
 
  if (kb.presses('space') || mouse.presses()){
    startGame = true;
    flapsound.play();
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
      gameoverLabel = new Sprite(width/2, height/2, 192, 42,"none");
      gameoverLabel.img = gameoverImg;
      gameoverLabel.layer = 100;
      gameoverLabel.x = camera.x;
      failsound.play()
      noLoop(); 
      setTimeout(()=>{
        score=0;
        startGame=false;
        pipe.removeAll();
        bird.vel.x=0;
        bird.vel.y=0;
        bird.rotation=0;
        bird.collider="static";
        bird.y=200;
        gameoverLabel.remove();
        startScreenLabel.visible=true;
        startScreenLabel.x=bird.x;
        startScreenLabel.y=bird.x;
        loop();

      },3000);
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
  topPipe.passed=false;

  bottomPipe = new Sprite(bird.x + 400, midY + gap / 2 + 200, 52, 320, 'static');
  bottomPipe.img = pipe;
  pipeGroup.add(topPipe);
  pipeGroup.add(bottomPipe);
  pipeGroup.layer = 0;
}

function drawScore(x,y,score,digitWidth,digitHeight){
  scoreDigits.removeAll();
  let scoreStr=str(score);
  let totalWidth=scoreStr.length*digitWidth;
  let startX=x-totalWidth/2;
  for(let i=0;i<scoreStr.length;i++){
    let digit=int(scoreStr[i]);
    let xpos=startX+i*digitWidth;
    let digitSprite=new scoreDigits.Sprite(xpos,y,digitWidth,digitHeight);
    digitSprite.img=list[digit];
    movegroup(scoreDigits,camera.x,24);
  }
}
function movegroup(group,targetx,spacing){
  let totalWidth=(group.length-1)*spacing;
  let startX=targetx-totalWidth/2;
  for(let i=0;i<group.length;i++){
    group[i].x=startX+i*spacing;
  }
}