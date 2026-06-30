// Part A
console.log(1 == "1")   //true  este es verdadero porque el "1" es un string, y la igualdad == lo interpreta como numero
console.log(1 === "1")  //false este es falso porque el 1 es un string, y la igualdad === lo interpreta como string
 
console.log(true == 1)  //true  este es verdadero porque el 1 es truthy, y la igualdad == lo interpreta como true
console.log(true === 1) //false este es falso porque el 1 es truthy, y la igualdad === lo interpreta como nùmero
 
console.log(null == undefined)  //true
console.log(null === undefined) //false
 
console.log("" == 0)            //true
console.log("" === 0)           //false
    
console.log(" " == 0)      //true

//Part C
const ingresado = "100";   // viene de un campo de texto

if (Number(ingresado) === 100) {
  console.log("Correcto");
} else {
  console.log("Incorrecto");   // ← hoy entra acá, ¿por qué?
}