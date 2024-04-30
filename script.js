const numberBtns = document.querySelectorAll('.numbers')
const operatorBtns = document.querySelectorAll('.operator')
const displayer = document.querySelector('#displayer')
const number1 = document.querySelector('.number1')
const number2 = document.querySelector('.number2')
const number3 = document.querySelector('.number3')
const number4 = document.querySelector('.number4')
const number5 = document.querySelector('.number5')
const number6 = document.querySelector('.number6')
const number7 = document.querySelector('.number7')
const number8 = document.querySelector('.number8')
const number9 = document.querySelector('.number9')
const number0 = document.querySelector('.number0')

let firstNumber;
let operator;
let secondNumber;

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

function display(...character) {
    character.forEach(el => {
        displayer.textContent + el
    })
}

number0.addEventListener('click', ()=>{

        firstNumber = 0
        display(firstNumber, 2  )

})
number1.addEventListener('click', ()=>{
 
        firstNumber = 1
        display(firstNumber)

})
number2.addEventListener('click', ()=>{

        firstNumber = 2
        display(firstNumber)

})
number3.addEventListener('click', ()=>{

        firstNumber = 3
        display(firstNumber)

})
number4.addEventListener('click', ()=>{

        firstNumber = 4
        display(firstNumber)

})
number5.addEventListener('click', ()=>{

        firstNumber = 5
        display(firstNumber)

})
number6.addEventListener('click', ()=>{

        firstNumber = 6
        display(firstNumber)

})
number7.addEventListener('click', ()=>{

        firstNumber = 7
        display(firstNumber)

})
number8.addEventListener('click', ()=>{

        firstNumber = 8
        display(firstNumber)

})
number9.addEventListener('click', ()=>{

        firstNumber = 9
        display(firstNumber)

})