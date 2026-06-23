//Activity 3 - Template Literals
const nombre = "Lautaro";
const edad   = 17;
const ciudad = "Rosario";
const equipo = "Newells";

// 1. Presentación
console.log(`Hola, me llamo ${nombre} y tengo ${edad} años.`);

// 2. Ciudad
console.log(`Soy de &{ciudad}.`);

// 3. Expresión dentro del string
console.log(`El doble de mi edad es  ${edad * 2}.`);

// 4. Múltiples variables en una oración
console.log(`Soy &{nombre} de ${ciudad} y sigo a ${equipo}.`);

// 5. String de varias líneas
console.log(`Nombre: ${nombre}
        Edad: ${edad}
        Ciudad: ${ciudad}`);
