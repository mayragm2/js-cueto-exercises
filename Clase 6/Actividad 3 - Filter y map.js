// const jugadores = [
//   { nombre: "Messi",       goles: 8,  pais: "Argentina"  },
//   { nombre: "Mbappé",      goles: 5,  pais: "Francia"    },
//   { nombre: "Haaland",     goles: 12, pais: "Noruega"    },
//   { nombre: "Benzema",     goles: 0,  pais: "Francia"    },
//   { nombre: "Lewandowski", goles: 3,  pais: "Polonia"    },
//   { nombre: "Kane",        goles: 2,  pais: "Inglaterra" },
//   { nombre: "Neymar",      goles: 1,  pais: "Brasil"     },
//   { nombre: "Müller",      goles: 0,  pais: "Alemania"   },
// ];
//Parte A
const jugadores2golesA = jugadores.filter (j => j.goles > 2);
console.log (`Cantidad de jugadores con mas de 2 goles: ${jugadores2golesA.length}`); //print out the amount of players that have more than 2 goals
//Parte B
const jugadoresNombres = jugadores.map (j => j.nombre);
console.log (`Los jugadores son: ${jugadoresNombres}`); 
//Parte C
const goleadoresA = jugadores.filter (j=>j.goles>2);
const nombresGoleadores = goleadoresA.map (j=>j.nombre);
console.log (nombresGoleadores);
// Parte D
const primerJugadorFrancia = jugadores.find (j => j.pais === "Francia"); //If filter method were to be used in this case, it would return all france players
console.log (primerJugadorFrancia);
