let handpose;
let videoW=640,videoH=480;
let video;
let hands=[];
function preload(){
    let options={
        flipped:true,
        runtime:'tfjs',
        modeltype:'full',
        detectorModelURL:undefined,
        landMarkModel:undefined,
    }
    handpose=ml5.handPose(options);
}
function setup(){
    createCanvas(videoW,videoH)
    let constraints={
        video:{
            mandatory:{
                minWidth:videoW,
                minHeight:videoH,
            },
            optional:[{minFrameRate:60}]
        },
        audio:false,
        flipped:true,
    };
    video=createCapture(constraints);
    video.size=(640,480);
    video.hide();
    handpose.detectStart(video,gotHands);
}
function draw(){
    image(video,0,0,videoW,videoH);
}
function gotHands(result){
    hands=result;
}