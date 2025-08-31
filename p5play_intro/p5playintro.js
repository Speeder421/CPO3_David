function setup() {
  // Set up the canvas
  new Canvas(800, 400);
  background(250); //background color
  let max = 10;
  let randomInt = Math.floor(Math.random() * max);
  console.log(randomInt); // Outputs an integer from 0 to 9
  let random=Math.random()
  // Basic shape testing
  // write your codes here
  // End Basic shape testing
  // fill("skyblue");
  // stroke("pink");
  // strokeWeight(3);
  // circle(30,30,50);
  // rect(50,50,100,200);
  // Create a bouncing ball sprite
  // write your codes here
  ball=new Sprite();
  ball.x=100;
  ball.y=200;
  ball.diameter=40;
  ball.color="red"
  ball.vel.x=3;
  ball.vel.y=3;
  ball.bounciness=1;
  ball.collider="dynamic";

  box= new Sprite();
  box.x=100;
  box.y=100;
  box.w=50;
  box.h=50;
  box.color="green";
  box.collider="solid";
}

function draw() {
  // write your codes here
  background(250);
  if(keyPressed()){
    new Sprite()
  }
  // fill(0);
  // textSize(16);
  // text("Ball:("+int(ball.x)+","+int(ball.y)+")",10,20);
  // text("Mouse:("+int(mouse.x)+","+int(mouse.y)+")",10,40);

  // if(ball.x<0+ball.diameter/2||ball.x>width-ball.diameter/2){
  //   ball.vel.x*=-1.01
  // }
  // if(ball.y<0+ball.diameter/2||ball.y>height-ball.diameter/2){
  //   ball.vel.y*=-1.01
  // }
  // box.x=mouse.x
  // box.y=mouse.y
}

