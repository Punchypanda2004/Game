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
    s: 80
}


let leftRight = 0;
let fireBallSpd = 0.5;
let currentEvt = 0;
let playerScore = 0;
let y = 0;
let x = 0;

// Trues and falses

let leftKey = false;
let rightKey = false;
let onground = true;
let death = false;
let eventactive = false;
let LR = true;
let left = true;

// Arrays

let fireBalls = [];

// One-Shot Function Calls!
makePlat();
requestAnimationFrame(animateDude);

function animateDude() {
    if (death == false) {
    // LOGIC
    moveDude();
    platCollide();
    fireCollide();
    ballChecker();

    // DRAW
    background("salmon");
    makePlat(plat1.x, plat1.y, plat1.w);
    makePlat(plat2.x, plat2.y, plat2.w);
    drawDude(dude.x, dude.y, dude.s);

    for (let i = 0; i < fireBalls.length; i++) {
        fireMoveLR(fireBalls[i]);
        fireMoveUD(fireBalls[i]);
        drawFire(fireBalls[i]);
    }

    causeEvent();
    requestAnimationFrame(animateDude);
    } else if (death == true) {
        youDead(playerScore)
    }
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
            dude.dy = -13;  
            dude.g = 0.25;
            onground = false;
        } 
    }
}

function keyupHandles(event) { 
    if (event.code == "ArrowLeft") {
        leftKey = false;
    } else if (event.code == "ArrowRight") {
        rightKey = false;
    } else if (event.code == "Space") {
        if (dude.dy < -3) {
            dude.dy = -3; 
        }
    }
}

// pop

setInterval(yes, 500) 

function yes() {
    console.log(eventactive);
}
