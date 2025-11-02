let inputtext;
let usertext="";
let colorpicker;
function setup(){
    createCanvas(600,400);
    inputtext=createInput();
    inputtext.position(200,height-80);
    inputtext.input(updateText);
    colorpicker=createColorPicker("#63claff");
    colorpicker.position(500,60);


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