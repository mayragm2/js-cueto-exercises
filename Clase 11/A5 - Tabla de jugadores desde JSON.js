const datosJSON = `[
  { "equipo": "Argentina", "ganados": 2, "empatados": 1, "perdidos": 0 },
  { "equipo": "México",    "ganados": 1, "empatados": 1, "perdidos": 1 },
  { "equipo": "Polonia",   "ganados": 0, "empatados": 2, "perdidos": 1 },
  { "equipo": "Arabia",    "ganados": 1, "empatados": 0, "perdidos": 2 }
]`;

const selecciones = JSON.parse(datosJSON);

const tabla = selecciones.map ((a) => ({
    equipo: a.equipo,
    puntos: a.ganados * 3 + a.empatados,
}));

const ordenada = [...tabla].sort((a, b) => b.puntos-a.puntos);

ordenada.forEach((e, i) => {
    console.log (`${i+1}. ${e.equipo} - ${e.puntos} puntos.`)
});

const tablaString = JSON.stringify(tabla, null, 2);