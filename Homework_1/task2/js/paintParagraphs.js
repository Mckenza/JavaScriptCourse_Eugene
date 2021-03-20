
function arrayColorFunc(array){
    let indexArrayColor = 0;
    return function(){
        if(indexArrayColor === array.length-1){
            indexArrayColor = 0;
        } else {
            indexArrayColor++;
        }
        return array[indexArrayColor];
    }
}

const arrayColor = ['#ffff99','#ffcc00','#ffcccc','#9999ff','#6699ff','#ccffff','#99ff99'];

const firstParagraph = document.getElementById('paragraph_id1');
const secondParagraph = document.getElementById('paragraph_id2');
const thirdParagraph = document.getElementById('paragraph_id3');


const funcForFirst = arrayColorFunc(arrayColor);
const funcForSecond = arrayColorFunc(arrayColor);
const funcForThird = arrayColorFunc(arrayColor);

addEventListener('click', (e)=>{
    if(e.target === firstParagraph){
        firstParagraph.style.backgroundColor = funcForFirst();
    } else if (e.target === secondParagraph){
        secondParagraph.style.backgroundColor = funcForSecond();
    } else if (e.target === thirdParagraph){
        thirdParagraph.style.backgroundColor = funcForThird();
    }
})
