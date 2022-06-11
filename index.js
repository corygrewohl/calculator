//add event listeners for calculator buttons

//take input
    //if number
        //if no operator selected
            //display on screen
        //if operator selected
            //clear screen
            //display on screen
    //if operator (+ - * /)
        //if display empty
            //do nothing
        //if numberArray empty
            //push number on screen to array
            //save operation
        //if numberArray.size == 1
            //update operation
        //if numberArray.size == 2
            //evaluate operation
            //update operation
    //if equals
        //evaluate

/**
 * TODO
 * 1. Stop screen overflow
 * 2. Round long numbers
 * X Don't allow dividing by 0
 * 4. Floating point numbers (.)
 * 5. Backspace button
 * 6. Keyboard support
 * 7. Make it look nice
 */

/**
 * BUGS
 * Breaks if you're chaining operations, and you switch an operation before you type a new number.
 */

let operation = '';
let newOperationPressed = false;
let equalsPressed = false;
const numberArray = [];

function takeInput(input){

    //checks for number
    if(Number.isFinite(input)){
        //resets screen if equals was pressed before hand (new calculation)
        if(equalsPressed == true || newOperationPressed == true){
            updateDisplay('');
            equalsPressed = false;
            newOperationPressed = false;
        }
        document.getElementById('display-inner').innerText += input;
    }

    //check for operator
    if(input == 'add' || input == 'subtract' || input == 'multiply' || input == 'divide'){
        //checks if display is empty
        if(document.getElementById('display-inner').innerText == ''){
            return;
        }
        //checks if numberArray has 0 values
        if(numberArray.length == 0){
            numberArray[0] = document.getElementById('display-inner').innerText;
            operation = input;
            updateDisplay('');
            
        } else if(numberArray.length == 1){ //checks if numberArray has 1 value
                numberArray.push(document.getElementById('display-inner').innerText);
                updateDisplay('');
        }
        //evaluates if 2 numbers are in the array (this only happens when another operation is selected in place of the equals)
        if(numberArray.length == 2){
            let answer = roundAnswer(operator(operation, numberArray[0], numberArray[1]));
            updateDisplay(answer);
            numberArray.pop();
            numberArray.pop();
            operation = input;
            numberArray[0] = document.getElementById('display-inner').innerText;
            newOperationPressed = true;
        }
    }

    //check for equals sign
    if(input == 'equals'){
        if(numberArray.length == 0) return;
        if(document.getElementById('display-inner').innerText == ''){
            updateDisplay(numberArray[0]);
        } else {
            numberArray.push(document.getElementById('display-inner').innerText);
            let answer = roundAnswer(operator(operation, numberArray[0], numberArray[1]));
            updateDisplay(answer);
        }
        numberArray.pop();
        numberArray.pop();
        operation = '';
        equalsPressed = true;
    }
    
    //checks for floating point
    if(input == '.'){
        if(!document.getElementById('display-inner').innerText.includes('.')){
            document.getElementById('display-inner').innerText += input;
        }
        
    }
}

function roundAnswer(answer){
    return Math.round(answer * 1000) / 1000;
}

function allClear(){
    operation = '';
    numberArray.pop();
    numberArray.pop();
    updateDisplay('');
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
    if(b == 0){
        return 'hey stop that';
    }
    return(parseFloat(a) / parseFloat(b));
}