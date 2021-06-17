// Player and Object movement and collision

function moveDude() {
    moveDudeHtz();
    dudeJump();
}

// Player movement

function moveDudeHtz() {
    if (leftKey == true) {
        if (dude.x >= 0) {
            dude.x += -7;
        }  else if (dude.x == 0) {
        }
    } else if (rightKey == true) {
        if (dude.x + dude.s <= cnv.width) {
            dude.x += 7;
        } else if (dude.x + 100 == cnv.width) {
        }
    }
}

function dudeJump() {
    if (dude.y <= 0) {
        dude.y = 1; 
        dude.dy = 0; 
    }

    dude.y += dude.dy;
    dude.dy += dude.g;
}

// Fire Ball movement

// Move Fire Ball on X-axis
function fireMoveLR() {
    if (LR == true) {
        for (let i = 0; i < fireBalls.length; i++) {
            if (left == true) {
                fireBalls[i].x -= fireBallSpd
            }
            if (left == false) {
                fireBalls[i].x += fireBallSpd
            }
        }
    }
}

// Move Fire Ball on Y-axis
function fireMoveUD() {
    if (LR == false)
    for (let i = 0; i < fireBalls.length; i++) {
        fireBalls[i].y += fireBallSpd
    }
}

// Checks if new event should happen
function ballChecker() {
    if (eventactive == true) {
        for (let i = 0; i < fireBalls.length; i++) {
            if (fireBalls[i].x >= 1250 || fireBalls[i].x <= -250) {
                eventactive = false;
            }
            if (fireBalls[i].y >= 850) {
                eventactive = false;
            }
        }
    }
}

// Death Objects Colision

function fireCollide() {
    for (let i = 0; i < fireBalls.length; i++) {
        // Checking where the dude and ball are in relation to eachother
        if (fireBalls[i].x - fireBalls[i].r + 5 < dude.x + dude.s && dude.x < fireBalls[i].x + fireBalls[i].r - 5 && fireBalls[i].y + fireBalls[i].r - 5 > dude.y && dude.y + dude.s > fireBalls[i].y - fireBalls[i].r + 5) { 
            death = true;
        }
    }
}

// Platform Colision 

function platCollide() {
    if (dude.y + dude.s >= cnv.height) {
        onground = true;
        dude.dy = 1;
        dude.y = cnv.height - dude.s
    } else if (plat1.x < dude.x + dude.s && dude.x < plat1.x + plat1.w && plat1.y < dude.y + dude.s && dude.y + dude.s < plat1.y + 20) {
        onground = true;
        dude.y = plat1.y - dude.s;
        dude.dy = 1;
    } else if (plat2.x < dude.x + dude.s && dude.x < plat2.x + plat2.w && plat2.y < dude.y + dude.s && dude.y + dude.s < plat2.y + 20) {
        onground = true;
        dude.y = plat2.y - dude.s;
        dude.dy = 1;
    } else {
        onground = false;
    }  
}

