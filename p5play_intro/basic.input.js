let inputtext;
let usertext="";
let colorpicker;
function setup(){
    createCanvas(600,400);
    inputtext=createInput();
    inputtext.position(200,height-80);
    inputtext.input(updateText);
    colorpicker=create

}
function draw(){
    background(250);
    fill(0);
    textSize(28);
    textAlign(CENTER,CENTER);
    text(usertext,width/2,180);



}
function updateText(){
    usertext=this.value();
}