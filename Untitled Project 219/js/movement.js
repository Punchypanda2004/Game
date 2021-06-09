// Player and Object movement and collision

function moveDude() {
    moveDudeHtz();
    dudeJump();
    ballMove();
}

// Player movement

function moveDudeHtz() {
    if (leftKey == true) {
        if (dude.x >= 0) {
            dude.x += -7;
        } else if (dude.x == 0) {
        }
    } else if (rightKey == true) {
        if (dude.x + 100 <= cnv.width) {
            dude.x += 7;
        } else if (dude.x + 100 == cnv.width) {
        }
    }
}

function dudeJump() {

    if (onground == true) {
        dude.g = 0;
        dude.dy = 0;
    }
    dude.y += dude.dy;
    dude.dy += dude.g;

}

function jumpMove() {
    if (dudey > 50) {
        dude.y -= dude.j;
    }
}

// Ball movement

function ballMove() {
    ballx -= ballSpd

    if (ballx <= -80) {
        ballx = 1080;
    }

}

// Platform Colision 

function colisionDetect() {
    
}

function platCollide() {
    if (dude.y + 100 >= cnv.height) {
        onground = true;
    } else if (plat1.x < dude.x && dude.x < plat1.x + plat1.w && plat1.y < dude.y + 100 && dude.y + 100 < plat1.y + 20) {
        onground = true;
        dude.y = plat1.y - 100;
    } else if (plat2.x < dude.x && dude.x < plat2.x + plat2.w && plat2.y < dude.y && dude.y < plat2.y + 20) {
        onground = true;
        dude.y = plat2.y;
    } else {
        onground = false;
        dude.g = 0.3;
    }  
}

// x: 120,
// y: 430,
// w: 250,

