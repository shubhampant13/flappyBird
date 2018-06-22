var cvs = document.getElementById("canvas"); // Getting the control of the canvas
var ctx = cvs.getContext("2d"); //Getting the control of the useful HTML object getContext . This object brings in a lot of useful methods like drawImage, fillRect etc. 

//create images

var bird = new Image(); // Creating image objects
var bg = new Image();
var fg = new Image();
var pipeNorth = new Image();
var pipeSouth = new Image();

bird.src = "images/bird.png"; //Setting the source file link to that object
bg.src = "images/bg.png";
fg.src = "images/fg.png";
pipeNorth.src = "images/pipeNorth.png";
pipeSouth.src = "images/pipeSouth.png";

//create images ends

//load images
bg.addEventListener("load" , draw , false); // The image should load before the canvas gets displayed. This cause everything else to wait till the time image doesn't get loaded


// Drawing the images on the canvas
var gap = 85;
var constant = pipeNorth.height + gap;

function draw() {
    ctx.drawImage(bg,0,0);
    ctx.drawImage(pipeNorth,100,0)
    ctx.drawImage(pipeSouth,100,0+constant);

       
}

draw();
