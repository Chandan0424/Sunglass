noseX=0;
noseY=0;

function preload(){
    glass=loadImage("sunglass.png");
}
function setup(){
    canvas=createCanvas(400,400);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotPoses);
}
function draw(){
    image(video,0,0,400,400);
    image(glass,noseX,noseY,100,50)
}

function picture(){
    save("sunglass.png");
}
function modelLoaded(){
    console.log("Model is Loaded");
}
function gotPoses(results){
    console.log(results);
    if(results.length>0){
        noseX=results[0].pose.nose.x-170;
        noseY=results[0].pose.nose.y-100;
    }
}