let inputtext;
let button
let usertext="";

let colorpicker;

function setup(){
    createCanvas(600,400);
    inputtext=createInput("Enter your text here");
    inputtext.position(700,500);
    inputtext.input(updateText);

    button=createButton("show input");
    button=
    

    colorpicker=createColorPicker("#63claff");
    colorpicker.position(480,170);


}
function draw(){
    background(210);
    fill(colorpicker.value());
    textSize(28);
    textAlign(CENTER,CENTER);
    text(usertext,width/2,180);





}
function updateText(){
    usertext=this.value();
}
