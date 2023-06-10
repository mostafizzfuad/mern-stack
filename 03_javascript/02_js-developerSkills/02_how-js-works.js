// scoping 
// lexical scoping

// scope : space or area or environment in which a certain variable is declared.

/*** types of scope :
	- global scope
	- function scope
	- block scope
*********************/
const herName = 'Eishita' // declare .. global scope

function doMath(x, y) {
    const sum = x + y // function scope
    return sum
} 
doMath(5,3) // if use 'use strict' , then every functions turned into block scope.

if (herName === 'Eishita') {
    const herName = 'Irina' // block scope
    console.log(herName)
} else {
    console.log(herName)
}


/// scope chain: its a process, jetar maddhome variable search kore ana hoi.
/// scope : jekhane variable ta declare kora hoi
/// scope of a variable : jekhan theke variable ke access kora hoi (accessable areas)
/// variable lookup : jei system follow kore variable ke search kora hoi (vitor theke bahir / child theke parent er dike kaj korbe)

// scope chain er moddhe amra variable lookup use kore akta variable ke khuji

const myName = 'Mostafizur'

function first() {
    const age = 25

    if (age >= 18) {
        const NID = true
        var passport = true // var variable jei function er moddhe ache , sei function ta hocche var variable er scope. first() function er jekono jaiga theke var variable ta accessable.
    }

    // console.log(passport) // accessable
    

    function second() {
        const job = 'Programmer'
        console.log(`${myName} is a ${age} years old and he is a ${job}`)
    }
    second()
}
first()




// hoisting : jei process follow kore, declaration er upore uporei / agei access kora jacche.
// function declaration : hoisting supported
// var variable : hoisting supported but value undefined
// let and const variable : hoisting not supported
// temporal dead zone (TDZ) : let / const varable er scope er jei area te tader ke access kora jabe na , sei area ta oi variable er TDZ.

/***** TDZ level 
 * line -- n
 * 1 ta function -- 2n
 * 2 ta function -- 2n^2
 * 3 ta function -- 2n^3
*/