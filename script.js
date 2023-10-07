// Make variables
let input = '';
let nowperator = '';
let result = 0;

// Checks if first number is negative 
function display(number) {
    if (input === '' && number === '-') {
        input += '-';
    } else {
        input += number;
    }
    newScreen();
}
// Selects and displays correct operator
function operator(operator) {
    if (input !== '') {
        if (nowperator !== '') {
            calculate();
        }
        nowperator = operator;
        result = parseFloat(input);
        input = '';
        newScreen();
    } else if (result !== 0) {
        nowperator = operator;
        newScreen();
    }
}
// Clears screen
function wipeScreen() {
    input = '';
    nowperator = '';
    result = 0;
    newScreen();
}
// Calculates expressions
function calculate() {
    if (input !== '' || nowperator !== '') {
        const operand = parseFloat(input) || 0;
        switch (nowperator) {
            case '+':
                result += operand;
                break;
            case '-':
                result -= operand;
                break;
            case '*':
                result *= operand;
                break;
            case '/':
                if (operand !== 0) {
                    result /= operand;
                } else {
                    alert('Sorry, no dividing by 0');
                    wipeScreen();
                    return;
                }
                break;
            default:
                break;
        }
        input = '';
        nowperator = '';
        newScreen();
    }
    // Updates calculator screen
}
function newScreen() {
    document.getElementById('screen').innerText = result !== 0 ? result + nowperator + input : input;
}