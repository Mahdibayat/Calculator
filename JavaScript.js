var inputNumber ='';
var subArr = [];
var mainArr = [];
var signArr = [];
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
function Num(value) {
    if(document.getElementById('input').innerText === '0'){
    inputNumber = value;
    }else {
        inputNumber +=value;
    }
    document.getElementById('input').innerText = inputNumber;
    document.getElementById('output').innerText += value;
    subArr.push(value);
}

function getFirstplus() {
    mainArr.push(subArr);
    subArr = [];
    signArr.push('+');
    inputNumber ='0';
    document.getElementById('input').innerText = '0';
    document.getElementById('output').innerText += '+';
}
function getFirstMines() {
    if(subArr.length === 0){
        Num('-');
    }else {
        mainArr.push(subArr);
        subArr = [];
        signArr.push('-');
        inputNumber = '0';
        document.getElementById('input').innerText = '0';
        document.getElementById('output').innerText += '-';
    }
}
function getFirstDivide() {
    mainArr.push(subArr);
    subArr = [];
    signArr.push('/');
    inputNumber = '0';
    document.getElementById('input').innerText = '0';
    document.getElementById('output').innerText += '\u00f7';
}
function getFirstMultiply() {
    mainArr.push(subArr);
    subArr = [];
    signArr.push('*');
    inputNumber = '0';
    document.getElementById('input').innerText = '0';
    document.getElementById('output').innerText += '\u00d7';
}
function clearInput() {
    mainArr = [];
    subArr = [];
    signArr = [];
    inputNumber = '0';
    document.getElementById('input').innerText = inputNumber;
    document.getElementById('output').innerText = '';
}
function info() {
    console.log(mainArr);
    console.log(subArr);
    console.log(signArr);
}
function equall() {
    mainArr.push(subArr);
    subArr = [];
    var x = [];
    var a = [];
    for (var i = 0; i < mainArr.length; i++) {
        var y = [];
        for (var j = 0; j < mainArr[i].length; j++) {
            y.push(mainArr[i][j]);
        }
        x.push(y.join(''));
    }
    for (var c = 0; c < x.length; c++) {
        a.push(parseFloat(x[c]));
    }
    if(signArr.length === 1){
        if (signArr[0] === '+'){
            p = a[0]+a[1];
            signArr=[];
        }else if(signArr[0] === '-') {
            p = a[0]-a[1];
            signArr=[];
        }else if(signArr[0] === '/') {
            p = a[0]/a[1];
            signArr=[];
        }else if(signArr[0] === '*') {
            p = a[0]*a[1];
            signArr=[];
        }
        document.getElementById('output').innerText += '='+ p;
        document.getElementById('input').innerText = p;
    }else if (signArr.length === 0 ) {
        document.getElementById('output').innerText= 'wrong input';
    }else {
        document.getElementById('output').innerText = 'plz calculate 1 by 1';
    }
    signArr=[];
    mainArr=[];
    subArr = [];
    subArr.push(p.toString().split(''));
    console.log(subArr);
}
