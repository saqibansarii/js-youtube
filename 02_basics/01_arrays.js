//arrays

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["Hulk", "spiderman", "superman"]
const myArr2 = new Array(1, 2, 3, 4)

// console.log(myArr[1])

// arrays Methods

// myArr.push(6)
// myArr.pop()
// console.log(myArr)

// myArr.unshift(9)
// myArr.shift()
// console.log(myArr)



// console.log(myArr.includes(3));
// console.log(myArr.indexOf(3))


// const newArr = myArr.join()

// console.log(myArr)
// console.log(typeof(newArr))


//slice and splice

console.log("A", myArr)

const myn1 = myArr.slice(1, 3)
console.log(myn1)

console.log("B", myArr)

const myn2 = myArr.splice(1, 3)
console.log(myn2)

console.log("C", myArr)