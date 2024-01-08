const display = document.querySelector('#display');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const clearButton = document.querySelector('#clear');
const backSpace = document.querySelector('#backspace');
const equalsTo = document.querySelector('#equals');
const percentageButton = document.querySelector('.percentage');

// Display in input *code*
numbers.forEach((number) => {
    number.addEventListener('click', (e) => {
        let value = Number(number.innerText);
        displayValue(value); 
    })
})

operators.forEach((operator) => {
    operator.addEventListener('click', () => displayControls(operator));
})

function displayControls(operator) {
    if (display.value === '' && (operator.innerText !== '+' && operator.innerText !== '-')) { 
        //do nothing
        console.log(operator.innerText);
    } else if (display.value === '+' || display.value === '-') {
        // do nothing
    } else if (['+','-','/','*'].includes(display.value.at(display.value.length - 1))) {
        // do nothing
    } else if (operator.innerText === '%' && display.value.at(display.value.length - 1) === '%'){
        //do nothing
    } else {
        let value = operator.innerText;
        displayValue(value);
    }
}

function displayValue(value) {
    display.value += value;
}

// clear button
clearButton.addEventListener('click', (e) => {
    display.value = '';
})

//backspace button
backSpace.addEventListener('click', (e) => {
    display.value = display.value.slice(0,display.value.length - 1);
}) 

//clicking "equalsTo"
equalsTo.addEventListener("click", (e) => {
    console.log(display.value);
})

window.addEventListener('keydown', (e) => {
    if([1,2,3,4,5,6,7,8,9,0].includes(Number(e.key))) {
        displayValue(e.key);
     } //else if(['+','-','/','*','%'].includes(e.key)) {
    //     displayControls(e.key);
    //     console.log(e);
    // }; 
    
})