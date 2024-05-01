const numberBtns = document.querySelectorAll('.numbers')
const operatorBtns = document.querySelectorAll('.operator')
const displayer = document.querySelector('#displayer')
const equalBtn = document.querySelector('.equal')
const clearBtn = document.querySelector('.clear')

let firstNumber;
let operator;
let secondNumber;

const add = function(num1, num2) {
    let answer = num1+num2
    return displayAnswer(answer)
}

const subtract = function(num1, num2) {
    let answer = num1-num2
    return displayAnswer(answer)
}

const multiply = function(num1, num2) {
    let answer = num1*num2
    return displayAnswer(answer)
}

const divide = function(num1, num2) {
    let answer = num1/num2
    return displayAnswer(answer)
}

function display(character) {
    displayer.textContent = character.join('')
}

function displayAnswer(answer) {
    displayer.textContent = answer
}

let equation = []

numberBtns.forEach(el=> 
    el.addEventListener('click', (el)=> {
        if (firstNumber === undefined && operator === undefined || firstNumber !== el.target.textContent && operator === undefined) {
            firstNumber = el.target.textContent
            equation[0] = firstNumber
            display(equation)
        } else if (firstNumber !== undefined && operator !== undefined) {
            secondNumber = el.target.textContent
            equation[2] = secondNumber
            display(equation)
        }
    })
)

operatorBtns.forEach(el=> 
    el.addEventListener('click', (el)=> {
        if (firstNumber !== undefined && operator === undefined) {
            operator = el.target.textContent
            equation[1] = operator
            display(equation)
        } 
    })
)

function clearEquation() {
    equation = []
    firstNumber = undefined
    operator = undefined
    secondNumber = undefined
}

function calculateEquation() {
    if (equation[1] === '+') {
        add(+equation[0], +equation[2])
        return clearEquation()
    } else if (equation[1] === '*') {
        multiply(+equation[0], +equation[2])
        return clearEquation()
    } else if (equation[1] === '/') {
        divide(+equation[0], +equation[2])
        return clearEquation()
    } else if (equation[1] === '-') {
        subtract(+equation[0], +equation[2])
        return clearEquation()
    }
    
}

function clear() {
    equation = []
    displayer.textContent = ''
    firstNumber = undefined
    operator = undefined
    secondNumber = undefined
}

equalBtn.addEventListener('click', calculateEquation)

clearBtn.addEventListener('click', clear)