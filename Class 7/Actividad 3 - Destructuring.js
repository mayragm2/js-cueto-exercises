const jugador = {
  nombre: "Haaland",
  pais: "Noruega",
  goles: 12,
};

const podio = ["Argentina", "Francia", "Croacia"];

//Part A
const {nombre, goles} = jugador;
console.log (nombre, goles);

//Part B
const {nombre: nombreJugador} = jugador;
console.log(nombreJugador);