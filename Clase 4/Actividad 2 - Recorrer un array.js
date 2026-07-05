//Parte A
const selecciones = ["Argentina", "Francia", "Brasil", "Alemania", "España"];

for (let i = 0; i<selecciones.length; i++){
    console.log (`${i+1}. ${selecciones[i]}`);
}

//Parte B
let i = 1;
for (equipo of selecciones){
    console.log (`${i}. ${equipo}`);
    i++;

}

//Parte C
//En este caso conviene usar un for, ya que cuenta con la variable i que nos permite numerar las selecciones
