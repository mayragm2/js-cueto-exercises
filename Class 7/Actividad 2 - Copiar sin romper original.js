// //Part A
// const original = { nombre: "Mbappé", goles: 5 };
// const copia = original;
// copia.goles = 99;
// console.log(original.goles);
// console.log(copia.goles);

// //Part B
// console.log(original === copia);

//Part C
const original = { nombre: "Mbappé", goles: 5 };
const copia = {...original};
copia.goles = 99;
console.log(original.goles);
console.log(copia.goles);
console.log(copia === original);