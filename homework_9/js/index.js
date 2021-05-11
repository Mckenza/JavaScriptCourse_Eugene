function styleLink() {
    this.setAttribute('title', this.innerText);
    this.textContent = `${this.textContent} (${this.getAttribute('href')})`;
    if (this.getAttribute('title') !== '') {
        this.removeEventListener('mouseover', styleLink);
    }
}

const allLinks = document.querySelectorAll('a');
allLinks.forEach((element) => {
    element.addEventListener('mouseover', styleLink);
});

const inputOne = document.getElementById('inputOne');
const inputTwo = document.getElementById('inputTwo');
const parag = document.getElementById('test');

inputOne.onblur = () => {
    if (inputOne.value.length !== 20) {
        inputOne.style.border = '2px red solid';
    } else {
        inputOne.style.border = '2px #7fff00 solid';
    }
    parag.textContent = inputOne.value;
}

inputTwo.onblur = () => {
    if (inputTwo.value.length !== 20) {
        inputTwo.style.border = '2px red solid';
    } else {
        inputTwo.style.border = '2px #7fff00 solid';
    }
    parag.textContent = inputTwo.value;
}

inputOne.onclick = () => {
    alert(inputOne.value);
    inputOne.onclick = null;
}

inputTwo.onclick = () => {
    alert(inputTwo.value);
    inputTwo.onclick = null;
}

const allDivs = document.querySelectorAll('.div_color');

function changeColor() {
    let startColor = 'white';
    return function () {
        if (startColor === 'red') {
            startColor = '#7fff00';
        } else {
            startColor = 'red';
        }
        return startColor;
    }
}

allDivs.forEach((element) => {
    const returnFunc = changeColor();
    element.addEventListener('click', () => {
        element.style.backgroundColor = returnFunc();
    })
})

const buttonAdd = document.getElementById('add_input');
const divInputs = document.querySelector('.all_inputs');

buttonAdd.onclick = () => {
    const newElement = document.createElement('input');
    newElement.setAttribute('type', 'text');
    newElement.setAttribute('class', 'input_submit');
    divInputs.appendChild(newElement);
}

const buttonSend = document.getElementById('send_data');

buttonSend.onclick = () => {
    const allElementFromDiv = divInputs.querySelectorAll('.input_submit');
    let isPrintConsole = true;
    allElementFromDiv.forEach((element) => {
        if (element.value === '') {
            isPrintConsole = false;
            setTimeout(() => {
                element.style.border = '1px black solid';
            }, 2000);
            element.style.border = '2px red solid';
        }
    })
    const obj = {};
    if (isPrintConsole) {
        allElementFromDiv.forEach((element, index) => {
            obj[index + 1] = element.value;
        });
        console.log(obj);
    }
}