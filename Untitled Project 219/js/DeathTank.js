// The main file, controls Death and calls fuctions
let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");
cnv.width = 1000;
cnv.height = 750;

// Gobal Variables

let dudex = 455;
let dudey = 600;
let dudeg = 0;
let dudej = 6;

//  Move left, right and jump

drawDude(dudex, dudey)
requestAnimationFrame(animateDude);

function animateDude() {
    background("orange");

    drawDude(dudex, dudey);

    requestAnimationFrame(animateDude);
}



function animateJump() {
    if (dudey <= 601) {
        jumpMove();
        gravity();
        dudeg += 0.1;
    } else {
        dudeg = 0;
    }

}

document.addEventListener("keydown", movement)

function movement(event) {
    if (event.code == "ArrowLeft") {
        leftMove();
    } else if (event.code == "ArrowRight") {
        rightMove();
    } else if (event.code == "Space") {
        animateJump();
        dudey -= 1; 
    }
}


