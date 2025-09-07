let floor;
let ball;

function setup(){
    new Canvas(600,400);
    floor = new Sprite();
    floor.width=600
    floor.height=40
    floor.y=400;
    floor.x=300;
    floor.collider="static";
    world.gravity.y=10;
    
}
function draw(){
    background(225);
    if(mouse.presses()){
        new Sprite(mouse.x,mouse.y,40);
    }
}