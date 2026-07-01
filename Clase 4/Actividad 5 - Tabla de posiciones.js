const equipos = [
  { nombre: "Argentina", puntos: 9 },
  { nombre: "Polonia",   puntos: 4 },
  { nombre: "México",    puntos: 4 },
  { nombre: "Arabia",    puntos: 1 },
]; 

let maxPuntos = 0;
let lider;
let clasificados = 0;

for (let i = 0; i< equipos.length; i++){
    if (equipos[i].puntos > 1){
            console.log(`${i+1}. ${equipos[i].nombre} - ${equipos[i].puntos} puntos`);
    } else {
            console.log(`${i+1}. ${equipos[i].nombre} - ${equipos[i].puntos} punto`);
    }

    if (maxPuntos<equipos[i].puntos){
        lider = equipos[i];
        maxPuntos = equipos[i].puntos;
    }
    if (equipos[i].puntos > 3){
        clasificados ++;
    }
}
console.log (`El lider es ${lider.nombre} con ${lider.puntos} puntos. Clasificaron ${clasificados} equipos.`);
