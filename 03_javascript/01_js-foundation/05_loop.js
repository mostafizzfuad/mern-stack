// write your name 10 times using for loop
for (let i = 0; i < 10; i++) {
    console.log('Mostafizur Rahman Fuad')
}

// write a program to print 1 - 20
for (let i = 1; i <= 20; i++) {
    console.log(i)
}

// 10 20 30 40 50 60 70 80 90 100
for (let i = 10; i <= 100; i += 10) {
    console.log(i)
}


// write a program to print 10 - 1
for (let i = 10; i > 0; i--) {
    console.log(i)
}

// traverse an array
const friendsArr = [
    'Siam',
    'Junnun',
    'iMac',
    'iPhone 15',
    'Programmer',
    2023 - 1998,
    ['Fuad', 'Rafiq', 'Bappy', 'Ratul'],
    true,
    'Dancer'
]
for (let i = 0; i < friendsArr.length; i++) {
    console.log(friendsArr[i])
}

// sum of array elements using for loop
const evenNumbers = [2, 4, 6, 8, 10, 12, 14, 16]
let sum = 0
for (let i = 0; i < evenNumbers.length; i++) {
    sum += evenNumbers[i]
}
console.log(sum)


// duplicate an array using for loop
const arr = [10, true, 21, 'a', 'b', false, 55, true, 'c']
console.log(arr)

const arr2 = []
for (let i = 0; i < arr.length; i++) {
    // arr2.push(arr[i])
    arr2.push(typeof arr[i])
}
console.log(arr2)


// calculate ages using for loop
const years = [1994, 1998, 2001, 1988, 1976]
const ages = []
for (let i = 0; i < years.length; i++) {
    ages.push(2023 - years[i])
}
console.log(ages)


// continue : skip kora
// break : loop break kora
for (let i = 0; i < 15; i++) {
    if (i % 3 === 0) continue
    console.log(i)
    if (i === 10) break
}


// star pattern : nasted loop
/*
 *****
 ***** 
 *****
 *****
 *****
 */
let n = 5
let star = ''
for (let row = 0; row < n; row++) {
    for (let col = 0; col < n; col++) {
        star += '*'
    }
    star += '\n'
}
console.log(star)

// while loop
let i = 0
while (i < 10) {
    console.log(i)
    i++
}