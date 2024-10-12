//scope of variables
let a = 300
if(true){
    let a = 10
    const b = 20
    var c = 30
    // console.log("inner :", a)
}

// console.log(a)
// console.log(b)
// console.log(c)


//nested scope

function one(){
    const username = "stranger"

    function two(){
        const website = "youtube"
        console.log(username)
    }
    // console.log(website)
    //two()
}
one()


// if else statement

if (true){
    const username = "stranger"
    if(username === "stranger"){
        const website = " Youtube"
        // console.log(username + website)
    }
    // console.log(website) wrong scope
    // console.log(username)
}


//  **************** interesting*******************


console.log(addone(5))
function addone(num){
    return num + 1
}



const addTwo = function(num){
    return num + 2
}
console.log(addTwo(5))