// Calculates how far the player is, Make the game get  progressively harder forever
// Make the events that happen

setInterval(timeCtrl, 100);

function timeCtrl() {
    if (death == false) {
    playerScore += 1;
    fireBallSpd += 0.001;
    }
}

function causeEvent() {
    if (eventactive == false) {
        currentEvt = randomNum(2, 4);
        if (currentEvt == 1) {
            fireBarrage();
        } else if (currentEvt == 2) {
            fireWall();
        } else if (currentEvt == 3) {
            fireRoof();
        } else if (currentEvt == 4) {
            fireWallHole();
        } else if (currentEvt == 5) {
            fireRoofHole();
        } else if (currentEvt == 6) {
            fireDiagonal();
        }
    }
}

function fireBarrage() {
    let random = randomNum(1, 2)
    if (random == 1) {
    } else if (random == 2) {
        for (let i = 0; i < eventAmt; i++) {
        }
    }
}

function fireWall() {
    leftRight = randomNum(1, 3)
    if (leftRight == 1) {
        fireBalls.splice(0, fireBalls.length);
        y = randomNum(-220, 100);
        for (let i = 0; i < 4; i++) {
            y += 200
            fireBalls.push(newRock(1050, y))
        }
        LR = true;
        left = true;
        eventactive = true;
    } else if (leftRight == 2) {
        fireBalls.splice(0, fireBalls.length);
        y = randomNum(-220, 100);
        for (let i = 0; i < 4; i++) {
            y += 200
            fireBalls.push(newRock(-50, y))
        }
        LR = true;
        left = false;
        eventactive = true; 
    }
}

function fireRoof() {
    fireBalls.splice(0, fireBalls.length);
    x = randomNum(-140, -50);
    for (let i = 0; i < 5; i++) {
        x += 200
        fireBalls.push(newRock(x, -50))
    }
    LR = false;
    eventactive = true; 
}
     
function fireWallHole() {}

function fireRoofHole() {}

function fireRoofGroup() {}

function fireDiagonal() {}

