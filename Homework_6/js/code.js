let isStyle = false;

addEventListener('click', (event) => {
    if (event.target === document.getElementById('button_caps')) {
        editText('caps');
    }
    if (event.target === document.getElementById('button_italic')) {
        editText('italic');
    }
    if (event.target === document.getElementById('button_cross_out')) {
        editText('cross');
    }
    if(event.target === document.getElementById('button_copy')){
        copy();
    }
})

const inputText = document.getElementById('input_text');
const resultEdit = document.getElementById('result_edit_id');

function editText(value) {

    if (value === 'caps') {
        resultEdit.removeAttribute('style');
        resultEdit.textContent = inputText.value.toString().toUpperCase();

    }
    if (value === 'italic') {
        resultEdit.setAttribute('style', 'font-style: italic');
        resultEdit.textContent = inputText.value;

    }
    if (value === 'cross') {
        resultEdit.setAttribute('style', 'text-decoration: line-through');
        resultEdit.textContent = inputText.value;
    }

}

const inputStart = document.getElementById('input_start');
const inputEnd = document.getElementById('input_end');
const resultCopy = document.getElementById('result_copy_id');

function copy(){
    const str = inputText.value.toString();
    const firstIndex = parseInt(inputStart.value) - 1;
    const lastIndex = parseInt(inputEnd.value) - 1;
    const bufArray = [];

    if(firstIndex >= lastIndex || firstIndex < 0 || firstIndex > str.length || lastIndex > str.length || lastIndex < 0 || isNaN(firstIndex) || isNaN(lastIndex)){
        resultCopy.textContent = 'Неверные данные';
        return
    }

    for(let i = firstIndex; i < lastIndex; i++){
        bufArray.push(str[i]);
    }
    resultCopy.textContent = bufArray.join('');
}


