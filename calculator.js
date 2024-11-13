const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');
let resultHolder = null;
let operator = null;
let secondValStarted = false;

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let content = button.textContent;
        switch (content) {
            case 'C':
                display.innerHTML = '0';
                resultHolder = null;
                operator = null;
                secondValStarted = false;
                break
            case '=':
                let secondNum = parseInt(display.textContent);
                let result = operate(operator,resultHolder,secondNum);
                display.textContent = (isNaN(result))?'Haha':result;
                resultHolder = null;
                operator = null;
                secondValStarted = false;
                break
            case '+':
            case '-':
            case '/':
            case '*':
                if (resultHolder) {
                    // User has pressed the operator button for the second time
                    // this case evaluates the first calculation
                    // e.g 2+2+ --> 10+
                    let secondNum = parseInt(display.textContent);
                    resultHolder = operate(operator,resultHolder,secondNum)
                    display.textContent = resultHolder;
                    secondValStarted = false;
                } else {
                    resultHolder = parseInt(display.textContent);
                }
                operator = content;
                break
            default:
                if (operator && !secondValStarted){
                    display.textContent = content;
                    secondValStarted = true;
                } else if (display.textContent === '0') {
                    display.textContent = content;
                } else {
                    display.textContent+=content;
                }
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
    return number2!==0?number1/number2:NaN;
}

function operate(op,number1,number2) {
    let result;
    switch (op) {
        case '+':
            result = add(number1,number2);
            break
        case '-':
            result = subtract(number1,number2);
            break
        case '*':
            result = multiply(number1,number2);
            break
        case '/':
            result = divide(number1,number2);
            break
        default:
            console.warn('One of the parameters are missing!')
    }
    return result;
}