// Draw the Objects

// Draw The Dude

function drawDude(x, y, s) {
    fill("black");
    rect(x, y, s, s, "fill");
}

// Draw Flaming Rock 
function newRock(positionx, positiony) {
    return {
        x: positionx,
        y: positiony,
        r: 20,
    }
}

function drawFire(aFire) {
    fill("red");
    circle(aFire.x, aFire.y, aFire.r, "fill")
}

//Draw Death and Score

function youDead(score) {
    font("44px Comic Sans MS")
    fill("darkblue")
    text("Game Over", 385, 320)
    text("Score" + " " + score, 390, 370)
}

// Platforms
function makePlat(x, y, w) {
    fill("brown")
    rect(x, y, w, 20, "fill") 
}

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