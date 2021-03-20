let str = 'какая-то строка';
let str1 = 'какая-то строка';

// способ первый
str = str.replace(str[0],str[0].toUpperCase());
console.log(str);

// способ второй
str1 = str1[0].toUpperCase() + str1.slice(1,str1.length);
console.log(str1);
