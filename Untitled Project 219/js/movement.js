// Player and Object movement and collision

function moveThings() {
    moveDudeHtz();
    dudeJump();
    rockMove();
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
    if (dude.y <= 0) {
        dude.y = 1;
        dude.dy = 0; 
    }

    dude.y += dude.dy;
    dude.dy += dude.g;

}

// Ball movement

function rockMove() {
    rock.y += rock.Spd

    if (rock.y >= 800) {
        rock.y = -50;
    }

}

// Death Objects Colision

function rockCollide() {
    if (rock.x - rock.r < dude.x + 100 && dude.x < rock.x + rock.r && rock.y + rock.r > dude.y && dude.y + 100 > rock.y - rock.r) { 
        death = true;
    }
}

// Platform Colision 

function platCollide() {
    if (dude.y + 100 >= cnv.height) {
        onground = true;
        dude.dy = 1;
        dude.y = cnv.height - 100
    } else if (plat1.x < dude.x + 100 && dude.x < plat1.x + plat1.w && plat1.y < dude.y + 100 && dude.y + 100 < plat1.y + 20) {
        onground = true;
        dude.y = plat1.y - 100;
        dude.dy = 1;
    } else if (plat2.x < dude.x + 100 && dude.x < plat2.x + plat2.w && plat2.y < dude.y + 100 && dude.y + 100 < plat2.y + 20) {
        onground = true;
        dude.y = plat2.y - 100;
        dude.dy = 1;
    } else {
        onground = false;
    }  
}

