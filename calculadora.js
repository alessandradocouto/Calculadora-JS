var operation = { '+': function(a,b){return a + b;}, '-': function(a,b){return a - b;}, '*': function(a,b){return a * b;}, '/': function(a,b){return a / b;}, '%': function(a,b){return a % b;}};

function isOperatorValid(operator){
    if(operation[operator] !== undefined){
        return true
    };
    return false;
};
    


function calculator(operator){
    if(isOperatorValid(operator) === false){
        return false;
    }
    return function(a,b){
        if(typeof a !== 'number' || typeof b !== 'number'){
            return false;
        }
        return operation[operator](a,b);
    };
}



function showOperationMessage(operator,num1,num2){
    return 'A operação ' + num1 + ' ' + operator + ' ' + num2  + ' = ';
}



function showErrorMessage( operator){
    return 'Operação ' + operator + ' não permitida!!!';
}


var num1 = 0;
var num2 = 0;

var operationSignal = '+';
var sum = calculator(operationSignal);

if(sum){
    num1 = 7;
    num2 = 2;
    console.log(showOperationMessage(operationSignal,num1,num2), sum(num1,num2));
}
else{
    return false;
}


var operationSignal = '-';
var subtraction = calculator(operationSignal);
if(subtraction){
    num1 = 7;
    num2 = 2;
    console.log(showOperationMessage(operationSignal,num1,num2), subtraction(num1,num2));
}
else{
    return false;
}

var operationSignal = '*';
var multiplication = calculator(operationSignal);
if(multiplication){
    num1 = 7;
    num2 = 2;
    console.log(showOperationMessage(operationSignal,num1,num2), multiplication(num1,num2));
}
else{
    return false;
}

var operationSignal = '/';
var division = calculator(operationSignal);
if(division){
    num1 = 7;
    num2 = 2;
    console.log(showOperationMessage(operationSignal,num1,num2), division(num1,num2));
}
else{
    return false;
}

var operationSignal = '%';
var mod = calculator(operationSignal);
if(mod){
    num1 = 7;
    num2 = 2;
    console.log(showOperationMessage(operationSignal,num1,num2), mod(num1,num2));
}
else{
    return false;
}