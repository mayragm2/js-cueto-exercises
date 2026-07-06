function saludar(nombre) {
  console.log("Hola, " + nombre + "!");
}

//saludar("Ana" es incorrecto porque no estan cerradas las comillas ni el parentesis.
//El error en consola es "Syntax Error"
saludar("Ana");
saludar("Luis");



//El error en este caso es ReferenceError: cantidadAlumnos is not defined
const edades = [15, 17, 14, 18, 16];
//Se arregla definiendo cantidadAlumnos
const cantidadAlumnos = edades.length;
let suma = 0;
for (const edad of edades) {
  suma += edad;
}

console.log("Promedio:", suma / cantidadAlumnos);


//El error en este caso es TypeError: Cannot read properties of undefined (reading 'toUpperCase')
const producto = {
  nombre: "Remera",
  precio: 1500,
  //el error es causado porque "descripcion" no esta definido dentro del objeto "producto"
  descripcion: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo"
};

const nombreEnMayusculas = producto.nombre.toUpperCase();
const descripcion = producto.descripcion.toUpperCase();

console.log(nombreEnMayusculas);
console.log(descripcion);