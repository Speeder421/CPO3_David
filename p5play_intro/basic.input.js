let inputtext;
let usertext="";
function setup(){
    createCanvas(600,400);
    inputtext=createInput();
    inputtext.position(200,height-80);
    inputtext.input(updateText);

}
function draw(){

}
function updateText(){
    usertext=this.value
}