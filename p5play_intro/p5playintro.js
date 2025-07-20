function setup() {
  // Set up the canvas
  new Canvas(800, 400);
  background(250); //background color

  // Basic shape testing
  // write your codes here
  // End Basic shape testing
Fill("skyblue")
stroke("pink")
strokeWeight(10)
circle(30,30,50)
rect(50,50,100,200)
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
ball.collider="dynamic"

}

function draw() {
  // write your codes here
}

