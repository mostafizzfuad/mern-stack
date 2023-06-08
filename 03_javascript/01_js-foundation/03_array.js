// array literal 

/*********
const friend1 = 'Mostafizur'
const friend2 = 'Junnun'
const friend3 = 'Siam'
const friend4 = 'Masud'
***********/
const friends = ['Mostafizur', 'Junnun', 'Siam', 'Masud'] // array literal syntax
console.log(friends)


/*********
const years = [1990, 1993, 2001, 2002, 2003] // array literal syntax
***********/

// array function
const years = new Array(1990, 1993, 2001, 2002, 2003) // array function syntax
console.log(years)

// finding elements in array by index
console.log(years[2])
console.log(years[5]) // undefined : because 5 no index e kono value nei
console.log(years[years.length - 1]) // find last element in array
 
// array muted / re-assigned elements
years[1] = 1998
console.log(years[1])

// array length
console.log(friends.length)
console.log(years.length)

// type of array
console.log(typeof years)


// exercise
const birthYears = [1998, 2000, 2001, 2002]
const ageCalculation = function (birthYear) {
    return 2023 - birthYear
}

const age1 = ageCalculation(birthYears[1])
console.log(age1) // 23

const age2 = ageCalculation(birthYears[4])
console.log(age2) // 2023 - undefined = NaN



// array push, unshift, pop, shift, indexOf, includes
const lastBenchers = ['Siam', 'Mostafizur', 'Junnun', 'Rasel', 'Sakib']
console.log(lastBenchers)
console.log(lastBenchers.length)
console.log(lastBenchers[1])
  
lastBenchers.push('Hasib') // array push - add element in the end
console.log(lastBenchers)
console.log(lastBenchers.length)

lastBenchers.unshift('Fuad') // array unshift - add element at the beginning
console.log(lastBenchers)
console.log(lastBenchers.length)

lastBenchers.pop() // array pop - remove element from the end
console.log(lastBenchers)
console.log(lastBenchers.length)

lastBenchers.shift() // remove element from the beginning
console.log(lastBenchers)
console.log(lastBenchers.length)


// finding index by element name
console.log(lastBenchers.indexOf('Junnun'))
console.log(lastBenchers.indexOf('Mostafizur'))
console.log(lastBenchers.indexOf('Rifat')) // jei element er index amra find korte chacchi sei element jodi array te na thake tahole tar index dekhabe -1

// finding element : element jodi thake tahole result true otherwise false
console.log(lastBenchers.includes('Siam')) // true
console.log(lastBenchers.includes('Rifat')) // false

// exercise using includes()
if (lastBenchers.includes('Siam')) {
    console.log('He is our Sheikh')
} else {
    console.log('Unknown')
}

// exercise using indexof()
if (lastBenchers.indexOf('Siam') !== -1) {
    console.log('He is our Sheikh')
} else {
    console.log('Unknown')
}


// exercise
/******************
 * Long Jump
 * 2 teams : lionsClub, dragonsClub
 * team member per team : 5
 * lionsClub (14, 13, 17, 15, 16)
 * dragonsClub (18, 13, 10, 8, 12)
 * 
 * conditions : 
 * winner : average jump distance >= 15
 * draw : lionsClub === dragonsClub , both team has >= 15
 ******************/
const scoreLions = (14 + 13 + 17 + 15 + 16) / 5
console.log(scoreLions)
const scoreDragons = (18 + 13 + 10 + 8 + 12) / 5
console.log(scoreDragons)

if (scoreLions === scoreDragons && scoreLions >= 15 && scoreDragons >= 15) {
    console.log('Draw !!')
} else if (scoreLions > scoreDragons && scoreLions >= 15) {
    console.log('Winner is Lions!!')
} else if (scoreDragons > scoreLions && scoreDragons >= 15) {
    console.log('Winner is Dragons!!')
} else {
    console.log('Match Dismiss !!')
} 