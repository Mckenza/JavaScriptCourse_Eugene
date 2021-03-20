const array = [2,3,4,5];

const result = array.reduce((comp, current)=>{
    return comp * current;
}, 1);

console.log(result); //120