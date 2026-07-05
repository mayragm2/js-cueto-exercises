for (let i = 0; i<=30; i++){
    if (i%3 === 0 && i%5 === 0){
        console.log("Golazo");
    } else if (i%3 === 0){
        console.log("Gol");
    } else if ( i%5 === 0){
        console.log ("Penal");
    }  else {
        console.log(i);
    }

}