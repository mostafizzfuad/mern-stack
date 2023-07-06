/// dom manipulations
/************* 
 * 1. selecting elements
 * 2. styling elements
 * 3. creating elements
 * 4. node traversal
 * 5. event handlers
****************/


/****** 1. selecting elements ********/
// getElementById() : fast, rarely used
const title = document.getElementById('mini-heading')
// console.log(title)
const secondTitle = document.getElementById('second-heading')
// console.log(secondTitle)


// getElementsByClassName()
const country = document.getElementsByClassName('country')
// console.log(country)


// getElementsByTagName()
const input = document.getElementsByTagName('input')
// console.log(input)


// querySelector() : most of the cases using it
const title2 = document.querySelector('#mini-heading') // id
// console.log(title2)
const btn = document.querySelector('.btn') // class
// console.log(btn)
const h2 = document.querySelector('h2') // tag
// console.log(h2)
const country2 = document.querySelector('.country') // class
// console.log(country2) // show only first country


// querySelectorAll()
const country3 = document.querySelectorAll('.country') // class
// console.log(country3) // show all country

// most used : getElementById(), querySelector(), querySelectorAll()





/****** 2. styling elements ********/
const title3 = document.querySelector('#mini-heading')
// title3.style.color = 'crimson'
// title3.style.backgroundColor = 'yellow'
// title3.style.fontSize = '3rem'

const countries = document.querySelectorAll('.country')
for (let i = 0; i < countries.length; i++) {
    // countries[i].style.color = 'blue'
    // countries[i].style.fontSize = '2rem'
}




/****** 3. creating elements ********/
// const ul = document.querySelector('ul')

const li = document.createElement('li')
const li2 = document.createElement('li')
// li.innerText = 'Srilanka'
li.textContent = 'Srilanka'
li2.textContent = 'Japan'
// ul.append(li)
// ul.appendChild(li)
// ul.insertAdjacentElement('beforeend', li)
// ul.insertAdjacentElement('beforeend', li2)
// ul.insertAdjacentElement('beforebegin', li)
// ul.insertAdjacentElement('afterend', li) 
// ul.insertAdjacentElement('afterbegin', li)

// most used : afterend and afterbegin

// modify content :
const firstCountry = document.querySelector('.country')
firstCountry.textContent = 'BD'
// console.log(firstCountry)
// console.log(firstCountry.textContent)

// console.log(ul.innerHTML) // innerHTML : ul.innerHTML means, ul tag er moddhe ki ki ache sob show korbe tag soho.

const container = document.querySelector('.container')
// console.log(container)
/*********** 
const myCountry = 'Bangladesh'
container.innerHTML = `
    <h1 id="mini-heading">Countries</h1>
        <h2 id="second-heading">List</h2>
        <ul>
            <li class="country">${myCountry}</li>
            <li class="country">USA</li>
            <li class="country">India</li>
            <li class="country">Canada</li>
            <li class="country">Uk</li>
        </ul>
        <input type="text" class="input">
        <button class="btn">Add Country</button>
`
**************/
// most used : textContent - text only , innerHTML - text soho tag show korbe


// add attribute
const h1 = document.querySelector('#mini-heading')
// h1.setAttribute('class', 'main-heading') // set attribute width value
// h1.setAttribute('width', '300px') // set attribute width value
// console.log(h1.getAttribute('width')) // show attribute's value
// h1.removeAttribute('class') // remove attribute
// h1.removeAttribute('width') // remove attribute

h1.classList.add('main-heading') // add class attribute with value
h1.classList.add('first-heading') // add class attribute with value
// h1.classList.add('main-heading', 'first-heading') // two in one
h1.classList.remove('main-heading') // remove class attribute with value

// toggle : akbar add => akbar remove
const a = 10
if (a === 10) h1.classList.toggle('main-heading') // if a===10 then add main-heading

console.log(h1.classList.contains('mini-heading')) // false
console.log(h1.classList.contains('main-heading')) // true

let b = 10
if (h1.classList.contains('main-heading')) b += 5
console.log(b) // 15


// remove elements 
// const h2 = document.getElementById('second-heading')
// h2.remove() // don't do this



/****** 4. node traversal ********/
const ul = document.querySelector('ul')

console.log(ul.parentElement)
console.log(ul.parentNode)
console.log(ul.childNodes)
console.log(ul.children)
console.log(ul.firstChild)
console.log(ul.lastChild)
console.log(ul.firstElementChild)
console.log(ul.lastElementChild)
// siblings
const heading1 = document.querySelector('#mini-heading')
console.log(heading1.nextSibling)
console.log(heading1.nextElementSibling)
console.log(heading1.previousSibling)
console.log(heading1.previousElementSibling)



/******** 5. event handlers ********/
// event handler : higher order function (jara callback function ke argument hisebe nay)
// jei button e click korbo, sei button e event handler add hbe
const btn2 = document.querySelector('.btn')
const input2 = document.querySelector('.input')
const ul2 = document.querySelector('ul')

// btn2.addEventListener(eventType, callbackFunction)
btn2.addEventListener('click', function() {
    // console.log('clicked')
    const li = document.createElement('li') // create element
    li.classList.add('country') // add class into element
    li.textContent = input2.value // always string
    // li.textContent = Number(input2.value) * 2 // convert number
    ul2.append(li) // append element
    input2.value = '' // clear input field
}) 