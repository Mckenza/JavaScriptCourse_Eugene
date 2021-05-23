import { View } from '/homework_11/js/view/thirdView.js'
// Контроллер для 1 юзера
class ControllerSingle {
    constructor() {
        this.table = document.getElementById('main_table');
        this.newUser = document.getElementById('add_new_users');
        this.view = new View();
    }

    eventListener(callback) {
        this.table.onclick = (e) => {
            const idPerson = e.path[1].getAttribute('id');
            callback(idPerson).then((data) => {
                this.view.showInfoSinglePerson(data);
                this.newUser.style.display = 'block';
            });
        }
    }

    checkValid(callback) {
        this.newUser.onclick = () => {
            if (this.view.validForm()) {
                const arrayData = this.view.getArrayElements();
                const newObj = {
                    name: arrayData[0].value,
                    username: arrayData[1].value,
                    email: arrayData[2].value,
                    addressStreet: arrayData[3].value,
                    addressSuite: arrayData[4].value,
                    addressCity: arrayData[5].value,
                    addressZipcode: arrayData[6].value
                };
                callback(newObj).then((data) => {
                    console.log(data);
                })
            }
        }
    }
}

export { ControllerSingle };
