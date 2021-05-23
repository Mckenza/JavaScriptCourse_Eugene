import {View} from '/homework_11/js/view/secondView.js';
// Контроллер для таблицы с 10 юзерами
class Controller{
    constructor(){
        this.buttonGetData = document.getElementById('get_data');
        this.view = new View;
    }

    listenEvent(callback){
        this.buttonGetData.onclick = () =>{
            callback().then((data)=>{
                this.view.showInfoUsers(data);
            })
        };
    }
}

export {Controller};