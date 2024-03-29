// JS : JS is a high level , multi paradigm, interpreted, object oriented, functional programming language.

// JavaScript was invented by Brendan Eich in 1995, and became an ECMA standard in 1997. ECMAScript is the official name of the language. ECMAScript versions have been abbreviated to ES1, ES2, ES3, ES5, and ES6.

// ECMA : European Computer Manufacturers Association.

// Javascript official name : ECMAScript (ES).

console.log("Hello JS") // double quotation
console.log('Hello JS') // single quotation
console.log(`Hello JS`) // backtick

// variables : let varName = value;  [don't use var keyword for declaration a variable & use camelCase for variable names]
// let and const - block scope
// var - function scope

// variable naming restrictions : 
    // let 10cars = 10
    // let me&you = 'love'
    // let function = 10 // any keyword
    // let false = 10 // any keyword
    // let player-number = 10
    // let Classroom = 'A3' (only class name declaration e variable name capitalize hisebe use kora hoi)
    // let age1 = 21 (not error but don't use)


let myName = 'Mostafizur Rahman'
console.log('Hello ' + myName) // string concatenation
console.log(`Hello ${myName}`) // template literal : backtick

// multiline using escape sequences
console.log('I am Mostafizur \nand \nI am a \ndeveloper')
console.log('\n')
// multiline using template literals
console.log(`I am Mostafizur
and
I am a
developer`)

// no keyword using variable : don't use
likes = 150
console.log(likes) // its working but this type of variable cannot create a scope
// Expected output: 150

// data types : (value has type, not variable. variable just a name)

/***** data types : (premitive , non-premitive)
 * premitive types :
 * 1. number (integer, float)
 * 2. string
 * 3. boolean (true, false)
 * 4. null
 * 5. undefined : variable declare kora hoiche but value assign kora hoini
 * 6. symbol
 * 7. bigInt
 * ********************/

let movieRating = 7.8
let movieName = 'Mujib'
let isRaining = true
let carSpeed = null
let herAge // typeof herAge : undefined


// typeof varName : (variable er datatype janar jonno use kora hoi)
// kono variable er value null , but typeof diye sei variable check korle dataType dekhabe object. this is a bug.
let age = null
console.log(typeof age) // object
console.log(typeof NaN) // number
console.log(typeof Infinity) // number
console.log(typeof Number('I love you'))

// let , const, var :
let testNumber = 10 // declare variable & assign value
testNumber = 20 // mutate or re-assign value

// let testNumber = 30 // can't redeclare block scope variable

// let , const : block scope
// var : function scope

// var :
console.log(ourNumber) // undefined
var ourNumber = 10 // declare variable & assign value
ourNumber = 20 // re-assign
var ourNumber = 30 // can't error

// const : re-assign not possible in a constant variable.  (obossoi value assign kora lagbe const variable declaration er somoi)
const myAge = 25
console.log(myAge)

// ---------------- JS (2)---------------------- //

// arithmetics operator (+ - * / % ** ++ --)

// string concatenation
let firstName = 'Mostafizur Rahman'
let lastName = 'Fuad'
console.log(firstName + ' ' + lastName)

// assignment operator (= += -= *= /= %=)
// comparison operator (< , <= , > , >=)

// operator precedence
console.log(30 + (10 - 5) * 2) // 40
console.log(2024 > 2030 - 30) // true










// if else : multiple output dorkar hole sudhu if , single output dorkar hole else if use korbo
const mangoPrice = 60
const applePrice = 80

if (mangoPrice <= 100) {
    console.log('Mango khabo')
} if (applePrice <= 100) {
    console.log('Apple khabo')
}

console.log('\n')

// differences between if and else if
if (mangoPrice <= 100) {
    console.log('Amm khabo')
} else if (applePrice <= 100) {
    console.log('App khabo')
}

console.log('\n')

// differences between if and else
if (mangoPrice <= 50) {
    console.log('Amm khabo')
} else {
    console.log('Apple khabo')
}

// exercise : grade calculation program


// type conversion (manually) and coercion (autometically)

// type conversion (manually)
const str = '10'
const num = 20
const isGood = true

console.log(str, typeof str) // 10 string
console.log(Number(str), typeof Number(str)) // 10 number

console.log(typeof Number("500")) // number

console.log(Number("Fuad")) // NaN
console.log(typeof NaN) // number

console.log(typeof String(num))
console.log(typeof String(1000))
console.log(typeof String(isGood))


console.log(typeof Number("500")) // number
console.log(typeof String(1000)) // string
console.log(typeof String(true)) // string


// -------------------------------- //

// normal arithmetic
console.log(10 + 10)
console.log(20 - 10)
console.log(20 * 5)
console.log(20 / 3)
console.log(20 % 3)

// string concat or NaN 
console.log('Baby' + 20) // Baby20
console.log('Baby' - 20) // NaN
console.log('Baby' * 20) // NaN
console.log('Baby' / 20) // NaN
console.log('Baby' + 'Babu') // BabyBabu
console.log('Baby' - 'Babu') // NaN

