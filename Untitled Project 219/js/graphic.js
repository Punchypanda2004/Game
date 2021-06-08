// Draw the Objects

// Draw The Dude

function drawDude(x, y) {
    fill("black");
    rect(x, y, 100, 100, "fill");
}

// Draw Flaming Rock 

function drawRock(x, y) {
    fill("red");
    circle(x, y, 20, "fill");
}

//Draw Death, Start, And Score

function youDead() {
    
}

// Platforms
function makePlat(x, y, w) {
    fill("brown")
    rect(x, y, w, 20, "fill") 
}