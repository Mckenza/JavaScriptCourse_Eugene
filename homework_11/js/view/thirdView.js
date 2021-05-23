// View о 1 юзере при клике на таблицу с 10

class View {
    constructor() {
        this.nameForm = document.getElementById('name_form');
        this.usernameForm = document.getElementById('username_form');
        this.email = document.getElementById('email');
        this.addressStreet = document.getElementById('address_street');
        this.addressSuite = document.getElementById('address_suite');
        this.addressCity = document.getElementById('address_city');
        this.addressZipcode = document.getElementById('address_zipcode');

        this.allInfoData = document.getElementById('all_info_data');
        this.arrayElements = [this.nameForm, this.usernameForm, this.email, this.addressStreet, this.addressSuite, this.addressCity, this.addressZipcode];
    }

    showInfoSinglePerson(data) {
        this.allInfoData.style.display = 'block';
        this.nameForm.value = data['name'];
        this.usernameForm.value = data['username'];
        this.email.value = data['email'];
        this.addressStreet.value = data['address']['street'];
        this.addressSuite.value = data['address']['suite'];
        this.addressCity.value = data['address']['city'];
        this.addressZipcode.value = data['address']['zipcode'];
    }

    getArrayElements() {
        return this.arrayElements;
    }

    validForm() {
        let isValid = true;
        this.arrayElements.map((item) => {
            if (item.value === '') {
                setTimeout(() => {
                    item.style.border = '2px black solid';
                }, 2000);
                item.style.border = '2px red solid';
                isValid = false;
            }
        });
        return isValid;
    }
}

export { View };