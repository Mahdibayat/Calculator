var inputNumber ='';
var a = '';
var b = '';
var sign= '';

function keyPress() {
    var x = event.which;
    if(x === 49){
        Num('1');
    }else if(x === 50){
        Num('2');
    }else if(x === 51){
        Num('3');
    }else if(x === 52){
        Num('4');
    }else if(x === 53){
        Num('5');
    }else if(x === 54){
        Num('6');
    }else if(x === 55){
        Num('7');
    }else if(x === 56){
        Num('8');
    }else if(x === 57){
        Num('9');
    }else if(x === 48){
        Num('0');
    }else if(x === 47){
        getFirstDivide();
    }else if(x === 8){
        clearInput();
    }else if(x === 45){
        getFirstMines();
    }else if(x === 43){
        getFirstplus();
    }else if (x === 61){
        equall();
    }
}

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