// coercion (autometically)
console.log(200 - '100') // coercion (autometically)
console.log(200 * '100') // coercion (autometically)
console.log(200 / '100') // coercion (autometically)
console.log('200' + 100) // 200100

// note : + and string thakle sob kichu string banabe.


// game 1
let a = '1' + 1
a -= 1
console.log(a) // 10

// game 2
let x = 2 + 3 + 4 + '5'
x += 5
console.log(x) // 955

// game 3
let y = '10' - '5' - '3' - 2 + '5'
y -= 10
console.log(y) // -5

// game 4
let z = 1 + 1 - 1 - '1' + '10' - 20
z += '10'
z--
console.log(z) // -1011


// ---------------- JS (3)---------------------- //


// truthy value and falsy value
// falsy value : 0 , '' , undefined , null , NaN
console.log(Boolean(0)) // false
console.log(Boolean('')) // false
console.log(Boolean(undefined)) // false
console.log(Boolean(null)) // false
console.log(Boolean(NaN)) // false

// truthy value
console.log(Boolean(1)) // true
console.log(Boolean(-1)) // true
console.log(Boolean(' ')) // true
console.log(Boolean('hello')) // true
console.log(Boolean({})) // true 


// example of truthy and falsy value
let money = 10
if (money) { // 10 = true
    console.log('I have money') // execute
} else {
    console.log('I have no money')
}



// equality operator
/****
 * = (assign)
 * == or === (equality)
 * != or !== (not equal)
 */
console.log('\n')
console.log(10 == '10')
console.log(10 === '10')
console.log(10 != '10')
console.log(10 !== '10')

// example 
const siamAge = '21'
if (siamAge == 21) { // js does type coercion, not strict
    console.log('He is adult')
} else {
    console.log('He is child')
}
 
// example 
if (siamAge === 21) { // js doesn't type coercion, strict
    console.log('He is adult')
} else {
    console.log('He is child')
}


// input in js 
const favoriteNumber = prompt('What is your favorite number ?') // return as a string
console.log(favoriteNumber) 


// nasted condition



// logical operator (&& , || !)

// logical or (||)
console.log(true || true) // true
console.log(true || false) // true
console.log(false || true) // true
console.log(false || false) // false

// logical and (&&)
console.log(true && true) // true
console.log(true && false) // false
console.log(false && true) // false
console.log(false && false) // false

// logical not (!)
console.log(!true) // false
console.log(!false) // true


// example 1
const saveMoney = 150000
const ownHouse = true
const hasBusiness = false

if (ownHouse && saveMoney >= 200000 || hasBusiness) {
    console.log('Tmr biye hbe')
} else {
    console.log('Tmr biye hbe na')
}


// example 2
const pocketMoney = 200
const timeLeft = 5

if (pocketMoney >= 100 && timeLeft >= 5) {
    console.log('Burger khaite parba')
} else {
    console.log('Burger khaite parba na')
}

// example 3 : leap year program
/* 
year % 400 === 0
year % 4 === 0 && year % 100 !== 0
*/
let year = 2024
if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
    console.log('leap year')
} else {
    console.log('not leap year')
}



// switch case structure
switch(expression) {
    case x:
        // code block
        break;
    case y:
        // code block
        break;
    default:
        // code block
}


// switch case program : Day spelling
let day = "sunday"

switch (day) {
    case "sunday": 
        console.log("Today is " + day)
        break
    
    case "monday": 
        console.log("Today is " + day)
        break
    
    case "tuesday":  
        console.log("Today is " + day)
        break
    
    case "wednesday":  
        console.log("Today is " + day)
        break
    
    case "thursday":  
        console.log("Today is " + day)
        break
    
    case "friday": 
        console.log("Today is " + day)
        break
    
    default:
        console.log("Today is " + day)
    
}

// statement vs expression
/*
 * expression : expression can produce values
 * statement : statement cann't produce values, only manipulates expression
 * 
 */

// expression
let result = 10 - 2 * 3; // produce value

// statement
if (result === 0){} // cann't produce value


// ternary operator: 
// condition    ?	print (true)  :	  print (false)


//find large between two numbers
const num1 = 40
const num2 = 60
const whoIsGreater = num1 > num2 ? `${num1} large` : `${num2} large`
console.log(whoIsGreater)

// example 2 : ternary operator
let yourNumber = 500
yourNumber === 100 ? console.log(yourNumber += 100) : console.log(yourNumber -= 100)


// js CT question
/*
 * what is type conversion and type coercion in js ?
 * defference between (if .. else if ... else) and (if ... if ... else)
 * difference between null and undefined types of js ?
 * 
 */


// what is type conversion and type coercion in js ?

// type conversion
const myNumber = '50'
console.log(Number(myNumber)) // string to number manually conversion

// type coercion
console.log('50' - 10) // string to number automatically conversion



// defference between (if .. else if ... else) and (if ... if ... else)
// if .. else if ... else : only single statement executed
// if ... if ... else : single or multiple statements executed



// difference between null and undefined types of js ?

let myPhone;
console.log(typeof myPhone) // undefined : variable value not assigned

let myPhoneNumber = null; // null : variable value assign as null
console.log(typeof myPhoneNumber) // object

