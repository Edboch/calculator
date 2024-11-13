const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.textContent === 'C') {
            display.innerHTML = '';
        } else if (button.textContent === '=') {
            console.log('Not implemented');
        } else {
            display.textContent+=button.textContent;
        }
    })
})


function add(number1,number2) {
    return number1+number2;
}

function subtract(number1,number2) {
    return number1-number2;
}

function multiply(number1,number2) {
    return number1*number2;
}

function divide(number1,number2) {
    return number1/number2;
}

function operate(op,number1,number2) {
    switch (op) {
        case '+':
            add(number1,number2);
            break
        case '-':
            subtract(number1,number2);
            break
        case '*':
            multiply(number1,number2);
            break
        case '/':
            divide(number1,number2);
            break
        default:
            console.warn('The operator is invalid!')
    }
}