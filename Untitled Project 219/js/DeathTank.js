// The main file, calls fuctions
let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");
cnv.width = 1000;
cnv.height = 750;

// Gobal Variables

let dudex = 455;
let dudey = 750 - 100;
let dudeg = 0.3;
let dudedy = 0;
let ballSpd = 2;
let ballx = 1080;
let bally = 450;
let currentEvt = 0;
let eventAmt = 0;

let eventActive = false;
let leftKey = false;
let rightKey = false;
let onground = true;

// Arrays

let fireObjects = [];
for (let i = 0; i == eventAmt; i++) {
    fireObjects.push(drawRock(ballx, bally));
}

let Platforms = [];


// Animation
drawDude(dudex, dudey);
makePlat();
requestAnimationFrame(animateDude);

function animateDude() {
    background("salmon");

    makePlat(120, 430, 250);
    makePlat(630, 430, 250);

    moveDude();
    makeEvent();
    causeEvent();
    colisionDetect();
    drawDude(dudex, dudey);
    drawRock(ballx, bally);


    requestAnimationFrame(animateDude);
}

// Event Listeners
document.addEventListener("keydown", keydownHandles);
document.addEventListener("keyup", keyupHandles);

// Movement Funtions
function keydownHandles(event) {
    if (event.code == "ArrowLeft") {
        leftKey = true;
    } else if (event.code == "ArrowRight") {
        rightKey = true;
    } else if (event.code == "Space") {
        if (onground == true) {
            dudedy = -15;  
            dudeg = 0.3;
            onground = false; 
        }
    }
}

function keyupHandles(event) {
    if (event.code == "ArrowLeft") {
        leftKey = false;
    } else if (event.code == "ArrowRight") {
        rightKey = false;
    }
}

// BALLS

setInterval(jumpss, 500)  

function jumpss() {
    console.log(onground);
}