//if statement
const isUserLoggedIn = true
const temperature = 41

// if(temperature < 50) {
//     console.log("Temprature is less than 50")
// }
// else{
//     console.log("Temperature is greater than 50")
// }


// const score = 200
// if(score > 100){
//     let power = "fly"
//     console.log(`User Power: ${power}`)
// }

// console.log(`User Power: ${power}`) *******wrong method



const balance = 1000
// if(balance > 500)console.log("test");


// if(balance < 500){
//     console.log("less than")
// }
// else if(balance < 750){
//     console.log("less than")
// }
// else if(balance < 900){
//     console.log("less than")
// }
// else{
//     console.log("less than 1200")
// }



const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard){
    console.log("Allow to buy course")
}

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("user logged in")
}