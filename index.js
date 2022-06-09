let displayValue = '';
let storedValue = '';
let secondStoredValue = '';
let operation = '';

function numberClick(input){
    if(document.getElementById('display-inner' ).innerText.length > 12){
        return;
    }

    if(operation != ''){
        secondStoredValue = document.getElementById('display-inner').innerText;
        updateDisplay('');
    }

    document.getElementById('display-inner').innerText += input;
    displayValue = document.getElementById('display-inner').innerText;

    
    //console.log(displayValue);
}

function operatorClick(input){
    // storedValue = document.getElementById('display-inner').innerText;

    // if(storedValue == ''){
    //     console.log("no numbers");
    // } else if(operation != ''){
    //     if(displayValue != ''){
    //         equals();
    //     }
    // } else {
    //     console.log(input);
    //     console.log(displayValue);

    //     operation = input;
    //     displayValue = '';
    //     updateDisplay('');
    // }

    if(document.getElementById('display-inner').innerText != ''){
        if(storedValue != ''){
            updateDisplay(operator(operation, storedValue, secondStoredValue));
        }
        
        operation = input;
    }
        
    
}



//equals can check if there are two numbers stored, and then call operator()
function equals() {
    if(storedValue == '') {
        console.log("stored value empty");
        //updateDisplay('');
    } else {
        updateDisplay(operator(operation, storedValue, displayValue));
        resetValues();
    }
}

function allClear(){
    updateDisplay('');
    resetValues();
}

function resetValues(){
    displayValue = '';
    storedValue = '';
    secondStoredValue = '';
    operation = '';
}

function updateDisplay(input) {
    document.getElementById('display-inner').innerText = input;
}

function operator(operation, a, b){
    switch (operation) {
        case "multiply":
            return multiply(a, b);
        case "add":
            return add(a, b);   
        case "subtract":
            return subtract(a, b);
        case "divide":
            return divide(a, b);
        default:
            break;
    }
}

function add(a, b) {
    return(parseFloat(a) + parseFloat(b));
};

function subtract(a, b) {
    return(parseFloat(a) - parseFloat(b));
};

function multiply(a, b) {
    return(parseFloat(a) * parseFloat(b));
};

function divide(a, b) {
    return(parseFloat(a) / parseFloat(b));
}