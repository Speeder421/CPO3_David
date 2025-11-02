let inputtext;
let button
let usertext="";

let colorpicker;

function setup(){
    createCanvas(600,400);
    inputtext=createInput("Enter your text here");
    inputtext.position(700,500);
    

    button=createButton("Submit");
    button.mousePressed(updateText)
    button.position(700,480)
    

    colorpicker=createColorPicker("#63claff");
    colorpicker.position(480,170);


}
function draw(){
    background(210);
    





}
function updateText(){
    fill(colorpicker.value());
    textSize(28);
    textAlign(CENTER,CENTER);
    text(usertext,width/2,180);
}
