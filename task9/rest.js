function isRest(a,b){
    if((a % b) === 0){
        console.log('Делится');
    } else if ((a % b) !== 0){
        console.log(`Делится с остатком, отсаток: ${(a % b)}`);
    }
}

isRest(10,5);  // Делится

isRest(10,3)   // Делится с остатком, отсаток: 1