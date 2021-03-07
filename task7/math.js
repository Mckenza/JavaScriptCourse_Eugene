const array = [4, 2, 5, 19, 13, 0, 10];

let result = 0;

for(let i = 0; i < array.length; i++){
    result += Math.pow(array[i],3);
}

result = Math.sqrt(result);

console.log(result); // 101.25709....

























/*
const result = Math.sqrt(array.reduce((sumQ, current)=>{
    return sumQ + Math.pow(current,2);
},0));

console.log(result);
*/
