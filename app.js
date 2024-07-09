let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let nine = document.getElementById("nine");
let zero = document.getElementById("zero");
let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let equals = document.getElementById("equals");
let res = document.getElementById("res");

let currentInput = '';
let operator = '';
let operand1 = '';
let operand2 = '';

function updateDisplay(value) {
    res.innerText = value;
}

one.addEventListener('click', function() {
    currentInput += '1';
    updateDisplay(currentInput);
});

two.addEventListener('click', function() {
    currentInput += '2';
    updateDisplay(currentInput);
});

three.addEventListener('click', function() {
    currentInput += '3';
    updateDisplay(currentInput);
});

four.addEventListener('click', function() {
    currentInput += '4';
    updateDisplay(currentInput);
});

five.addEventListener('click', function() {
    currentInput += '5';
    updateDisplay(currentInput);
});

six.addEventListener('click', function() {
    currentInput += '6';
    updateDisplay(currentInput);
});

seven.addEventListener('click', function() {
    currentInput += '7';
    updateDisplay(currentInput);
});

eight.addEventListener('click', function() {
    currentInput += '8';
    updateDisplay(currentInput);
});

nine.addEventListener('click', function() {
    currentInput += '9';
    updateDisplay(currentInput);
});

zero.addEventListener('click', function() {
    currentInput += '0';
    updateDisplay(currentInput);
});

plus.addEventListener('click', function() {
    operand1 = currentInput;
    operator = '+';
    currentInput = '';
    updateDisplay('+');
});

minus.addEventListener('click', function() {
    operand1 = currentInput;
    operator = '-';
    currentInput = '';
    updateDisplay('-');
});

equals.addEventListener('click', function() {
    operand2 = currentInput;
    let result = 0;
    if (operator === '+') {
        result = Number(operand1) + Number(operand2);
    } else if (operator === '-') {
        result = Number(operand1) - Number(operand2);
    }
    updateDisplay(result);
    currentInput = result.toString();
    operand1 = '';
    operand2 = '';
    operator = '';
});