
function giveFunctionCounter(){
    return function counter(){
        let currentNumber = 0;
        return function(){
            return ++currentNumber;
        }
    }
}

const firstButton = document.getElementById('first_button_id');
const secondButton = document.getElementById('second_button_id'); 

const counterForButton = giveFunctionCounter();
const numForFirstButton = counterForButton();
const numForSecondButton = counterForButton();

firstButton.onclick = ()=>{
    const num = numForFirstButton();
    firstButton.setAttribute('value', num);
}

secondButton.onclick = ()=>{
    const num = numForSecondButton();
    secondButton.setAttribute('value', num);
}
      
