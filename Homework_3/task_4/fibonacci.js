function fibonacci(n){
    if(typeof(n) !== 'number' || n < 1 || n % 1 !== 0){
        return 'Error';
    }
    
    let f0 = 0;
    let f1 = 1;
    let value = 1;

    // Массив только для удобного вывода информации!
    const array = [];           //
    array.push(f1);             //

    function returnValue(){
        value = f0 + f1;    
        array.push(value);    
        f0 = f1;                
        f1 = value;             
    }

   for(let i = 1; i < n; i++){
       returnValue();
   }
    
    return array;               //
}

console.log(fibonacci(9));