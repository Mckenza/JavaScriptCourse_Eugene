
const arrayRandom = [];

// Заполнение массива
for(let i = 0; i < 10; i++){
    arrayRandom.push(parseInt(Math.random() * 10 + 1));
}

// Сумма чисел из массива
let sum = arrayRandom.reduce((acc, current)=>{
    return acc +=current;
},0);

// Квадраты чисел из первого массива (map)
const arrayQuadratic = arrayRandom.map((current)=>{
    return Math.pow(current, 2);
});

// Фильтр по четным числам
const even = arrayQuadratic.filter((num) =>{
    return num % 2 === 0;
});

// Сортировка по убыванию их квадратных корней из массива четных чисел
const sortArray = even.map((value)=>{
    return Math.sqrt(value);
}).sort((a, b)=>{
    return b - a; 
});

// Вывод всей информации:
console.log('Array: ' + arrayRandom);
console.log('Sum: ' + sum);
console.log('Quadratic array: ' + arrayQuadratic);
console.log('Even array: ' + even);
console.log('Sorted array of sqrt values: ' + sortArray);