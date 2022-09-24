objects=[];
status="";
function preload()
{
    video=createvideo('video.mp4');
}
function setup()
{
    canvas=createCanvas(480, 380);
    canvas.center();
    video.hide();
}
function start()
{
    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="ststus: detectingObjects";
}
function modelLoaded()
{
    console.log("modelLoaded!")
    status=true;
    video.loop();
video.speed(1);
video.volume(0);
}
function draw()
{
    Image(video, 0, 0, 480, 300);
}