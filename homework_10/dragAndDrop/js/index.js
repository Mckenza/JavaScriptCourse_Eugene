
function dragEnd(e){
    e.preventDefault();
}

function dragEnter(e){
    e.preventDefault();
}

function dragOver(e){
    e.preventDefault();
    this.style.border = '2px dashed'
}

function dragLeave(e){
    e.preventDefault();
    this.style.border = '2px solid'
}


function drop(e){
    this.appendChild(image);
    this.style.border = '2px solid'
    this.style.display = 'flex';
    this.style.alignItems = 'center';
    image.style.margin = '0 auto';
}

const divElementOne = document.querySelector('.field_one');
const divElementTwo = document.querySelector('.field_two');

const image = document.getElementById('ball');

divElementOne.addEventListener('drop', drop, false);
divElementOne.addEventListener('dragenter', dragEnter, false);
divElementOne.addEventListener('dragover', dragOver, false);
divElementOne.addEventListener('dragleave', dragLeave, false);

divElementTwo.addEventListener('drop', drop, false);
divElementTwo.addEventListener('dragenter', dragEnter, false);
divElementTwo.addEventListener('dragover', dragOver, false);
divElementTwo.addEventListener('dragleave', dragLeave, false);