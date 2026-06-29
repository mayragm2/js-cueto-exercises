// Activity 5 - Ficha de jugador
const NombreCompleto = "Tim Payne";
const Edad = 32;
const NumeroDeCamiseta = 2;
const Capitan = false;
const Equipo = "Nueva Zelanda";
let Posicion = "Lateral Derecho";
let GolesTorneoActual = 0;
let lesiones = 0;
const UmbralGoleador = 5;

console.log(`${NombreCompleto} es un jugador de ${Edad} años. Juega con la camiseta Nº${2}`);
console.log(`Equipo: ${Equipo} | Posición: ${Posicion}
        Goles en el torneo: ${GolesTorneoActual}`);

if(Capitan === true){
    console.log("Es capitan");
} else {
    console.log ("No es capitan")
}

if (GolesTorneoActual<UmbralGoleador){
    console.log(`Le faltan ${UmbralGoleador-GolesTorneoActual} goles para ser goleador del torneo.`);
} else {
    console.log(`Ya es goleador con ${GolesTorneoActual} goles.`)
}
