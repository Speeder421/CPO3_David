let inputtext;
let inputtext2;
let usertext="";
let usertext2="";
let colorpicker;

function setup(){
    createCanvas(600,400);
    inputtext=createInput();
    inputtext.position(700,500);
    inputtext.input(updateText);

    inputtext2.position(480,480);
    inputtext2.input(updateText2);
    inputtext2.input(updateText2);

    colorpicker=createColorPicker("#63claff");
    colorpicker.position(480,170);


}
function draw(){
    background(colorpicker.value());
    fill(0);
    textSize(28);
    textAlign(CENTER,CENTER);
    text(usertext,width/2,180);

    fill(0);
    textSize(28);
    textAlign(CENTER,CENTER);
    text(usertext2,width/2,180);



}
function updateText(){
    usertext=this.value();
}

function updateText2(){
    usertext2=this.value();
}