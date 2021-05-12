function drop(e){
    this.appendChild(imageDnD);
    this.style.border = '2px solid';
}

function dragOver(e){
    e.preventDefault();
    this.style.border = '2px black dashed';
}

function dragLeave(e){
    e.preventDefault();
    this.style.border = '2px black solid';
}

function dragEnter(e){
    e.preventDefault();
}

function dragEnd(e){
    e.preventDefault();
}

let imageDnD = null;

const divWithBall = document.querySelector('.div_for_ball');
const divDrop = document.querySelector('.div_drop');
const buttonAdd = document.getElementById('button_add_ball');
const valueBall = document.getElementById('amount_ball');

buttonAdd.onclick = () =>{
    if(valueBall.value <= 0 || valueBall.value > 15 || valueBall.value.length === 0){
        setTimeout(()=>{
            valueBall.style.border = '2px black solid';
        }, 1000);
        valueBall.style.border = '2px red solid';
        return;
    }

    for(let i = 0; i < valueBall.value; i++){
        const imgBall = document.createElement('img');
        imgBall.src = 'image/ball.png';
        imgBall.setAttribute('width', '100px');
        imgBall.setAttribute('heigth', '100px');
        imgBall.style.position = 'absolute';
        imgBall.style.top = `${Math.random() * 250}px`;
        imgBall.style.left = `${Math.random() * 250}px`;
        divWithBall.appendChild(imgBall);
    }
}

divWithBall.addEventListener('drop', drop, false);
divWithBall.addEventListener('dragenter', dragEnter, false);
divWithBall.addEventListener('dragleave', dragLeave, false);
divWithBall.addEventListener('dragover', dragOver, false);
divWithBall.addEventListener('dragend', dragEnd, false);

divDrop.addEventListener('drop', drop, false);
divDrop.addEventListener('dragenter', dragEnter, false);
divDrop.addEventListener('dragleave', dragLeave, false);
divDrop.addEventListener('dragover', dragOver, false);
divDrop.addEventListener('dragend', dragEnd, false);

addEventListener('drag', (e)=>{
    imageDnD = e.target;
}, false)
