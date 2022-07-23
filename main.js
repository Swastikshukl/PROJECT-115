noseX=0;
noseY=0;

function setup(){
    canvas=createCanvas(300, 300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}
function take_snapshotz(){
    save('myfilterimage.png');
}
function draw(){
    image(video, 0, 0, 300, 300);
    
    
    image(clown_nose,noseX,noseY,30,30);

}
function modelLoaded(){
    console.log("'poseNet is initialized'");

}
function gotPoses(results){
if(results.lenght > 0){
    console.log(results);
    console.log("noseX ="+ noseX);
    console.log("noseY ="+ noseY);
    noseX=results[0].pose.nose.x-50;
    noseY=results[0].pose.nose.y-50;

}
}
function preload(){
    clown_nose=loadImage('https://i.postimg.cc/Zn8Dz41W/mustache-image.jpg');
}