// object declaration : literal syntax
const student = {
    firstName: 'Mostafizur',
    lastName: 'Rahman',
    age: 2023 - 1998,
    job: 'Programmer',
    friends: ['Rifat', 'Walid', 'Masud', 'Bappy'],
    isGoodAtGames: true,
}
console.log(student)

// finding properties using two methods (dot method, bracket notation)
// dot method
console.log(student.firstName)
console.log(student.firstName, student.job)
console.log(student.age)
console.log(student.friends[2])
console.log(student.isGoodAtGames)

// bracket notation
console.log(student['firstName'])
console.log(student['friends'][0]) 

// dynamic string using template literal :
// Mostafizur is a programmer and he has 4 friends. Bappy is his best friend.
console.log(`${student.firstName} is a ${student.job} and he has ${student.friends.length} friends. ${student.friends[3]} is his best friend.`)



// exercise : run this exercise in browser console
/***********************
const interestIn = prompt('What do you know about this student ?')
if (student[interestIn]) {
    console.log(student[interestIn])
} else {
    console.log('Invalid Key!!')
}
*************************/

const collageStudent = {
    firstName : 'Eishita',
    lastName : 'Afrin',
    birthYear : 1998,

    calculateAge : function() {
        return 2023 - this.birthYear // method ke je call kore, this keyword take indicate kore [method je call korbe this tar] 
        /// arrow function doesn't have this keyword
    },

    greetings : function() {
        return `Hello ${this.firstName}` /// arrow function doesn't have this keyword
    }
}

console.log(collageStudent.calculateAge()) // [method je call korbe this tar, jemon : akhane calculateAge() method ke collageStudent object ta call korece, tai this keyword ta akhane collageStudent object ke indicate korce]
console.log(collageStudent.greetings())

// when we will change collageStudent2.property . it's also change the collageStudent.property (collageStudent2 object ta collageStudent er reference hisebe memory te kaj korce)
const collageStudent2 = collageStudent
collageStudent2.firstName = 'Irina' // muted or re-assigned
console.log(collageStudent)
console.log(collageStudent2)
console.log(collageStudent2.greetings()) // function er this keyword akhn collageStudent2 ke indicate korteche





/// arrow function doesn't have this keyword
/// regular function er moddhe this undefined
/// object er moddhe this keyword available. so, object er moddhe kokhonoi arrow function use kora jabe na.