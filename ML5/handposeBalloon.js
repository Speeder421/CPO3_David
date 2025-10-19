let handPose;
let videoW=640,videoH=480;
let video;
let hands=[];
let gameStarted=false;
let gameOver=false;
function preload(){
    let options={
        flipped:true,
        runtime:'tfjs',
        modeltype:'full',
        detectorModelURL:undefined,
        landMarkModel:undefined,
    }
    handPose=ml5.handPose(options);
let balloon;
}
function setup(){
    createCanvas(videoW,videoH)
    world.gravity.y=6;
    balloon = new Sprite();
    balloon.diameter=60;
    balloon.collider="dynamic"
    balloon.color="red";
    balloon.x=videoW/2;
    balloon.y=100;
    balloon.bounciness=1;
    balloon.mass=2;
    balloon.drage=0.01;
    topwall=new Sprite(videoW/2,0,videoW,10,'static');
    bottomwall=new Sprite(videoW/2,videoH,videoW,10,'static');
    leftwall=new Sprite(0,videoH/2,10,videoH,'static');
    rightwall=new Sprite(videoW,videoH/2,10,videoH,'static');

    fingerTip=new Sprite();
    fingerTip.diameter=60;
    fingerTip.collider="kinametic";
    fingerTip.color='rgba(52,255,2,0.05)';


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
    handPose.detectStart(video,gotHands);
}
function draw(){
    image(video,0,0,videoW,videoH);

    // for(let i=0;i<hands.length;i++){
    //     let hand=hands[i];
    //     for(let j=0;j<hand.keypoints.length;j++){
    //         let keypoint=hand.keypoints[j];
    //         circle(keypoint.x,keypoint.y,10);
    //     }
    // }
    if (gameStarted===false){
        textSize(28);
        text.align(CENTER,CENTER);
        text("Use index finger to bounce the ball",width/2,height/2-40);
        text("Use index finger to bounce the ball",width/2,height/2-40);
    }

    if (gameOver===false){
    if (hands.length>0){
        let hand=hands[0];
        let keypoint=hand.keypoints[8];
        // circle(keypoint.x,keypoint.y,30);

        fingerTip.x=keypoint.x;
        fingerTip.y=keypoint.y;
        fingerTip.visible=true;
    }
    else{
        fingerTip.visible=false;
    }
}
}
function gotHands(result){
    hands=result;
}