const name = "histranger"
const repoCount = 50

// console.log(name + repoCount + " value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('histranger-hc-com')
// console.log(gameName[0])
// console.log(gameName.__proto__)


// console.log(gameName.length)
// console.log(gameName.toUpperCase())

console.log(gameName.charAt(2))
console.log(gameName.indexOf('s'))

const newString = gameName.substring(0, 4)
console.log(newString)

const anotherString = gameName.slice(-10, 3)
console.log(anotherString)

const newStringOne = "     histranger    "
console.log(newStringOne)
console.log(newStringOne.trim())

const url = "https://histranger.com/histranger%20boy"
console.log(url.replace('%20', '-'))

console.log(url.includes('sonia'))

console.log(gameName.split(' '))