//object formation
// for in loop is for object printing
const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'rubby',
    swift: 'swift by apple'
}

for (const key in myObject) {
    // console.log(`${key} stands for ${myObject[key]}`);
        
    }

// for in loop is also used for arrays
const programming = ["js", "rb", "py", "cpp", "java"]
for (const key in programming) {
    // console.log(programming[key])
}



//for in loop with map
// const map = new Map()
// map.set('Pak', "Pakistan")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('Pak', "Pakistan")

// for (const key in map) {
//     console.log(key)
// }