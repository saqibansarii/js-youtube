//for of loop

// ["" , "", ""] array for string
// [{}, {}, {}] array for object

const arr = [ 1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello world"
for (const greet of greetings) {
    if(greet == " ")
    {
        continue;
    }
    // console.log(`Each char is ${greet}`)
}


// Maps 
// Maps is just like arrays

const map = new Map()
map.set('Pak', "Pakistan")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('Pak', "Pakistan")//contain unique value and follow order
// console.log(map)


for (const [key, value] of map) {
    // console.log(key, `:-`, value);
}


//object formation
// for of loop is not valid for object

// const myObject = {
//     game1: 'NFS',
//     game2: 'spiderman'
// }

// for (const [key, value] of myObject) {
//     console.log(key, `:-`, value);
// }


