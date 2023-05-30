// "use strict"
// const private = 20
// const interface = 'audio'
// console.log(private)

fuad()

/********* function declarations (type 1)  ***********/
function fuad() {
    console.log('Hello Masud')
}

function addTwoNumbers(num1, num2) {
    const sum = num1 + num2
    return sum
}
console.log(addTwoNumbers(10, 20))


// find odd numbers using function
function oddNumberFinder(number) { // number = parameter
    if (number % 2 !== 0) {
        return `${number} is an add number`
    } else {
        return `${number} is an even number`
    }
} 
console.log(oddNumberFinder(15)) // function call / run / invoke [15 = argument]


// sum of three numbers
function addThreeNumbers(a, b, c) {
    const sum = a + b + c
    console.log(sum)
}
console.log(addThreeNumbers(1, 11, 2)) // function jodi return na kore and sei function ke call diye console.log korle result undefined ashbe.




/************ function expression (type 2) *************/
const juiceFactory = function (apples, oranges) {
    const juice = (apples * oranges) / 2
    return `Juice is ready using ${apples} apples and ${oranges} oranges.`
}
console.log(juiceFactory(10, 5))


// function declarations : function er upore ba niche jekono jaigai console log kora jabe.
// function expression : function er upore sei function ke call dewa jabe na karon, function expression just like variable
// arrow function : function expression er moto kaj korbe

/************ arrow function (type 3) *************/
const juiceFactory2 = (apples, oranges) => {
    const juice = (apples * oranges) / 2
    return `Juice is ready using ${apples} apples and ${oranges} oranges.`
}
console.log(juiceFactory2(10, 5))



// arrow function
// const ageCalculator = (birthYear) => 2023 - birthYear
// console.log(ageCalculator(1998))

const ageCalculator = (birthYear) => (2023 - birthYear) >= 18 ? 'You are adult' : 'You are not adult'
console.log(ageCalculator(1998))




// heroMaker function
const heroMaker = (age, skill) => {
    if (age >= 18 && skill) return 'You can be a superhero'
    else return 'You can not be a superhero'
}
console.log(heroMaker(22, true))


const heroMaker2 = (age, skill) => (age >= 18 && skill) ? 'You can be a superhero' : 'You can not be a superhero'
console.log(heroMaker2(22, true))





/***** function declaration, expression and arrow function ******/
// function declarations
const myBirthYear = 1998;

function ageCalculators(birthYear) {
    const age = 2023 - birthYear
    return age;
}
console.log(ageCalculators(myBirthYear))



// function expression
const evenNumberFinder = function (number) {
    if (number % 2 === 0) {
        return `${number} is an even number.`
    } else {
        return `${number} is an odd number.`
    }
}
console.log(evenNumberFinder(24))



// arrow functions example 1
const doMath = (a, b, c) => {
    const x = a + b
    const y = x * c
    return y
}
console.log(doMath(13, 21, 78))


// arrow functions example 2
const doMathPro = (x, y) => {
    return x * y
}
console.log(doMathPro(10, 20))

// arrow functions example 2 : optimize version
const doMathUltraProMax = (x, y) => x * y
console.log(doMathUltraProMax(10, 20))


// function calling function (interview question)
function fruitCutter(fruit) {
    return fruit * 4
}
function juiceMaker(apples, oranges) {
    const applePices = fruitCutter(apples)
    const orangePices = fruitCutter(oranges)

    const juice = (applePices + orangePices) / 2

    return `${juice} ltr. juice is ready using ${applePices} apple pices and ${orangePices} orange pices`
}
console.log(juiceMaker(15, 10))

// side effect of a function : function ta return korar age kotobar queue te chilo. example : juiceMaker() function ta call korar por return howar age 2 bar queue te chilo. karon, fruitCutter() function ta 2 bar call hoye return korece. then juiceMaker() function ta return korece. same vabe fruitCutter() function ta 0 times queue te chilo. so fruitCutter() function side effect = 0


// brick calculation : 59.04 seconds
// hello