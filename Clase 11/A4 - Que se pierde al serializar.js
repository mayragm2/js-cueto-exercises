// Creá un objeto partido con estas propiedades:
// local: "Argentina"
// visitante: "Brasil"
// jugado: false
// golesLocal: undefined
// relatar: () => "¡Gooool!" (una función)
// Antes de correrlo, escribí en un comentario qué propiedades creés que van a sobrevivir a JSON.stringify.
// Mostrá JSON.stringify(partido) y compará con tu predicción.
// En un comentario, explicá por qué golesLocal y relatar no aparecen en el resultado.
// Extra: hacé el viaje de vuelta con JSON.parse y verificá que el objeto reconstruido tiene solo las propiedades que sobrevivieron.

const partido = {
    local: "Argentina",         //✅
    visitante: "Brasil",        //✅
    jugado: false,              //✅
    golesLocal: undefined,      //✅
    relatar: () => "¡Gooool!"   //❌
}

const string = JSON.stringify(partido);

console.log (string);


//relatar no aparece en el resultado porque 
//esta resuelta antes de ser convertida a string por JSON,
//golesLocal no es de tipo undefined, que JSON no soporta

const object = JSON.parse (string);
console.log (object);