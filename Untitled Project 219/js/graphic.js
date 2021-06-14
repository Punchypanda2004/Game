// Draw the Objects

// Draw The Dude

function drawDude(x, y) {
    fill("black");
    rect(x, y, 100, 100, "fill");
}

// Draw Flaming Rock 

function drawRock(x, y, r) {
    fill("red");
    circle(x, y, r, "fill");
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