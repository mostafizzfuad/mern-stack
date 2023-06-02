// object declaration : literal
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

