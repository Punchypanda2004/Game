// Player and Object movement and collision

function moveDude() {
    moveDudeHtz()
    
}

function moveDudeHtz() {
    if (leftKey == true) {
        dudex += -5;
    } else if (rightKey == true) {
        dudex += 5;
    }
}

function jumpMove() {
    if (dudey > 50) {
        dudey -= dudej;
    }
}


// Gravity

function gravity() {
    if (dudey < 600) {
        dudey += dudeg;
    }
}

