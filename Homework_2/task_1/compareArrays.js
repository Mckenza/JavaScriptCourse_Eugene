const a = [1,2,3,4];
const b = [1,2,3,4];
const c = [1,2,3,4,5,6];
const d = [1,2,3,4,5,6];
const e = [3,4,5,7,4];
const f = [1,2,3,5];
const g = [1,2,3,4,'5',6];

function compare(firstArray, secondArray){
    if(firstArray.length === secondArray.length){
        let isEqual = true;
        for(let i = 0; i < firstArray.length; i++){
            if(firstArray[i] !== secondArray[i]){
                isEqual = false;
                console.log('Массивы неравны');
                console.log(`${firstArray} и ${secondArray}`);
                break;
            }
        }
        if(isEqual){
            console.log('Равны массивы:')
            console.log(`${firstArray} и ${secondArray}`);
        }
    } else {
        console.log('Неравны массивы:');
        console.log(`${firstArray} и ${secondArray}`);
    }
}

compare(a,b);               // Равны
compare(a,c);               // Неравны
