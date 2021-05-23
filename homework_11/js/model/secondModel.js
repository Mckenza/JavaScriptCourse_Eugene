// Model таблицы с данными о юзерах

class Model{
    constructor(){}
    
    async getDataFromServer(){
        const data = await fetch('https://jsonplaceholder.typicode.com/todos/1/users');
        const json = await data.json();
        return json;
    }
}

export {Model};

