const firstArray = [55, 77, 66];
const secondArray = [55, 11, 15, 77, 66, 99, 100, 110];


// цикл в цикле
function search(firstArray, secondArray){
    const arrayUnique = [];
    let isUnique = true;
    for(let i = 0; i < secondArray.length; i++){
        let value = secondArray[i];
        for(let j = 0; j < firstArray.length; j++){
            if(value === firstArray[j]){
                isUnique = false;
                break;
            }
            isUnique = true;
        }
        if(isUnique){
            arrayUnique.push(secondArray[i]);
        }
    }
    console.log(`Массив уникальных значений: ${arrayUnique}`);
}
search(firstArray, secondArray);

console.log('-----------------------------');

// Способ 2: map
function searchMap(firstArray, secondArray){
    const map = {};
    for(let i = 0; i < secondArray.length; i++){
        map[secondArray[i]] = 'true';
    }

    firstArray.forEach((value)=>{
        if(value in map){
            map[value] = 'false';
        }
    });

    (function(){
        for(let prop in map){
            if(map[prop] === 'true'){
                console.log(prop);
            }
        }
    }());
}

searchMap(firstArray, secondArray);
