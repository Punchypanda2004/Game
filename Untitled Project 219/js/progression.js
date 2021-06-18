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
        currentEvt = randomNum(1, 4);
        // if (currentEvt == 1) {
        //     fireBarrage();
        if (currentEvt == 1) {
            fireWall();
        } else if (currentEvt == 2) {
            fireRoof();
        // } else if (currentEvt == 4) {
        //     fireWallHole();
        // } else if (currentEvt == 5) {
        //     fireRoofHole();
        } else if (currentEvt == 3) {
            fireDiagonal();
        }
    }
}

// function fireBarrage() {
//     let random = randomNum(1, 2);
//     if (random == 1) {
//     } else if (random == 2) {
//         for (let i = 0; i < eventAmt; i++) {
//         }
//     }
// }

// Ball from left right
function fireWall() {
    leftRight = randomNum(1, 3);
    y = -120;
    // from left
    if (leftRight == 1) {
        fireBalls.splice(0, fireBalls.length);
        for (let i = 0; i < 4; i++) {
            y += 200
            fireBalls.push(newRock(1050, y))
        }
        LR = true;
        left = true;
        eventactive = true;
    // from right
    } else if (leftRight == 2) {
        fireBalls.splice(0, fireBalls.length);
        for (let i = 0; i < 4; i++) {
            y += 200;
            fireBalls.push(newRock(-50, y));
        }
        LR = true;
        left = false;
        eventactive = true; 
    }
}

// The balls from roof
function fireRoof() {
    fireBalls.splice(0, fireBalls.length);
    x = randomNum(-140, -50);
    for (let i = 0; i < 5; i++) {
        x += 200;
        fireBalls.push(newRock(x, -50));
    }
    LR = false;
    eventactive = true; 
}
     
// function fireWallHole() {}

// function fireRoofHole() {}

// function fireRoofGroup() {}

function fireDiagonal() {
    let apart = 90;
    leftRight = randomNum(1, 3);
    mode =  randomNum(1, 3);
    x = 1050;
    // From The Left
    if (leftRight == 1) {
        fireBalls.splice(0, fireBalls.length);
        // Up to down
        if (mode == 1) {
            y = -50;
            for (let i = 0; i < 7; i++) {
                y += apart;
                x += 40;
                fireBalls.push(newRock(x, y));
            }
        // Down to up
        } else if (mode == 2) {
            y = 800;
            for (let i = 0; i < 7; i++) {
                y -= apart;
                x += 40;
                fireBalls.push(newRock(x, y));
            }
        }
        LR = true;
        left = true;
        eventactive = true;
    // From The Right
    } else if (leftRight == 2) {
        fireBalls.splice(0, fireBalls.length);
        x = -50;
        if (mode == 1) {
            y = -50;
            // Up to down
            for (let i = 0; i < 7; i++) {
                y += apart;
                x -= 40;
                fireBalls.push(newRock(x, y));
            }
        } else if (mode == 2) {
            y = 800;
            // Down to up
            for (let i = 0; i < 7; i++) {
                y -= apart;
                x -= 40;
                fireBalls.push(newRock(x, y));
            }
        }
        LR = true;
        left = false;
        eventactive = true; 
    }
}

