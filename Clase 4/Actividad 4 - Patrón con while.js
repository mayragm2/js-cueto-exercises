const numeroSecreto = 7;
const intentos = [3, 9, 1, 7, 5]; // el jugador "intenta" estos números en orden
let intento = 0;
let adivinado = false;

while (!adivinado && intento < intentos.length){

    if (intentos[intento]<numeroSecreto){
        intento ++;
        console.log(`Intento Nº${intento}: El numero es demasiado bajo`);
    }

    if (intentos[intento]>numeroSecreto){
        intento ++;
        console.log(`Intento Nº${intento}: El numero es demasiado alto`);
    } else if (intentos[intento]=== numeroSecreto){
        adivinado = true;
        intento ++;
        console.log(`Adivinaste en ${intento} intentos!`);
    }
}

