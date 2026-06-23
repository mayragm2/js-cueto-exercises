// Activity 4 - Coercion de tipos
console.log(0 == false)         //true
console.log(0 === false)        //false
console.log("" == false)        //true
console.log(null == undefined)  //false - it is actually true
console.log(null === undefined) //false
console.log("5" == 5)           //true
console.log("5" === 5)          //false

// Part 2 - El usuario escribe su nombre en un formulario
let nombreUsuario = " josefino77 "; // espacios en blanco
nombreUsuario = nombreUsuario.trim();


if (nombreUsuario === "") {
  console.log("El nombre no puede estar vacío");
} else {
  console.log("Bienvenido, " + nombreUsuario);
}

// Una función que busca un jugador en una lista
// Si no lo encuentra, devuelve null
const jugador = null;
if (jugador === undefined) {
  console.log("Jugador no encontrado");
} else if (jugador === null){
    console.log("Jugador is null");
}

// El usuario ingresó su edad en un input HTML (siempre llega como string)
const edadTexto = Number("10");
const edadMinima = 16;
if (edadTexto >= edadMinima) {
  console.log("Edad válida");
} else {
  console.log("Muy joven");
}