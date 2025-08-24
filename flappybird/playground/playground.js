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

function preload() {
    flapMidImg = loadImage('assets/yellowbird-midflap.png'); 
    flapUpImg = loadImage('assets/yellowbird-upflap.png');
    flapDownImg = loadImage('assets/yellowbird-downflap.png');
    pipe = loadImage('assets/pipe-green.png');
    bg = loadImage('assets/background-day.png');
    base = loadImage('assets/base.png');
    gameoverImg = loadImage('assets/gameover.png');
    startScreenImg = loadImage('assets/message.png'); 
}

function setup() {
  new Canvas(400, 600);

  bird = new Sprite();
  bird.x = width / 2;
  bird.y = 200,
  bird.width = 30;
  bird.height = 30;
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
}

function draw() {
  image(bg, 0, 0, width, height);        

 
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
      bird.rotation = 30; // rotate down
    } 
    else {
      bird.img = flapMidImg; // neutral
      bird.rotation = 0;
    }

    if (frameCount === 1){
      spawnPipePair();
    }

    if (frameCount % 120 === 0){
      spawnPipePair();
    }

    // remove offscreenpipes
    for (let pipe of pipeGroup){
      if (pipe.x < -50){
        pipe.remove();
      }
    }

    // End Game on Collision
    // note that this is checking collision against the group
    if (bird.collides(pipeGroup) || bird.collides(floor)){
      gameoverLabel = new Sprite(width/2, height/2, 192, 42);
      gameoverLabel.img = gameoverImg;
      gameoverLabel.layer = 100; // make the game over text come to front
      gameoverLabel.x = camera.x;

      noLoop(); 
    }

    // Debug info (optional)
    fill("blue");
    textSize(14);
    text('vel.y: ' + bird.vel.y.toFixed(2), 10, 20);
    text('isMoving: ' + bird.isMoving, 10, 40);
    text('sleeping: ' + bird.sleeping , 10, 60);
    text('bird.x: ' + bird.x.toFixed(2), 10, 80);
  }
  
}
 
/* 
Function to create a pair of pipes
and add it to the group
*/ 
function spawnPipePair(){
  // control the gap and height of the top and bottom pipe
  let gap = 70;
  // let midY = height / 2;
  let midY = random(250, height - 250); // random(min, max)

  // create the top pipe
  topPipe = new Sprite(bird.x + 400, midY - gap / 2 - 200, 52, 320, 'static');
  topPipe.img = pipe;
  topPipe.rotation = 180;

  // create the bottom pipe sprite
  bottomPipe = new Sprite(bird.x + 400, midY + gap / 2 + 200, 52, 320, 'static');
  bottomPipe.img = pipe;

  pipeGroup.add(topPipe);
  pipeGroup.add(bottomPipe);
  pipeGroup.layer = 0;
}

// < . . . previous code . . . >

