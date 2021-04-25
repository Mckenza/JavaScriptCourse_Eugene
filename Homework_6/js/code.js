
const applyStyle = getStyle();

const inputText = document.getElementById('input_text');
const resultEdit = document.getElementById('result_edit_id');
const inputStart = document.getElementById('input_start');
const inputEnd = document.getElementById('input_end');
const resultCopy = document.getElementById('result_copy_id');

addEventListener('click', (event) => {
    if(inputText.value.toString() === ''){
        resultEdit.removeAttribute('style');
        resultEdit.textContent = 'Нет данных в поле';
        resultCopy.textContent = '';
        return;
    }
    if (event.target === document.getElementById('button_caps')) {
        applyStyle('caps');
    }
    if (event.target === document.getElementById('button_italic')) {
        applyStyle('italic');
    }
    if (event.target === document.getElementById('button_cross_out')) {
        applyStyle('cross');
    }
    if (event.target === document.getElementById('button_copy')) {
        copy();
    }
})

function getStyle() {
    let whoseStyle = '';
    return function (value) {
        if (whoseStyle === value) {
            resultEdit.removeAttribute('style');
            resultEdit.textContent = inputText.value;
            whoseStyle = '';
        } else {
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
            whoseStyle = value;
        }
    }
}

function copy() {
    const str = resultEdit.innerText.toString();
    const firstIndex = parseInt(inputStart.value) - 1;
    const lastIndex = parseInt(inputEnd.value) - 1;
    const bufArray = [];

    if (firstIndex >= lastIndex || firstIndex < 0 || firstIndex > str.length || lastIndex > str.length || lastIndex < 0 || isNaN(firstIndex) || isNaN(lastIndex)) {
        resultCopy.textContent = 'Неверные данные';
        resultCopy.removeAttribute('style');
        return;
    }

    for (let i = firstIndex; i < lastIndex; i++) {
        bufArray.push(str[i]);
    }
    resultCopy.setAttribute('style', `${resultEdit.getAttribute('style')}`);
    resultCopy.textContent = bufArray.join('');
}


