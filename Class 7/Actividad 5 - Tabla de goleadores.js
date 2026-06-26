const jugadores = [
  { nombre: "Messi",   goles: 8,  partidos: 7 },
  { nombre: "Mbappé",  goles: 5,  partidos: 6 },
  { nombre: "Haaland", goles: 12, partidos: 6 },
  { nombre: "Kane",    goles: 0,  partidos: 5 },
  { nombre: "Neymar",  goles: 3,  partidos: 7 },
];




const ranking = jugadores.map(jugador => ({
    ...jugador, 
    promedio: Number((jugador.goles / jugador.partidos).toFixed(2))
}));

console.log (ranking);