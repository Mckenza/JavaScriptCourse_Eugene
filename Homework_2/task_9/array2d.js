const array = [
    ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота','Воскресенье'],
    ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday']
];

console.log(array[0][0]);           // Понедельник
console.log(array[1][2]);           // Wednesday


const array2 = [
    {en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday']},
    {ru: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота','Воскресенье']}
]

console.log(array2[0].en[2]);       // Wednesday
console.log(array2[1].ru[0]);       // Понедельник