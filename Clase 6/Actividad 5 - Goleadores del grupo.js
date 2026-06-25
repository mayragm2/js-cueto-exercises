const grupo = [
  { nombre: "Messi",       goles: 8,  asistencias: 3, pais: "Argentina" },
  { nombre: "Mbappé",      goles: 5,  asistencias: 2, pais: "Francia"   },
  { nombre: "Haaland",     goles: 12, asistencias: 1, pais: "Noruega"   },
  { nombre: "Lewandowski", goles: 3,  asistencias: 4, pais: "Polonia"   },
  { nombre: "Kane",        goles: 2,  asistencias: 5, pais: "Inglaterra"},
  { nombre: "Neymar",      goles: 1,  asistencias: 2, pais: "Brasil"    },
];

//Parte A
const goleadores = grupo
.filter (j => j.goles >= 3)
//Parte C
.sort((a,b) => b.goles-a.goles) ;

//Parte B
const stringsGoleadores = goleadores.map (sG => `${sG.nombre} - ${sG.goles} goles.`);


//Parte D
const topGoleadores = stringsGoleadores
.slice(0, 3)
.forEach(j => 
    {console.log (`${j}`)}
);

