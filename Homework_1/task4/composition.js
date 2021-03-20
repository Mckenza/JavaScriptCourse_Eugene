const array = [2,3,4,5];

let composition = 1;

for(let i = 0; i<array.length; i++){
    composition *= array[i];
}

console.log(composition); //120