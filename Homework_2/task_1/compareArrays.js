function fillObjMap(array){
    const obj = {};
    array.forEach((num)=>{
        if(num in obj){
            obj[num]++;
        } else {
            obj[num] = 1;
        }
    });

    return obj;
}

const a = [4,2,3,1];
const b = [1,2,3,4];
const c = [1,2,3,4,5,6];
const d = [1,2,3,4,5,6];
const e = [3,4,5,7,4];
const f = [1,2,3,5];

function compare(firstArray, secondArray){
    if(firstArray.length === secondArray.length){

        const mapArrayOne = fillObjMap(firstArray);
        const mapArrayTwo = fillObjMap(secondArray);

        for(let key in mapArrayOne){
            if(key in mapArrayTwo){
                if(mapArrayOne[key] !== mapArrayTwo[key]){
                    console.log('Не равны массивы:');
                    console.log(`${firstArray}; ${secondArray}`);
                    return;
                }
            } else {
                console.log('Не равны массивы:');
                console.log(`${firstArray}; ${secondArray}`);
                return;
            }
        }
        console.log('Равные массивы:');
        console.log(`${firstArray}; ${secondArray}`);


    } else {
        console.log('Не равны массивы:');
        console.log(`${firstArray} и ${secondArray}`);
    }
}

compare(a,b);        
compare(a,c);

