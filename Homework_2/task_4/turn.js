let str = '123456';

str = str.split('');        // превращаем строку в массив (разбиваем);
str.reverse();              // меняем порядок элементов массива;    
str = str.join('');         // обратно превращаем массив в строку без разделителей
console.log(str);