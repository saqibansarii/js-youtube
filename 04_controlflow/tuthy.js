const userEmail = []
if(userEmail){
    console.log("Got the user Email")
}
else{
    console.log("Don't have user Email")
}


// falsy values 
// false, 0, -0, BigInt 0n, "", null, undefined, Nan     All these values are falsy vales


// turthy values 
// "0", 'false', " ", [], object {}, function(){}


// if(userEmail.length === 0){
//     console.log("Array is empty")
// }

const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    console.log(`Object is empty`)
}


//Nullish Coalescing operator (??): null and undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ??15
val1 = null ?? 18 ??8

console.log(val1)


//Terniary operator

// condition ? ture : false
const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")