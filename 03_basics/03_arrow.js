const user = {
    username: "stranger",
    price: 1000,

    welcomeMessage: function(){
        console.log(`${this.username}, Welcome to website`);
        console.log(this)
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()
// console.log(this)

// function chai(){
//     let username = "stranger"
//     console.log(this.username)
// }
// chai()



// const chai = function () {
//     let username = "stranger"
//     console.log(this.username)
// }

// chai()




// Arrow function

// const chai =  () => {
//     let username = "stranger"
//     console.log(this)
// }

// chai()


// bsic arrow function
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(3, 4))




//implecit return don't have to write curely brackets and return keyword
// const addTwo = (num1, num2) =>  num1 + num2
// console.log(addTwo(3, 4))


// one more method which is widely use in react 
// const addTwo = (num1, num2) =>  (num1 + num2)
// console.log(addTwo(3, 4))


// if you want to return object 
const addTwo = (num1, num2) =>  ({username: "stranger"})
console.log(addTwo(3, 4))