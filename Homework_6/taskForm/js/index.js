const firstName = document.getElementById('first_name');
const lastName = document.getElementById('last_name');
const dateBirth = document.getElementById('date_of_birth');
const age = document.getElementById('age');
const numberPhone = document.getElementById('number_phone');
const email = document.getElementById('email');
const educationSelect = document.getElementById('education_select');
const holydayValue = document.getElementById('holyday_value');

const buttonSubmit = document.getElementById('button_submit');

const state = {
    firstName: false,
    lastName: false,
    dateBirth: false,
    numberPhone: false,
    education: false,
    holyday: false,
}

const fullInformation = {};

function setMessage(message){ 
    return `<div class="notification" id="notification_id">
    <div class="figure"></div>
    <span>${message}</span>
</div>`;
}

function removeMessage(quatyElement, element, message){
    setTimeout(()=>{
        document.querySelector(quatyElement).removeChild(document.getElementById('notification_id'));
    },1000);
    element.insertAdjacentHTML('afterend', setMessage(message));
}

// Проверка Имени
firstName.onkeyup = () =>{
    const array = Array.from(firstName.value);
    if(firstName.value.length >= 20){
        removeMessage('.wrap_firstname.style2', firstName, 'больше 20 символов нельзя');
    }
    for(let value of array){
        if(!isNaN(value)){
            firstName.style.borderBottom = '3px red solid';
            removeMessage('.wrap_firstname.style2', firstName, 'Недопустимый символ');
            state.firstName = false;
            break;
        } else {
            firstName.style.borderBottom = '3px black solid';
            state.firstName = true;
        }
    }
}

// Проверка фамилии
lastName.onkeyup = () =>{
    const array = Array.from(lastName.value);
    if(lastName.value.length >= 20){
        removeMessage('.wrap_lastname.style2', lastName, 'больше 20 символов нельзя');
    }
    for(let value of array){
        if(!isNaN(value)){
            removeMessage('.wrap_lastname.style2', lastName, 'Недопустимый символ');
            lastName.style.borderBottom = '3px red solid';
            state.lastName = false;
            break;
        } else {
            lastName.style.borderBottom = '3px black solid';
            state.lastName = true;
        }
    }
}

// Проверка даты
dateBirth.onchange = () =>{
    if(dateBirth.value !== ''){
        const dateNow = Date.now();
        const dateInput = Date.parse(dateBirth.value);

        const current = new Date(dateNow).getFullYear();
        const inputDate_ = new Date(dateInput).getFullYear();
        if(dateNow < dateInput){
            removeMessage('.wrap_date_of_birth.style2', dateBirth, 'Неверная дата');
            state.dateBirth = false;
            return;
        }
        age.textContent = `Возраст: ${current - inputDate_} годик(ов)`;
        fullInformation.age = current - inputDate_;
        state.dateBirth = true;
    } else {
        age.textContent = ``;
        state.dateBirth = false;
    }
}

// Проверка номера телефона
numberPhone.onkeyup = () =>{
    const array = Array.from(numberPhone.value);
    if(numberPhone.value.length >= 20){
        removeMessage('.wrap_number_phone.style2', numberPhone, 'больше 20 символов нельзя');
    }
    for(let value of array){
        if(isNaN(value)){
            removeMessage('.wrap_number_phone.style2', numberPhone, 'только цифры');
            numberPhone.style.borderBottom = '3px red solid';
            state.numberPhone = false;
            break;
        } else {
            numberPhone.style.borderBottom = '3px black solid';
            state.numberPhone = true;
        }
    }
}

// Проверка Email
email.onkeyup = () =>{
    if(email.value.length >= 30){
        removeMessage('.wrap_email.style2', email, 'больше 30 символов нельзя');
    }
}

// Проверка занчения отпуска
holydayValue.onkeyup = () =>{
    if(holydayValue.value > 31 || holydayValue.value < 0){
        removeMessage('.wrap_holyday.style2', holydayValue, 'Значение от 1 до 31');
        holydayValue.style.borderBottom = '3px red solid';
        state.holyday = false;
    } else {
        holydayValue.style.borderBottom = '3px black solid';
        state.holyday = true;
    }
}

function validAll() {
    // Валидность Имени 
    if (firstName.value === '') {
        state.firstName = false;
    } else if(state.firstName){
        fullInformation.firstName = firstName.value;
    };

    // Валидность фамилии
    if (lastName.value === '') {
        state.lastName = false;
    } else if(state.lastName) {
        fullInformation.lastName = lastName.value;
    }

    // Валидность Даты
    if (dateBirth.value.length === 0) {
        state.dateBirth = false;
    } else if(state.dateBirth) {
        
    }

    // Валидность номера телефона
    if (numberPhone.value.length === 0) {
        state.numberPhone = false;
    } else if(state.numberPhone) {
        fullInformation.numberPhone = numberPhone.value;
    }

    // Валидность на выбор типа образования
    if (educationSelect.value === 'Образование') {
        state.education = false;
    } else {
        state.education = true;
        fullInformation.education = educationSelect.value;
    }

     if(email.value.length !== 0){
         fullInformation.email = email.value;
     } else {
         delete fullInformation.email;
     }

    // Валидность кол-ва отпуска
    if (holydayValue.value.length === 0) {
        state.holyday = false;
    } else if(state.holyday) {
        fullInformation.holyday = holydayValue.value;
    }

    validColor();
}

function validColor() {
    for (let valueObj in state) {
        if (state[valueObj] === false) {
            switch (valueObj.toString()) {
                case 'firstName':
                    setStyle(firstName);
                    break;
                case 'lastName':
                    setStyle(lastName);
                    break;
                case 'dateBirth':
                    setStyle(dateBirth);
                    break;
                case 'numberPhone':
                    setStyle(numberPhone);
                    break;
                case 'education':
                    setStyle(educationSelect);
                    break;
                case 'holyday':
                    setStyle(holydayValue);
                    break;
            }
        }
    }
}

function setStyle(element) {
    setTimeout(() => {
        element.setAttribute('style', 'border-bottom: 3px black solid');
    }, 2000);
    element.setAttribute('style', 'border-bottom: 3px red solid');
}

buttonSubmit.onclick = (e) => {
    validAll();
    for (let value in state) {
        if (state[value] === false) {
            e.preventDefault();
            return;
        }
    }
    console.log(fullInformation);
    e.preventDefault();
}