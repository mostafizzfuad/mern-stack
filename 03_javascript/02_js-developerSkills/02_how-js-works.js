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


/// scope chain
