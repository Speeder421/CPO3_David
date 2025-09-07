let floor;
let ball;

function setup(){
    new Canvas(600,400);
    // ball = new Sprite();
    // ball.y=0;
    // ball.x=300;
    // ball.diameter=40;
    world.gravity.y=10;
}
function draw(){
    background(225);
    if(mouse.presses){
        new Sprite(mouse.x,mouse.y,40);
    }
}