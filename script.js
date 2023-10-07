let currentInput = '';
let currentOperator = '';
let currentResult = 0;

// Checks if first number is negative 
function appendNumber(number) {
    if (currentInput === '' && number === '-') {
        currentInput += '-';
    } else {
        currentInput += number;
    }
    updateScreen();
}
// Selects and displays correct operator
function setOperator(operator) {
    if (currentInput !== '') {
        if (currentOperator !== '') {
            calculate();
        }
        currentOperator = operator;
        currentResult = parseFloat(currentInput);
        currentInput = '';
        updateScreen();
    } else if (currentResult !== 0) {
        currentOperator = operator;
        updateScreen();
    }
}
// Clears screen
function clearScreen() {
    currentInput = '';
    currentOperator = '';
    currentResult = 0;
    updateScreen();
}
// Calculates expressions
function calculate() {
    if (currentInput !== '' || currentOperator !== '') {
        const operand = parseFloat(currentInput) || 0;
        switch (currentOperator) {
            case '+':
                currentResult += operand;
                break;
            case '-':
                currentResult -= operand;
                break;
            case '*':
                currentResult *= operand;
                break;
            case '/':
                if (operand !== 0) {
                    currentResult /= operand;
                } else {
                    alert('Cannot divide by zero!');
                    clearScreen();
                    return;
                }
                break;
            default:
                break;
        }
        currentInput = '';
        currentOperator = '';
        updateScreen();
    }
    // Updates calculator screen
}
function updateScreen() {
    document.getElementById('screen').innerText = currentResult !== 0 ? currentResult + currentOperator + currentInput : currentInput;
}