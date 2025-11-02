let floor;
let ball;
const values = ['x', 'y'];

function setup(){
    new Canvas(600,400);
    floor = new Sprite();
    floor.width=620;
    floor.height=40;
    floor.y=400;
    floor.x=300;
    floor.collider="static";
    world.gravity.y=10;
}
function draw(){
    background(225);
    randomIndex = Math.floor(Math.random() * values.length);


    
    if(mouse.presses()){
        ball=new Sprite(mouse.x,mouse.y,40,"dynamic");
        ball.bounciness=0.5;
        ball.velocity.values[randomIndex]=getRandomInteger(-10, 10);
    }
}

function getRandomInteger(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


randomIndex = Math.floor(Math.random() * values.length);

