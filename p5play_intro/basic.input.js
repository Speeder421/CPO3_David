let inputtext;
let usertext="";
let colorpicker;
function setup(){
    createCanvas(600,400);
    inputtext=createInput();
    inputtext.text="Your Name"
    inputtext.position(700,500);
    inputtext.input(updateText);
    colorpicker=createColorPicker("#63claff");
    colorpicker.position(480,170);


}
function draw(){
    background(colorpicker.value());
    fill(0);
    textSize(28);
    textAlign(CENTER,CENTER);
    text(usertext,width/2,180);



}
function updateText(){
    usertext=this.value();
}