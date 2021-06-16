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
        } else if (dude.x == 0) {
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

function fireMove() {
    for (let i = 0; i < fireBalls.length; i++) {
        fireBalls[i].x -= fireBallSpd

        if (fireBalls[i].x <= -50 && left == true) {
            fireBalls.splice(i, fireBalls.length);
        }  
        if (fireBalls[i].x >= 1050 && right == true) {
            fireBalls.splice(i, fireBalls.length);
        }
    }
}

// Death Objects Colision

function rockCollide() {
    for (let i = 0; i < fireBalls.length; i++) {
        if (fireBalls[i].x - 20 < dude.x + dude.s && dude.x < fireBalls[i].x + 20 && fireBalls[i].y + 20 > dude.y && dude.y + dude.s > fireBalls[i].y - 20) { 
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

