//Parte A
const dia = 2;

switch (dia) {
    case 1:
        console.log("Lunes");
    break;

    case 2:
        console.log("Martes");
    break;
    
    case 3:
        console.log("Miercoles");
    break;
    
    case 4:
        console.log("Jueves");
    break;
    
    case 5:
        console.log("Viernes");
    break;
    
    case 6:
        console.log("Sabado");
    break;
    
    case 7:
        console.log("Domingo");
    break;
    
    default:
        console.log("Día invalido");
    break;
    
}

//Parte B
switch (dia) {
    case 1: case 2: case 3: case 4: case 5:
        console.log("Hay entrenamiento");
    break;
    case 6: case 7:
        console.log("No hay entrenamiento");
    break;

}

//Parte C


switch (dia) {
    case 2:
        console.log("Martes");
    break; //No estaba puesto el break y habia falltrough al resto de los cases.
    case 3:
        console.log("Miércoles");
    break;
    default:
    console.log("Otro día");
    break;
}