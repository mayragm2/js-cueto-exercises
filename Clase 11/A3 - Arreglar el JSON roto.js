// Antes de tocar nada, identificá en un comentario qué regla de JSON está rompiendo.
// Escribí la versión corregida como un string JSON válido.
// Verificá que JSON.parse(corregido) ahora funcione y mostrá el nombre del objeto resultante.

const roto1 = "{'nombre': 'Messi', 'goles': 8}"; //Los keys y los strings en un JSON deben utilizar comillas dobles
const roto2 = '{nombre: "Messi", goles: 8}';    //Los keys deben usar comillas dobles
const roto3 = '{"nombre": "Messi", "goles": 8,}';//La coma solo se debe usar antes de otro key, no al final del object

const fixed1 = `{"nombre": "Messi", "goles": 8}`; //Los keys y los strings en un JSON deben utilizar comillas dobles
const fixed2 = `{"nombre": "Messi", "goles": 8}`;    //Los keys deben usar comillas dobles
const fixed3 = `{"nombre": "Messi", "goles": 8}`;//La coma solo se debe usar antes de otro key, no al final del object

const obj1 = JSON.parse(fixed1);
const obj2 = JSON.parse(fixed2);
const obj3 = JSON.parse(fixed3);

console.log (obj1);
console.log (obj2);
console.log (obj3);