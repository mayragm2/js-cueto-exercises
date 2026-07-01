const jugadores = [
  { nombre: "Messi",    goles: 8,  pais: "Argentina" },
  { nombre: "Mbappé",   goles: 5,  pais: "Francia"   },
  { nombre: "Haaland",  goles: 12, pais: "Noruega"   },
  { nombre: "Benzema",  goles: 0,  pais: "Francia"   },
  { nombre: "Lewandowski", goles: 3, pais: "Polonia" },
  { nombre: "Kane",     goles: 2,  pais: "Inglaterra"},
  { nombre: "Neymar",   goles: 1,  pais: "Brasil"    },
  { nombre: "Müller",   goles: 0,  pais: "Alemania"  },
];

const jugadores2goles = jugadores.filter(g => g.goles > 2); //filtra los jugadores con goles>2 del array jugadores
// console.log(jugadores2goles); //imprime en la consola

// const nombres = jugadores.map(j => j.nombre);
// console.log(nombres);

const nombres2goles = jugadores2goles.map(j => j.nombre);
console.log(nombres2goles);

const jugadorFrancia = jugadores.find (F => F.pais === "Francia");
console.log(jugadorFrancia);