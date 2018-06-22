var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");

//load images

var bird = new Image();
var bg = new Image();
var fg = new Image();
var pipeNorth = new Image();
var pipeSouth = new Image();

bird.src = "images/bird.png";
bg.src = "images/bg.png";
fg.src = "images/fg.png";
pipeNorth.src = "images/pipeNorth.png";
pipeSouth.src = "images/pipeSouth.png";

//load images ends

// Drawing the images on the canvas

function draw() {
    ctx.drawImage(bg,0,0);
       
}

draw();