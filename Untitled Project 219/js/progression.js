// Calculates how far the player is, Make the game get  progressively harder forever
// Make the events that happen

setInterval(timeCtrl, 100);

function timeCtrl() {
    if (death == false) {
    playerScore += 1;
    // ball.Spd += 0.001;
    }
}

function makeEvent() {
    if (fireObjects.length <= 0) {
        currentEvt = randomNum(1, 7);
        eventActive = true;
    }
}

function causeEvent() {
    if (eventActive == true) {
        if (currentEvt == 1) {
        } else if (currentEvt == 2) {
            fireBarrage()
        } else if (currentEvt == 3) {
            fireWall()
        } else if (currentEvt == 4) {
            fireRoof()
        } else if (currentEvt == 5) {
            fireWallHole()
        } else if (currentEvt == 6) {
            fireRoofHole()
        } else if (currentEvt == 7) {
            fireDiagonal()
        }
        eventActive = false
    }
}

function fireBarrage() {
    let random = randomNum(1, 2)
    if (random == 1) {
        
    } else if (random == 2) {}
}

function fireWall() {
}

function fireRoof() {}
     
function fireWallHole() {}

function fireRoofHole() {}

function fireRoofGroup() {}

function fireDiagonal() {}

