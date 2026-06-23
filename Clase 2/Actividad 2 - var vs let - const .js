//Activity 2
//Part B
for (let i = 0; i < 3; i++) {
  console.log("Botón " + i + " creado");
}
console.log("i después del bucle:", i); // Error si se borra la definicion de var i, ya que let solo existe en el scope del for, y no afuera.

//Part A
for (var i = 0; i < 3; i++) {
  console.log("Botón " + i + " creado");
}
console.log("i después del bucle:", i); // 3

//Part C
const saludo = "Hola";
const nombre = "Valentina";
let intentos = 0;

intentos = intentos + 1;
intentos = intentos + 1;

console.log(saludo + ", " + nombre + ". Intentos: " + intentos);
