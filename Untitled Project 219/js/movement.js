// Player and Object movement and collision

function leftMove() {
    if (dudex > 50) {
        dudex -= 10;
    }
}

function rightMove() {
    if (dudex < 850) {
        dudex += 10;
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

