// singleton
//object.create
// you can create the objects by writing "object.create" it is also known as singleton


//object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Histranger",
    "full name": "Stranger Boy",
    mySym: "mykey1",
    age: 18, 
    location: "Multan",
    email: "histranger@google.com",
    isLoggedIn: false,
    lastLoggedInDays: ["Monday", "Friday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser.mySym)
// console.log(typeof mySym)
// console.log(JsUser)

JsUser.email = "histranger@youtube.com"
// console.log(JsUser.email)

//if you want to block any changes in the keys values of object then use the following freeze method

// Object.freeze(JsUser)
JsUser.email = "histranger@ping.com"
// console.log(JsUser.email)


// function 1
JsUser.greeting = function(){
    console.log("Hellog js users")
}

console.log(JsUser.greeting());

// function 2
JsUser.greetingto = function(){
    console.log(`Hello js user, ${this.name}`)
}

console.log(JsUser.greetingto())