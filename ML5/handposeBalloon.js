let handPose;
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
    handPose=ml5.handPose(options);
let balloon;
}
function setup(){
    createCanvas(videoW,videoH)
    world.gravity.y=6;
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
function gotHands(result){
    hands=result;
}