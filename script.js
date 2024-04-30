const numberBtns = document.querySelectorAll('.numbers')
const operatorBtns = document.querySelectorAll('.operator')
const displayer = document.querySelector('#displayer')

let firstNumber = 0;
let operator = 0;
let secondNumber = 0;

const operate = function(num1, operator, num2) {
        
}

const add = function(num1, num2) {
    return num1+num2
}

const subtract = function(num1, num2) {
    return num1-num2
}

const multiply = function(num1, num2) {
    return num1*num2
}

const divide = function(num1, num2) {
    return num1/num2
}

function display(character) {
    if (displayer.textContent !== '') { 
        displayer.textContent + character
    } else {displayer.textContent + character}
}

numberBtns.forEach(el=> 
    el.addEventListener('click', (el)=> {
        if (firstNumber === 0 && operator === 0 || firstNumber !== el.target.textContent) {
            firstNumber = el.target.textContent
            display(firstNumber)
        } else if (firstNumber !== 0 && operator !== 0) {
            secondNumber = el.target.textContent
            display(secondNumber)
        }
    })
)

operatorBtns.forEach(el=> 
    el.addEventListener('click', (el)=> {
        if (firstNumber !== 0 && operator === 0) {
            operator = el.target.textContent
            display(operator)
        } 
    })
)