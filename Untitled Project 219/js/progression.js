// Calculates how far the player is, Make the game get  progressively harder forever
// Make the events that happen

let playerScore = 0;

setInterval(timeCtrl, 100);

function timeCtrl() {
    playerScore += 1;
    ballSpd += 0.001;
}

function makeEvent() {
    if (fireObjects.length <= 0) {
        currentEvt = randomNum(1, 9);
        eventActive = true;
    }
}

function causeEvent() {
    if (eventActive == true) {
        if (currentEvt == 1) {
        } else if (currentEvt == 2) {
        } else if (currentEvt == 3) {
        } else if (currentEvt == 4) {
        } else if (currentEvt == 5) {
        } else if (currentEvt == 6) {
        } else if (currentEvt == 7) {
        } else if (currentEvt == 8) {
        } else if (currentEvt == 9) {   
        }
        eventActive = false
    }
}

function fireBarrage() {}

function fireWall() {}

function fireRoof() {}
     
function fireWallHole() {}

function fireRoofHole() {}

function fireRoofGroup() {}

function fireDiagonal() {}

function fireSpout() {}

function lavaRising() {}
