// JS : JS is a high level , multi paradine, interprated, object oriented, functional programming language.

console.log("Hello JS")
console.log('Hello JS')
console.log(`Hello JS`)

// variables : let varName = value;  [don't use var keyword for declaration a variable & use camelCase for variable names]
let myName = 'Mostafizur Rahman'
console.log('Hello ' + myName) // string concatenation
console.log(`Hello ${myName}`) // template literal : backtick

console.log('I am Mostafizur \nand \nI am a \ndeveloper')
console.log('\n')
console.log(`I am Mostafizur
and
I am a
developer`)


// data types : (value has type, not variable)
// typeof varName : (variable er datatype janar jonno use kora hoi)
// kono variable er value null , but typeof diye sei variable check korle dataType dekhabe object. this is a bug.
let age = null
console.log(typeof age) // object
console.log(typeof NaN) // number
console.log(typeof Number('I love you'))

// const : re-assign not possible in a constant variable.  (obossoi value assign kora lagbe const variable declaration er somoi)
const myAge = 25
console.log(myAge)


// arithmetics operator
// assignment operator
// comparison operator

// if else : multiple output dorkar hole sudhu if , single output dorkar hole else if use korbo

// grade calculation program


// type conversion (manually) and coercion (autometically)
console.log(10 + 10)
console.log(20 - 10)
console.log(20 * 5)
console.log(20 / 3)
console.log(20 % 3)

console.log('Baby' + 20)
console.log('Baby' - 20)
console.log('Baby' * 20)
console.log('Baby' / 20)
console.log('Baby' + ' ' + 'Babu')
console.log('Baby' - ' ' - 'Babu')

console.log(200 - '100') // coercion (autometically)
console.log(200 * '100') // coercion (autometically)
console.log(200 / '100') // coercion (autometically)
console.log('200' + 100)
// note : + and string thakle som kichu string banabe.


// game 1
let a = '1' + 1
a -= 1
console.log(a)

// game 2
let x = 2 + 3 + 4 + '5'
x += 5
console.log(x)

// game 3
let y = '10' - '5' - '3' - 2 + '5'
y -= 10
console.log(y)

// game 4
let z = 1 + 1 - 1 - '1' + '10' - 20
z += '10'
z--
console.log(z)



// truthy value and falsy value
// falsy value : 0 , '' , undefined , null , NaN
console.log(Boolean(0))
console.log(Boolean(''))
console.log(Boolean(undefined))
console.log(Boolean(null))
console.log(Boolean(NaN))

// truthy value
console.log(Boolean(1))
console.log(Boolean(' ')) 


// equality operator
/****
 * = (assign)
 * == or === (equality)
 * != or !== (not equal)
 */

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
 
// nasted condition



// logical operator (&& , ||)
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

if( pocketMoney >= 100 && timeLeft >= 5) {
    console.log('Burger khaite parba')
} else {
    console.log('Burger khaite parba na')
}

// example 3 : leap year program

// switch case


// statement vs expression
/*
 * expression : expression can produce values
 * statement : statement cann't produce values, only manipulates expression
 * 
 */


// js CT question
/*
 * what is type conversion and type coercion in js ?
 * defference between (if .. else if ... else) and (if ... if ... else)
 * difference between null and undefined types of js ?
 * 
 */