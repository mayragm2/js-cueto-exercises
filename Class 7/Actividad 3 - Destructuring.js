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

//Part C
jugador.camiseta;   //Add camiseta 
const {camiseta = 9} = jugador;
console.log (camiseta);

//Part D
// const {[0]:oro, [1]:plata, [2]:bronce} = podio;
const [oro, plata, bronce] = podio;
console.log(oro);
console.log(plata);
console.log(bronce);