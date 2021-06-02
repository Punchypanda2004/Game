// The main file, controls Death and calls fuctions
let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");
cnv.width = 1000;
cnv.height = 750;

// Gobal Variables

let dudex = 455;
let dudey = 600;
let dudeg = 0.3;
let dudedy = 0;


let leftKey = false;
let rightKey = false;

//  Move left, right and jump

drawDude(dudex, dudey);
requestAnimationFrame(animateDude);

function animateDude() {
    background("orange");

    moveDude()
    drawDude(dudex, dudey);

    requestAnimationFrame(animateDude);
}

document.addEventListener("keydown", keydownHandles);
document.addEventListener("keyup", keyupHandles);

function keydownHandles(event) {
    if (event.code == "ArrowLeft") {
        leftKey = true;
    } else if (event.code == "ArrowRight") {
        rightKey = true;
    } else if (event.code == "Space") {
        
    }
}

function keyupHandles(event) {
    if (event.code == "ArrowLeft") {
        leftKey = false;
    } else if (event.code == "ArrowRight") {
        rightKey = false;
    }
}


