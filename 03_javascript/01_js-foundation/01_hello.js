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


// game 
let a = '1' + 1
a -= 1
console.log(a)

let x = 2 + 3 + 4 + '5'
x += 5