// Creá un objeto jugador con nombre: "Messi", pais: "Argentina" y goles: 8.
// Convertilo a texto con JSON.stringify y guardalo en una variable texto.
// Mostrá texto y mostrá typeof texto. Confirmá que es un "string".
// Intentá leer texto.nombre y mostralo. Observá qué da y explicá en un comentario por qué.
// Convertí texto de vuelta a un objeto con JSON.parse, guardalo en objeto.
// Mostrá objeto.nombre y typeof objeto. Confirmá que ahora sí podés leer la propiedad.

const jugador = {nombre:"Messi", pais:"Argentina", goles:8};

const texto = JSON.stringify(jugador);

console.log (texto);
console.log (typeof texto);

console.log (texto.nombre);

objeto = JSON.parse(texto);

console.log (objeto);

console.log (objeto.nombre);
console.log (typeof objeto);