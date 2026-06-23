// // Clase 1
// const dias = 311;
// console.log("Hola!");
// console.log("faltan", dias, "para mi cumpleaños");
// console.log("mi cumple fue hace", 365-dias, "días");

// console.log("Predicción: 15")
// console.log(5 * 3);
// console.log("Predicción: 555")
// console.log("5" * 3); //en este caso se interpreta el 5 como número y no como string, y si fuera un string el resultado de la operacion serìa NaN
// console.log("Predicción:53")
// console.log("5" + 3);
// console.log("Predicción: 1")
// console.log(7 % 2);
// console.log("Predicción: Golazo")
// console.log("Gol" + "azo");
// console.log("Predicción: NaN") 
// console.log("3" - 1);  //en este caso se interpreta el 3 como número y no como string

// console.table([
//    {equipo: "Francia", mundiales_ganados: 2, instancia_maxima_mundial_2022: "Final"},
//    {equipo: "Brasil", mundiales_ganados: 5, instancia_maxima_mundial_2022: "Cuartos de final"},
//    {equipo: "Argentina", mundiales_ganados: 3, instancia_maxima_mundial_2022: "Final"},
//    {equipo: "Inglaterra", mundiales_ganados: 1, instancia_maxima_mundial_2022: "Cuartos de final"}
// ]);

// //Clase 2
// //Parte A — Predecir antes de ejecutar

// console.log("Predicción: String");
// console.log(typeof "Rosario");
// console.log("Predicción: Number");
// console.log(typeof 42);
// console.log("Predicción: Number");
// console.log(typeof 3.14);
// console.log("Predicción: bool");
// console.log(typeof true);
// console.log("Predicción:bool");
// console.log(typeof false);
// console.log("Predicción:undefined");
// console.log(typeof undefined);
// console.log("Predicción:object");
// console.log(typeof null);

// //Parte B — Declarar y verificar
// const ciudad    = "Mendoza";
// const habitantes = 115000;
// const esCap     = false;
// const apodo     = null;
// let fundacion;           // sin asignar

// console.log(typeof ciudad);
// console.log(typeof habitantes);
// console.log(typeof esCap);
// console.log(typeof apodo);
// console.log(typeof fundacion);
// //Parte C
// const nada = null;
// console.log(typeof nada); // Object, porq es null

// //Activity 2
// //Part B
// for (let i = 0; i < 3; i++) {
//   console.log("Botón " + i + " creado");
// }
// console.log("i después del bucle:", i); // Error si se borra la definicion de var i, ya que let solo existe en el scope del for, y no afuera.

// //Part A
// for (var i = 0; i < 3; i++) {
//   console.log("Botón " + i + " creado");
// }
// console.log("i después del bucle:", i); // 3

// //Part C
// const saludo = "Hola";
// const nombre = "Valentina";
// let intentos = 0;

// intentos = intentos + 1;
// intentos = intentos + 1;

// console.log(saludo + ", " + nombre + ". Intentos: " + intentos);

// //Activity 3 - Template Literals
// const nombre = "Lautaro";
// const edad   = 17;
// const ciudad = "Rosario";
// const equipo = "Newells";

// // 1. Presentación
// console.log(`Hola, me llamo ${nombre} y tengo ${edad} años.`);

// // 2. Ciudad
// console.log(`Soy de &{ciudad}.`);

// // 3. Expresión dentro del string
// console.log(`El doble de mi edad es  ${edad * 2}.`);

// // 4. Múltiples variables en una oración
// console.log(`Soy &{nombre} de ${ciudad} y sigo a ${equipo}.`);

// // 5. String de varias líneas
// console.log(`Nombre: ${nombre}
//         Edad: ${edad}
//         Ciudad: ${ciudad}`);

// Activity 4 - Coercion de tipos
console.log(0 == false)         //true
console.log(0 === false)        //false
console.log("" == false)        //true
console.log(null == undefined)  //false - it is actually true
console.log(null === undefined) //false
console.log("5" == 5)           //true
console.log("5" === 5)          //false