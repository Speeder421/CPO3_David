let inputtext;
let usertext="";
function setup(){
    createCanvas(600,400);
    inputtext=createInput();
    inputtext.position(200,height-80);
    inputtext.input(updateText);

}
function draw(){
    background(250);
    fill(0);
    text



}
function updateText(){
    usertext=this.value();
}