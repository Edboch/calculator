const input = document.querySelector('.input');
const prevInput = document.querySelector('.previous-input');
const buttons = document.querySelectorAll('button');
let resultHolder = null;
let operator = null;
let secondValStarted = false;

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let content = button.textContent;
        switch (content) {
            case 'C':
                prevInput.innerHTML = '&emsp;';
                input.innerHTML = '0';
                resultHolder = null;
                operator = null;
                secondValStarted = false;
                break
            case '=':
                if (!resultHolder && !operator && !secondValStarted) {
                    break;
                }
                let secondNum = parseFloat(input.textContent);
                let result = operate(operator,resultHolder,secondNum);
                input.textContent = (isNaN(result))?'Haha':result;
                prevInput.innerHTML = '&emsp;';
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
                    let secondNum = parseFloat(input.textContent);
                    resultHolder = operate(operator,resultHolder,secondNum)
                    input.textContent = resultHolder;
                    secondValStarted = false;
                } else {
                    resultHolder = parseFloat(input.textContent);
                }
                prevInput.textContent = resultHolder;
                operator = content;
                break
            default:
                if (operator && !secondValStarted){
                    input.textContent = content;
                    secondValStarted = true;
                } else if (input.textContent === '0') {
                    input.textContent = content;
                } else {
                    input.textContent+=content;
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