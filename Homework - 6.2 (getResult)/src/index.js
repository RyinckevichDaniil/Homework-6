let numberOne = +prompt('Введите первое число');
let numberTwo = +prompt('Введите второе число');
let sign = prompt('Введите математический знак!');

console.log(numberOne, numberTwo, sign);

function getResult (firstNumber, secondNumber, mark) {
    if(sign.length === 1) {
        let result = '';
    
        if(mark === '+') {
            result = firstNumber + secondNumber;
        } else if(mark === '*') {
            result = firstNumber * secondNumber;
        } else if(mark === '%') {
            result = firstNumber % secondNumber;
        } else if (mark === '-') {
            result = firstNumber - secondNumber;
        } else if (mark === '/') {
            result = firstNumber / secondNumber;
        }
        return getResult = result;
    }else if (sign.length === 2){
        if (mark === '**') {
            result = firstNumber ** secondNumber;
        }
    } else {
        throw new Error('Больше одного символа!')
    }
    return getResult = result;
}

console.log (getResult(numberOne, numberTwo, sign));