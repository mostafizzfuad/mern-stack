/* "use strict"
const private = 20  // error declaration, when using "use strict"
const interface = 'audio' // error declaration, when using "use strict"
console.log(private) // error
console.log(interface) // error */


// function declarations
// function expression
// arrow function


fuad()

/********* function declarations (type 1)  ***********/
function fuad() {
    console.log('Hello Masud')
}
// fuad()

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
// function jodi return na kore, but tobuo amra sei function ke consol.log() kori tahole undefined print korbe.
// function return keyword pele okhanei return kore dei, nicher line gula ar execute korena...

// sum of three numbers
function addThreeNumbers(a, b, c) {
    const sum = a + b + c
    console.log(sum)
}
console.log(addThreeNumbers(1, 11, 2)) // function jodi return na kore and sei function ke call diye console.log korle result undefined ashbe.




/************ function expression (type 2) *************/
// function er name ke variable baniye dilei function expression hoye jabe.
// console.log(juiceFactory(5, 7)) // undefined
const juiceFactory = function (apples, oranges) {
    const juice = (apples * oranges) / 2
    return `${juice} cup Juice is ready using ${apples} apples and ${oranges} oranges.`
}
console.log(juiceFactory(10, 5))

// function expression just like a variable.
/* console.log(a) // undefined
let a = 20  */


// function declarations : function er upore ba niche jekono jaigai console log kora jabe.

// function expression : function er upore sei function ke call dewa jabe na karon, function expression just like a variable

// arrow function : function expression er moto kaj korbe. function keyword ta kete dibo then parameter er pore () => use korbo. arrow function e this keyword related akta problem ache. tai kichu kichu jaigai arrow function ke avoid kora lagbe.

/************ arrow function (type 3) *************/
const juiceFactory2 = (apples, oranges) => {
    const juice = (apples * oranges) / 2
    return `${juice} cup Juice is ready using ${apples} apples and ${oranges} oranges.`
}
console.log(juiceFactory2(10, 5))



// arrow function example :: 

// likhar type 1
/* const ageCalculators = (birthYear) => {
    return 2023 - birthYear
} */
// likhar type 2
const ageCalculators = (birthYear) => 2023 - birthYear

console.log(ageCalculators(1998)) // invoke ageCalculators function

// arrow functions + ternary operators
const ageCalculator = (birthYear) => (2023 - birthYear) >= 18 ? 'You are adult' : 'You are not adult'
console.log(ageCalculator(1998))




// heroMaker function
const heroMaker = (age, skill) => {
    if (age >= 18 && skill) return 'You can be a superhero'
    else return 'You can not be a superhero'
}
console.log(heroMaker(22, true))

// one line using ternary operator
const heroMaker2 = (age, skill) => (age >= 18 && skill) ? 'You can be a superhero' : 'You can not be a superhero'
console.log(heroMaker2(22, true))





/***** function declaration, expression and arrow function ******/

// function declaration (type 1)
function ageCalculator(birthYear) {
    const age = 2024 - birthYear
    return age;
}

// function expression (type 2)
const ageCalculator = function (birthYear) { // [parameter = birthYear]
    const age = 2024 - birthYear
    return age;
}

// arrow function (type 3)
const ageCalculator = (birthYear) => {
    const age = 2024 - birthYear
    return age;
}

// arraw function (minimize)
const ageCalculator = (birthYear) => 2024 - birthYear

const myBirthYear = 1998;
console.log(ageCalculator(myBirthYear)) // call / invoke  [argument = myBirthYear]



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
console.log(doMath(3, 2, 7))


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

// side effect of a function : kono function call/invoke korar por function ta return korar age kotobar queue te chilo, setai hocche oi function er side effect. example : juiceMaker() function ta call korar por return howar age 2 bar queue te chilo. karon, fruitCutter() function ta 2 bar call hoye return korece. then juiceMaker() function ta return korece. same vabe fruitCutter() function ta 0 times queue te chilo. so fruitCutter() function side effect = 0



// brick calculation : 
/****
 * underground = 50000
 * 1st to 10th = 10000 per floor
 * 11th floor = 12000
 * 12th to 21st = 10000 per floor
 * 22th floor = 12000
 * 
 * 73 floor porjonto total koto brick lagbe ?
 ****/

function brickCalculation(totalFloors) {
    const undergroundBricks = 50000
    let brickForAllFloors = totalFloors * 10000
    const extraFLoors = Math.trunc(totalFloors / 11) 
    const extraBricks = extraFLoors * 2000
    brickForAllFloors += extraBricks
    return `total bricks needed : ${undergroundBricks + brickForAllFloors}`
}
console.log(brickCalculation(73))


// currying function
function multi(a) {
    // যেই ফাংশানের কোনো পরিচয় বা নাম নেই সেটাই Anonymous function
    return function (b) { 
        return function (c) {
            return function (x) {
                return function (y) {
                    return a * b * c * x * y
                }
            }
        }
    }
}
console.log(multi(10)(5)(3)(2)(5))

function multiplication(a) {
    return function (b) { 
        return function (c, m, n) {
            return function (x) {
                return function (y) {
                    return a * b * c * x * y * m * n
                }
            }
        }
    }
}
console.log(multiplication(10)(5)(3,2,4)(2)(5))

// currying using arrow functions : lambda calculus or lambda function declarations
const multiPro = (a) => (b) => (c) => (x) => (y) => a * b * c * x * y
console.log(multiPro(10)(5)(3)(2)(5))

const multiProUltra = (a, b, c, x, y) => a * b * c * x * y
console.log(multiProUltra(10, 5, 3, 2, 5))





// exercise
function sumFunction(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum
}

function subFunction(arr, total) {
    const subResult = []
    for (let i = 0; i < arr.length; i++) {
        subResult.push(total - arr[i])
    }
    return subResult
}

const arr = [1, 2, 3, 4, 5]
let total = sumFunction(arr)
console.log(total)
let result = subFunction(arr, total)
console.log(result)

