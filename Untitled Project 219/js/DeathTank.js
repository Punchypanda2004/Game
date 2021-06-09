// The main file, calls fuctions
let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");
cnv.width = 1000;
cnv.height = 750;

// Gobal Variables

// MY DUDE
let dude = {
    x: 455,
    y: 750 -100,
    g: 0.3,
    dy: 0,
}

// PLATFORMS
let plat1 = {
        x: 120,
        y: 430,
        w: 250,
    }
let plat2 = {
        x: 630,
        y: 430,
        w: 250,
    }
let plat3 = {
        x: 0,
        y: 750,
        w: 1000,
    }

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

let fireBalls = [];
for (let i = 0; i == eventAmt; i++) {
    fireBalls.push(drawRock(ballx, bally));
}

// Animation
drawDude(dude.x, dude.y);
makePlat();
requestAnimationFrame(animateDude);

function animateDude() {
    // LOGIC
    moveDude();
    colisionDetect();
    platCollide();
    // makeEvent();
    // causeEvent();

    // DRAW
    background("salmon");

    makePlat(plat1.x, plat1.y, plat1.w);
    makePlat(plat2.x, plat2.y, plat2.w);
    makePlat(plat3.x, plat3.y, plat3.w);
    drawDude(dude.x, dude.y);
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
            dude.dy = -15;  
            dude.g = 0.3;
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

setInterval(jumpss, 10)  

function jumpss() {
    console.log(onground);
}