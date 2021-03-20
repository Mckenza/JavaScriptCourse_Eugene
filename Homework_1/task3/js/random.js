function random(){
    const randomNum = parseInt(Math.random() * 100 + 1);
    return randomNum;
}

/*
for(let i = 0; i < 100; i++){
    console.log(random());
}
*/

function notEqual(){
    const buffArray = [];
    const firstRandomNum = random();
    buffArray.push(firstRandomNum);

    return function(){
        let fromRandom = random();
        for(let i = 0; i < buffArray.length; i++){
            if(fromRandom === buffArray[i]){
                console.log(`nope, ${fromRandom} - here`);
                return buffArray;
            }
        }
        buffArray.push(fromRandom);
        return buffArray;
    }
}

const func = notEqual();

let arrayFromFunc;
do{
    arrayFromFunc = func();

} while(arrayFromFunc.length != 100);

console.log(arrayFromFunc);