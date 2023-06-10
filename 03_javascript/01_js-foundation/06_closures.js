/// closures
function fridge() {
    let coke = 6

    return function() {
        coke--
        console.log(`${coke} Coke Left`) 
    }
}

const drinks = fridge() // fridge() function ta return kore vanish hoye gece , but tar akta reference , tar theke utpotti howa drinks() function ke diye gece. thats why drinks() function access coke variable.
console.log(drinks)
drinks()
drinks()
drinks()

const drinks2 = fridge()
drinks2()
drinks2()


// closures : notun jei function ta create hbe, oitar birthplace e jei function ta return kore debe, oi return kora function er joto variable ache (variable environment er) sob kichur reference notun create howa function ta rekhe debe.

// closures definitions : A closure gives a function access all variables of its parent function, even after that function has returned.