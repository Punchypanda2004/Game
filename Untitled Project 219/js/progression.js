// Calculates how far the player is, Make the game get  progressively harder forever

let playerScore = 0;

setInterval(timeCtrl, 100);

function timeCtrl() {
    playerScore += 1;
}

