let noun;
let verb;
let adj;
let adv;
let place;
let button;


function setup(){
    createCanvas(600,400);

    noun=createInput("Enter a noun");
    noun.position(width/2,100);
    noun.input(nountext);
}
function draw(){
    background(225);
    textSize(28);
    textAlign(CENTER,CENTER);
    text(usertext,width/2,180);

}
function nountext(){
    usertext=this.value();
}
