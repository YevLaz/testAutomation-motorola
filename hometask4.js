let result = 0;
let result1 = 0;
let currentOperator = undefined;


function operators(operator) {
    let calculatorInput = document.getElementById('calculatorInput');
    if (currentOperator !== undefined) {
        if (currentOperator === '+'){
            result += +(calculatorInput.value);  
        }
        if (currentOperator === '-'){
            result -= +(calculatorInput.value);  
        }
        if (currentOperator === '*'){
            result *= +(calculatorInput.value);  
        }
        if (currentOperator === '/'){
            result /= +(calculatorInput.value);  
        }
        if (currentOperator === '1/x'){
            result = 1/result;  
        }
        if (currentOperator === 'x2'){
            result = result*result;  
        }
        if (currentOperator === 'vx̄'){
            result = Math.sqrt(result);  
        }
        if (currentOperator === '+/-'){
            result = result*(-1);  
        }

        calculatorInput.value = result; 
        currentOperator = undefined;
    } else{
        result = +(calculatorInput.value);
        calculatorInput.value = '';
        currentOperator = operator;
        console.log(operator);
    }
}

function numbers(operator1) {
    if (result > 0) {  
            calculatorInput.value = calculatorInput.value + operator1;
    }  
    else {
        if (operator1 === '1'){
            calculatorInput.value = calculatorInput.value + '1';  
        }
        if (operator1 === '2'){
            calculatorInput.value = calculatorInput.value + '2';  
        }
        if (operator1 === '3'){
            calculatorInput.value = calculatorInput.value + '3';  
        }
        if (operator1 === '4'){
            calculatorInput.value = calculatorInput.value + '4';  
        }
        if (operator1 === '5'){
            calculatorInput.value = calculatorInput.value + '5';  
        }
        if (operator1 === '6'){
            calculatorInput.value = calculatorInput.value + '6';  
        }
        if (operator1 === '7'){
            calculatorInput.value = calculatorInput.value + '7';  
        }
        if (operator1 === '8'){
            calculatorInput.value = calculatorInput.value + '8';  
        }
        if (operator1 === '9'){
            calculatorInput.value = calculatorInput.value + '9';  
        }
        if (operator1 === '0'){
            calculatorInput.value = calculatorInput.value + '0';  
        }
        result = +(calculatorInput.value);
    }
}

function superoperator(superoperator1){
    if (superoperator1 === 'CE') {
        calculatorInput.value = '';
    }
    if (superoperator1 === 'C') {
        calculatorInput.value = '';
        result = 0;
    }
    if (superoperator1 === 'backspase') {
        calculatorInput.value = calculatorInput.value.substring(0, calculatorInput.value.length - 1);
    }

}