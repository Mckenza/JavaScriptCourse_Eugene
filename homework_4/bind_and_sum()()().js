function testBind(value){
    console.log(this.a, value);
    return this.a + value;
}

function bind(context, fn){
    return function(){
        return fn.apply(context, arguments);
    }
}

const obj = {
    a: 10,
}

const obj2 = {
    a: 15,
}

bind(obj, testBind)(5);        // 10 5
bind(obj2, testBind)(14);      // 15 14

//////////////////////////////////////////////////////

function sum(number){
    let value = number;
    const innerSumFunc = function(num){
        value = value + num;
        return innerSumFunc;
    }

    innerSumFunc.valueOf = function(){
        return value;
    }

    return innerSumFunc;
}

console.log(sum(1)(2)(3)(4)(5)(6).valueOf());      // 21
