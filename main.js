var dif=0;
rightWristX=0;
leftWristX=0;


function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(900,550);
    canvas.position(560,150);
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log('Posenet is initialised!');
    poseNet.on('pose',gotPoses);
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);

        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        dif=floor(leftWristX-rightWristX);
    }
}

function draw(){
    background('#585959');
    textSize(dif);
    fill('#eb3423');
    text('Marvel', 50, 400)
    document.getElementById("font").innerHTML="Font size of the text will be:"+dif+"px";
}