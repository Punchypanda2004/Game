// Player and Object movement and collision

function moveDude() {
    moveDudeHtz();
    dudeJump();
    ballMove();
}

// Player movement

function moveDudeHtz() {
    if (leftKey == true) {
        if (dudex >= 0) {
            dudex += -5;
        } else if (dudex == 0) {
        }
    } else if (rightKey == true) {
        if (dudex + 100 <= cnv.width) {
            dudex += 5;
        } else if (dudex + 100 == cnv.width) {
        }
    }
}

function dudeJump() {

    if (onground == true) {
        dudeg = 0;
        dudedy = 0;
    }
    dudey += dudedy;
    dudedy += dudeg;

}

function jumpMove() {
    if (dudey > 50) {
        dudey -= dudej;
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

        if (dudey + 100 + dudedy >= cnv.height) {
            onground = true
        } else if (dudey + 100 >= 430 ) {
            if (dudex - 630 <= 130 && dudex > 630) {
                onground = true
            }
            if (dudex - 120 <= 130 && dudex > 120) {
                onground = true
            } else {
                onground = false
                dudeg = 0.3
            }

        }
}

(120, 430, 250);
(630, 430, 250);

