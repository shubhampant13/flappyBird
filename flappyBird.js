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
var gap = 350;
var constant = pipeNorth.height+gap;
var bX=10;
var bY=150;
var gravity = 1.2;
var score = 0;
var fly = new Audio();
var scaudio =  new Audio();
fly.src="sounds/fly.mp3";
scaudio.src="sounds/score.mp3";

// Event on pressing key
document.addEventListener("keydown",moveUp);
function moveUp() {
    bY=bY-50;
    fly.play();
}
// Event on pressing key ends

// Creating pipes regularly to move from rtl
var pipe = [];
pipe[0]= { 
      x : cvs.width,
      y : 0
};


function draw() {
    ctx.drawImage(bg,0,0);
    for(var i=0;i<pipe.length;i++)
        {
          ctx.drawImage(pipeNorth,pipe[i].x,pipe[i].y);
          ctx.drawImage(pipeSouth,pipe[i].x,pipe[i].y+constant);
          pipe[i].x--;    
            
          if(pipe[i].x == 125){
              pipe.push({
                  x : cvs.width ,
                  y : Math.floor(Math.random()*pipeNorth.height)-pipeNorth.height
              });
          }    
            
            if(bX+bird.width >= pipe[i].x && bX <= pipe[i].x+pipeNorth.width && (bY <= pipe[i].y + pipeNorth.height || bY+bird.height >= pipe[i].y+constant) || bY + bird.height >= cvs.height-fg.height){
                location.reload();
            }
            
            if(pipe[i].x == 5)
                {
                 score++;
                 scaudio.play();
                }
        
            
        }
    
    
    ctx.drawImage(fg,0,cvs.height-fg.height);
    ctx.drawImage(bird,bX,bY); 
    bY = bY + gravity;
    ctx.fillStyle="#000";
    ctx.font="40px Verdana";
    ctx.fillText("Score:" +score,10,cvs.height-30);
    requestAnimationFrame(draw);
}

draw();
