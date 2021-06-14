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

let rock = {
    Spd: 2,
    x: 500,
    y: -50,
    r: 20
}


let currentEvt = 0;
let eventAmt = 0;
let playerScore = 0;

let eventActive = false;
let leftKey = false;
let rightKey = false;
let onground = true;
let death = false;

// Arrays

// let fireBalls = [];
// for (let i = 0; i == eventAmt; i++) {
//     fireBalls.push(drawFlameRock());
// }

// One-Shot Function Calls!
drawDude(dude.x, dude.y);
makePlat();
requestAnimationFrame(animateDude);

function animateDude() {
    if (death == false) {
    // LOGIC
    moveThings();
    platCollide();
    rockCollide();
    // makeEvent();
    // causeEvent();

    // DRAW
    background("salmon");

    makePlat(plat1.x, plat1.y, plat1.w);
    makePlat(plat2.x, plat2.y, plat2.w);
    drawDude(dude.x, dude.y);
    drawRock(rock.x, rock.y, rock.r);


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

// setInterval(jumpss, 500)  

// function jumpss() {
//     console.log(death);
// }