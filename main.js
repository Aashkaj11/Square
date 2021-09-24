noseX=0;
noseY=0;
difference=0;
rightWristX=0;
leftWristX=0;
function setup(){
     video=createCapture(VIDEO);
     video.size(550,500);
     canvas=createCanvas(550,500);
     canvas.position(560,150);
     poseNet=ml5.poseNet(video,modelLoaded);
     poseNet.on('pose',gotPoses);
}
function draw(){
    background("#fc2003");
    fill('#E6E200');
    stroke('#E6E200');
    square(noseX,noseY,difference);
    document.getElementById("square_side").innerHTML="Width And Height of a square will be =  "+difference+" px";
}
function modelLoaded(){
    console.log("model loaded/ PoseNet is intialised");
}
function gotPoses(results){
if(results.length>0){
   console.log(results);
   noseX=results[0].pose.nose.x;
   noseY=results[0].pose.nose.y;
   leftWristX=results[0].pose.leftWrist.x;
 rightWristX=results[0].pose.rightWrist.x;
 difference=floor(leftWristX-rightWristX);

 console.log("leftWristX = "+ leftWristX +"rightWristX ="+"diference");
}
}
