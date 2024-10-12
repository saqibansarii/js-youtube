function sayMyName(){
    console.log("stranger")
}

// sayMyName()

// function addTwoNumbers(num1, num2){
//     console.log(num1 + num2)
// }

// const result = addTwoNumbers(3, 4)
// console.log("Result: ", result)




function addTwoNumbers(num1, num2){
    let result = num1 + num2
    return result
}
const result = addTwoNumbers(3, 4)
// console.log("Result: ", result)


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("please enter a username")
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("stranger"))



function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 1000))


const user = {
    username: "stranger",
    prices: 200
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and the price is ${anyobject.price}`);
}
// handleObject(user)
handleObject({
    username: "boy",
    price: 500
})


const myNewArray = [200, 300, 400, 500]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray))