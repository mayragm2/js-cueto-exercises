// Creá un objeto equipo con:
// pais: "Argentina"
// grupo: "C"
// jugadores: un array con "Messi", "Dybala" y "Álvarez"
// Mostrá el equipo serializado en una sola línea con JSON.stringify(equipo). Observá lo apretado que queda.
// Mostrá el equipo serializado con formato usando JSON.stringify(equipo, null, 2). Compará: ahora se lee cómodo, con saltos de línea e indentación.
// Probá cambiar el 2 por 4 y observá la diferencia (más espacios de sangría).

const equipo = {
    pais: "Argentina",
    grupo: "C",
};

const jugadores = ["Messi", "Dybala", "Alvarez"];

console.log(JSON.stringify(equipo));
console.log(JSON.stringify(equipo, undefined, 2));
console.log(JSON.stringify(equipo, undefined, 4));

