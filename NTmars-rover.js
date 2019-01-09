// Rover Object Goes Here
// ======================

var rover = {
    "direction": "N",
    "row": 0,
    "column": 0,
    "travelLog": ["0,0"]
};
var travel = "rffrfflfrffblbb";

// ======================

function free(obstacles, r, c) {
    if (obstacles[r][c] == " ") {
        console.log("No obstacle", "Row:", r, "Column: ", c);
        return true;
    }
    else {
        console.log("Obstacle: ", obstacles[r][c], "Row", r, "Column", c);
        return false;

    }
}



// ======================GIRAR IZQUIERDA
function turnLeft(rover) {
    switch (rover.direction) {
        case "N":
            rover.direction = "W";
            break;

        case "W":
            rover.direction = "S";
            break;

        case "S":
            rover.direction = "E";
            break;

        case "E":
            rover.direction = "N";
            break;
    }
    console.log("turnLeft was called!", rover.direction);
}

// ======================GIRAR DERECHA
function turnRight(rover) {
    switch (rover.direction) {
        case "N":
            rover.direction = "E";
            break;

        case "E":
            rover.direction = "S";
            break;

        case "S":
            rover.direction = "W";
            break;

        case "W":
            rover.direction = "N";
            break;
    }
    console.log("turnRight was called!", rover.direction);
}


// ======================MOVER HACIA DELANTE
function moveForward(rover, obstacles) {
    var newPosition;
    var mensaje = "Rover was moved Forward";
    function paraRow() {
        if ((newPosition >= 0 || newPosition <= 9) && free(obstacles, newPosition, rover.column)) {
            rover.row = newPosition;
            mensaje;
        } else {
            mensaje = "Rover can`t move. Maybe there's an obstacle.Rover goes off the map";
        }
    };

    function paraColumn() {
        if ((newPosition >= 0 || newPosition <= 9) && free(obstacles, rover.row, newPosition)) {
            rover.column = newPosition;
            mensaje;
        } else {
            mensaje = "Rover can`t move. Maybe there's an obstacle.Rover goes off the map";
        }
    };

    switch (rover.direction) {
        case "N":
            newPosition = rover.row - 1;
            paraRow();
            break;

        case "E":
            newPosition = rover.column + 1;
            paraColumn();
            break;

        case "S":
            newPosition = rover.row + 1;
            paraRow();
            break;

        case "W":
            newPosition = rover.column - 1;
            paraColumn();
            break;
    }

    console.log(mensaje, rover);

    if (mensaje == "Rover was moved Forward") {
        rover.travelLog.push(rover.row + "," + rover.column);
    }
}


// ======================MOVER HACIA ATRAS
function moveBackward(rover, obstacles) {
    var newPosition;
    var mensaje = "Rover was moved Backward";
    function paraRow() {
        if ((newPosition >= 0 || newPosition <= 9) && free(obstacles, newPosition, rover.column)) {
            rover.row = newPosition;
            mensaje;
        } else {
            mensaje = "Rover can`t move. Maybe there's an obstacle.Rover goes off the map";
        }
    };

    function paraColumn() {
        if ((newPosition >= 0 || newPosition <= 9) && free(obstacles, rover.row, newPosition)) {
            rover.column = newPosition;
            mensaje;
        } else {
            mensaje = "Rover can`t move. Maybe there's an obstacle.Rover goes off the map";
        }
    };

    switch (rover.direction) {
        case "N":
            newPosition = rover.row + 1;
            paraRow();
            break;

        case "E":
            newPosition = rover.column - 1;
            paraColumn();
            break;

        case "S":
            newPosition = rover.row - 1;
            paraRow();
            break;

        case "W":
            newPosition = rover.column + 1;
            paraColumn();
            break;
    }

    console.log(mensaje, rover);

    if (mensaje == "Rover was moved Backward") {
        rover.travelLog.push(rover.row + "," + rover.column);
    }
}


// ======================COMANDOS PARA MOVER
function movimientos(rover, move) {

    for (var i = 0; i < move.length; i++) {
        switch (move[i]) {
            case "b":
                moveBackward(rover, obstacles);
                break;

            case "f":
                moveForward(rover, obstacles);
                break;

            case "r":
                turnRight(rover);
                break;

            case "l":
                turnLeft(rover);
                break;
            case "0":
                break;
            default: console.log("To move the rover use the keys b,f,r/l,try again! or press 0 to exit.");
        }
    }

}

var obstacles = [
    [' ', 'R', ' ', 'O', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', 'O', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', 'R', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', 'R', ' ', ' ', ' ', ' ', ' '],
    [' ', 'O', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', 'R', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', 'R', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']];

console.log(obstacles);


console.log("movement", travel);

movimientos(rover, travel);
console.log("Recorrido: ", rover.travelLog);