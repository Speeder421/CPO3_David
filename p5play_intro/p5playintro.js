function setup() {
  // Set up the canvas
  new Canvas(800, 400);
  background(250); //background color

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
}

function draw() {
  // write your codes here
  background(250);
  if(ball.x<0+ball.diameter/2||ball.x>width-ball.diameter/2){
    ball.vel.x*=-1.05
  }
  if(ball.y<0+ball.diameter/2||ball.y>height-ball.diameter/2){
    ball.vel.y*=-1.05
    }
  background(250)
  if(box.x<0+box.w/2||box.y>width-box.h/2){
    box.vel.x*=-1.05
    }
  if(box.x<0+box.w/2||box.y>width-box.h/2){
    box.vel.x*=-1.05
    }
}

