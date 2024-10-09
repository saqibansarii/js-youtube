// Primitive datatypes  (call by value)
// 7 types of primitive datatypes
//String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outSideTemp = null
let userEmail 

const id = Symbol('123')
const anotherId = Symbol('123')
//console.log(id === anotherId)

const bigNumber = 4353803853545356456n



//Non Primitive  datatypes  (call by reference)
//Array, Objects, Functions

const heros = ["drstrange", "hulk", "spiderman"]

let myObj = {
    name: "stranger",
    age: 23,
}

const myFunction = function(){
    console.log("Hello World")
}

//console.log(typeof myFunction)



//************************************** 

// Memory is of two types
//Stack memory (Primitive), Heap memory (Non-Primitive)

let myYoutubename = "kiddlytales"
let anothername = myYoutubename
anothername = "funnyflickers"
//console.log(myYoutubename)
//console.log(anothername)


let userOne = {
    email: "user@google.com",
    uname: "user"
}

let userTwo = userOne

userTwo.email = "stranger@google.com"
console.log(userOne)
console.log(userTwo)