// ES5
function User(firstname, surname){
    this.firstname = firstname;
    this.surname = surname;
}

User.prototype.getFullName = function(){
    console.log(`Name: ${this.firstname}; Surname: ${this.surname}`)
}

function Student(firstname, surname, year){
    User.call(this, firstname, surname);
    this.year = year;

    this.getCourse = function(currentYear){
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

Student.prototype = Object.create(User.prototype);
Student.prototype.constructor = Student;

const student1 = new Student('Eugene', 'Byuak', 2014);

student1.getFullName();
student1.getCourse(2016);

const student2 = new Student('neEugene', 'neByuak', 2015);

student2.getFullName();
student2.getCourse(2016);
