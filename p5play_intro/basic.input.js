let noun,nountext;
let verb,verbtext;
let adj,adjtext;
let adv,advtext;
let place,placetext;
let button;


function setup(){
    createCanvas(600,400);

    noun=createInput("Enter a noun");
    noun.position(width/2,100);
    noun.input(nountext);



}
function draw(){
    background(225)




}
function updateText(){
    usertext=this.value();
}
