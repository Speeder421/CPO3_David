let handpose;
let videoW=640,videoH=480;
function preload(){
    let options={
        flipped:true,
        runtime:'tfjs',
        modeltype:'full',
        detectorModelURL:undefined,
        landMarkModel:undefined,
    }
    handpose=ml5.handpose(options);
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
    }
}
