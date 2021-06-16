// Calculates how far the player is, Make the game get  progressively harder forever
// Make the events that happen

setInterval(timeCtrl, 100);

function timeCtrl() {
    if (death == false) {
    playerScore += 1;
    }
}

function causeEvent() {
    if (fireBalls.length <= 0) {
        currentEvt = randomNum(2, 2);
        if (currentEvt == 1) {
            fireBarrage();
        } else if (currentEvt == 2) {
            fireWall();
            eventAmt = 4;
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
        let y = -120;
        fireBallSpd = 0.5;
        left = true;
        right = false;
        for (let i = 0; i < eventAmt; i++) {
            y += 200
            fireBalls.push(newRock(1050, y))
        }
    } else if (leftRight == 2) {
        let y = -120;
        fireBallSpd = -0.5;
        right = true;
        left = false;
        for (let i = 0; i < eventAmt; i++) {
            y += 200
            fireBalls.push(newRock(-50, y))
        }
    }
}

function fireRoof() {}
     
function fireWallHole() {}

function fireRoofHole() {}

function fireRoofGroup() {}

function fireDiagonal() {}

