
// Rover Object Goes Here
// ======================
var rover = {
  direction: "N",
  row:0,
  column:0, 
  position: [0, 0],
  travelLog: []
};
// ======================

//buscar la manera de hacerlo mas eficiente
var newPosition;

function free(c) {
    if (obstacles[newPosition][c] == " ") {
        console.log("No obstacle " + " Row:" + newPosition + "Column: "+ c);
        return true;
    }
    else {
        console.log("Obstaculo detectado: "+ obstacles+"["+newPosition+"]"+"["+ c +"]" + "Row: "+ newPosition + "Column: ", c);
        return false;

    }
}

function avanzar() {
    if ((newPosition >= 0 || newPosition <= 9) && (free(rover.column))) {
        rover.row = newPosition;
        mensaje = "Rover se mueve hacia delante";
    }
    else { mensaje = "Rover no puede moverse por obstaculo, o porque se sale del mapa"; }

}

function retroceder() {
    if ((newPosition >= 0 || newPosition <= 9) && (free(rover.row))) {
        rover.row = newPosition;
        mensaje = "Rover retrocede";
    }
    else { mensaje = "Rover no puede moverse por obstaculo, o porque se sale del mapa"; }

}
//buscar la manera de hacerlo mas eficiente






//Turn Left
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
    console.log("turnLeft was called!");
}
//Turn Right
function turnRight(rover) {
    switch (rover.direction) {
        case "N": rover.direction = "E"; break;
        case "E": rover.direction = "S"; break;
        case "S": rover.direction = "W"; break;
        case "W": rover.direction = "N"; break;
    }
    console.log("turnRight was called!");
}


//-----------------AVANZAR

function moveForward(rover, obstacles) {
    var mensaje;

    switch (rover.direction) {
        case "N":
            newPosition = rover.row - 1;
            avanzar();
            break;

        case "E":
            newPosition = rover.column + 1;
            avanzar();
            break;

        case "S":
            newPosition = rover.row + 1;
            avanzar();
            break;

        case "W":
            newPosition = rover.column - 1;
            avanzar();
            break;
    }

    console.log(mensaje, rover);

    if (mensaje == "Rover se mueve hacia delante") {
      rover.travelLog.push(rover.row + "," + rover.column);
    }
}

//-----------------RETROCEDER

function moveBackward(rover, obstacles) {
    var mensaje;
    
    switch (rover.direction) {
        case "N":
            newPosition = rover.row + 1;
            retroceder();
            break;

        case "E":
            newPosition = rover.column - 1;
            retroceder();
            break;

        case "S":
            newPosition = rover.row - 1;
            retroceder();
            break;

        case "W":
            newPosition = rover.column + 1;
            retroceder();
            break;
    }

    console.log(mensaje, rover);

    if (mensaje == "Rover retrocede") {
      rover.travelLog.push(rover.row + "," + rover.column);
    }
}


//-----------------COMANDOS

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

            default: console.log("Invalid movement", rover);
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