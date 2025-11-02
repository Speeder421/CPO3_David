let noun,nountext;
let verb,verbtext;
let adj,adjtext;
let adv,advtext;
let place,placetext;
let button;


function setup(){
    createCanvas(600,400);
    
    noun=createInput("Enter a noun");
    inputtext.position();
    inputtext.input(updateText);

    colorpicker=createColorPicker("#63claff");
    colorpicker.position(480,170);


}
function draw(){
    background(2);
    fill(colorpicker.value());
    textSize(28);
    textAlign(CENTER,CENTER);
    text(usertext,width/2,180);




}
function updateText(){
    usertext=this.value();
}
