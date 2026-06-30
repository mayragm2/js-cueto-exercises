const goles = 0;

if (goles>=20){
    console.log("Goleador");
} else if (goles<20 && goles>=10){
    console.log ("Habitual");
} else if (goles<10 && goles>=1){
    console.log ("Ocasional");
} else {
    console.log ("No convirtió");
}