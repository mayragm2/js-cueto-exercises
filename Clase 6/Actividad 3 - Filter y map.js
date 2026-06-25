const jugadores = [
  { nombre: "Messi",       goles: 8,  pais: "Argentina"  },
  { nombre: "Mbappé",      goles: 5,  pais: "Francia"    },
  { nombre: "Haaland",     goles: 12, pais: "Noruega"    },
  { nombre: "Benzema",     goles: 0,  pais: "Francia"    },
  { nombre: "Lewandowski", goles: 3,  pais: "Polonia"    },
  { nombre: "Kane",        goles: 2,  pais: "Inglaterra" },
  { nombre: "Neymar",      goles: 1,  pais: "Brasil"     },
  { nombre: "Müller",      goles: 0,  pais: "Alemania"   },
];
// //Parte A
// const jugadores2goles = jugadores.filter (j => j.goles > 2);
// console.log (jugadores2goles.length); //print out the amount of players that have more than 2 goals
// //Parte B
// const jugadoresNombres = jugadores.map (j => j.nombre);
// console.log (jugadoresNombres); 
//Parte C
const goleadores = jugadores.filter (j=>j.goles>2);
const nombresGoleadores = goleadores.map (j=>j.nombre);
console.log(nombresGoleadores);
