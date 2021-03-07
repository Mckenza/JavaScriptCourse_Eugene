const array = [1, 2, 3, 4, 5];

const sum = array.reduce((sum, current)=>{
    return sum + current;
}, 0);

console.log(sum); //15