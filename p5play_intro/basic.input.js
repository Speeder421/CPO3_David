let inputtext;

let usertext="";

let colorpicker;

function setup(){
    createCanvas(600,400);
    inputtext=createInput();
    inputtext.position(700,500);
    inputtext.input(updateText);

    colorpicker=createColorPicker("#63claff");
    colorpicker.position(480,170);


}
function draw(){
    background(225);
    fill(0);
    textSize(28);
    textAlign(CENTER,CENTER);
    text(usertext,colorpicker.value(),width/2,180);




}
function updateText(){
    usertext=this.value();
}
