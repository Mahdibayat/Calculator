var inputNumber ='';
var a = '';
var b = '';
var sign= '';
function getFirstplus() {
    a = inputNumber;
    inputNumber ='0';
    document.getElementById('input').innerText = '0';
    sign = 'Plus';
    document.getElementById('output').innerText += '+';
}
function getFirstMines() {
    a = inputNumber;
    inputNumber = '0';
    document.getElementById('input').innerText = '0';
    sign = 'Mines';
    document.getElementById('output').innerText += '-';
}
function getFirstDivide() {
    a = inputNumber;
    inputNumber = '0';
    document.getElementById('input').innerText = '0';
    sign = 'Divide';
    document.getElementById('output').innerText += '\u00f7';
}
function getFirstMultiply() {
    a = inputNumber;
    inputNumber = '0';
    document.getElementById('input').innerText = '0';
    sign = 'Multiply';
    document.getElementById('output').innerText += '\u00d7';
}
function Num(value) {
    if(document.getElementById('input').innerText === '0'){
    inputNumber = value;
    }else {
        inputNumber +=value;
    }
    document.getElementById('input').innerText = inputNumber;
    document.getElementById('output').innerText += value;
}
function clearInput() {
    a = '0';
    b = '0';
    sign = '';
    inputNumber = '0';
    document.getElementById('input').innerText = inputNumber;
    document.getElementById('output').innerText = '';
}
function Dot(){
    inputNumber += '.';
    document.getElementById('input').innerText = inputNumber;
    document.getElementById('output').innerText = inputNumber;
}
function equall() {
    b = inputNumber;
    a = parseFloat(a);
    b = parseFloat(b);
    if(sign === 'Plus'){
        inputNumber = a + b;
    } else if (sign === 'Mines') {
        inputNumber = a - b;
    } else if (sign === 'Multiply') {
        inputNumber = a * b;
    } else if (sign === 'Divide') {
        inputNumber = a / b;
    }
    document.getElementById('input').innerText = inputNumber.toPrecision(5);
    document.getElementById('output').innerText += "=";
    document.getElementById('output').innerText += inputNumber.toPrecision(5);
}