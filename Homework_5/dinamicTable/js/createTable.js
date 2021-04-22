// Данные
const names = ['Александр', 'София', 'Мария', 'Максим', 'Михаил', 'Артём', 'Анна', 'Даниил', 'Иван', 'Виктория'];
const surnames = ['Иванов', 'Смирнов', 'Кузнецов', 'Попов', 'Васильев', 'Петров', 'Соколов', 'Михайлов', 'Сидоров', 'Романов'];
const phones = '+375291234567';

const dataArray = [];

// Заполение массива объектами
for(let i = 0; i < 10; i++){
    dataArray.push({
        id: i,
        name: names[i],
        surname: surnames[i],
        phone: phones,
    });
}

const currentDate = new Date();

// Добавить текущую дату в каждый объект
dataArray.map((item)=>{
    let month = currentDate.getMonth() + 1;
    let day = currentDate.getDate(); 
    if(month < 10){
        month = '0' + month;
    }
    if(day < 10){
        day = '0' + day;
    }
    item['date'] = `${day}.${month}.${currentDate.getFullYear()}`;
});

function createTable(data){
    const container = document.getElementById('main_table');
    

    data.map(element => {
        const newTr = document.createElement('tr');
        for(let item in element){
            const newTd = document.createElement('td');
            newTd.textContent = element[item];
            newTr.appendChild(newTd);
        };
        console.log(1);
        container.appendChild(newTr);
    });

}

const button = document.getElementById('button_id');
button.onclick = () => {
    createTable(dataArray);
}