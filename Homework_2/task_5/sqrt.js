function mySqrt(num){
    const obj = {};
    let numSqrt = Math.sqrt(num);

    obj['ceil'] = Math.ceil(numSqrt);
    obj['floor'] = Math.floor(numSqrt);

    console.log(obj);

}

mySqrt(587);        // { ceil: 25, floor: 24 }
