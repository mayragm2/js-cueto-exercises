function calcularPromedio(notas) {
  const suma = sumarNotas(notas);
  return suma / notas.length; //Al reemplazar "notas" por "nota" ocurre un error de referencia, ya que "nota" no está definida.

 }

function sumarNotas(notas) {
  return notas.reduce((acc, n) => acc + n, 0); // typo: recude should be reduce, this causes "typeError" since recude is not a type of method defined for an array
}

const resultado = calcularPromedio([8, 7, 9, 6]);
console.log(resultado);

// TypeError: notas.recude is not a function
//     at sumarNotas (/Users/mcueto/Documents/JS/Clase 14/A3 - Stack trace: segui el rastro.js:7:16)
//     at calcularPromedio (/Users/mcueto/Documents/JS/Clase 14/A3 - Stack trace: segui el rastro.js:2:16)
//     at Object.<anonymous> (/Users/mcueto/Documents/JS/Clase 14/A3 - Stack trace: segui el rastro.js:10:1