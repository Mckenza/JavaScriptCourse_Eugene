class User{
    constructor(name, surname){
        this.name = name;
        this.surname = surname;
    }

    getFullName(){
        console.log(`Name: ${this.name}; Surname: ${this.surname}`);
    }
}

class Student extends User{
    constructor(name, surname, year){
        super(name, surname);
        this.year = year;
    }

    /*
    getFullName(){
        super.getFullName();
    }*/

    getCourse(currentYear){
        const course = currentYear - this.year; 
        if(course > 5){
            console.log('Уже не студент');
        } else if(course <= 5 && course >= 1){
            console.log(`Курс: ${currentYear - this.year}`);
        } else {
            console.log('Error Date');
        }
    }

}

const firstStudent = new Student('Eugene', 'Byuak', 2014);
firstStudent.getFullName();
firstStudent.getCourse(2016);

const secondStudent = new Student('neEugene', 'neByuak', 2015);
secondStudent.getFullName();
secondStudent.getCourse(2016);