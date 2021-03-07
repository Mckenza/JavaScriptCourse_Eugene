const array = [10, 20, 30, 50, 235, 3000];

for(let i = 0; i < array.length; i++){
    let number = array[i]+'';
    if(number[0] === '1' || number[0] === '2' || number[0] === '5'){
        console.log(array[i]);
    }
}