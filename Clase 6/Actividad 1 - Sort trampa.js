const edades = [9, 15, 11, 8, 21, 17, 100]; // edades ficticias para el ejemplo
//console.log(edades.sort()); // esta linea de código va a ordenar los elementos del array como si fueran strings
//console.log(edades.sort((a, b) => a - b)); //Aquí se usa una arrow function que verifica que a-b sea positivo o negativo, evaluando todos los pares de numeros y ordenandolos
console.log(edades.sort((a, b) => b - a)); //Aquí se usa el mismo algoritmo, pero invertido