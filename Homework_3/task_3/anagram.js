
function isAnagram(firstStr, secondStr){
    if(firstStr.length !== secondStr.length){
        return objErrors.isSame;
    }

    const objFirstStr = sawWord(firstStr.toLowerCase());
    const objSecondStr = sawWord(secondStr.toLowerCase());

    for(let valueObj in objFirstStr){
        if(valueObj in objSecondStr){
            if(objFirstStr[valueObj] !== objSecondStr[valueObj]){
                return objErrors.notAnagram;
            }
        } else {
            return objErrors.notAnagram;
        }
    }
    return objErrors.anagram;


    function sawWord(str){
        const obj = {};
        for(let char of str){
            if(char in obj){
                obj[char]++;
            } else {
                obj[char] = 1;
            }
        }
        return obj;
    }
    
}


const objErrors = {
    anagram: 'is anagram',
    notAnagram: 'not anagram',
    isSame: 'not the same length'
}

console.log(isAnagram('Замок', 'закоам'));