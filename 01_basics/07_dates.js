//Dates

let mydate = new Date()
// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toISOString());
// console.log(mydate.toLocaleDateString());
// console.log(mydate.toLocaleString());
// console.log(mydate.toLocaleTimeString());
// console.log(mydate.toTimeString());
// console.log(typeof mydate)

// let myCreatedDate = new Date(2024, 0, 12)
// let myCreatedDate = new Date(2024, 0, 12, 5, 3)

// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toString());
// console.log(myCreatedDate.toLocaleString());

let myCreatedDate = new Date("2024-01-13")
// console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/10000));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

newDate.toLocaleString('default', {
    weekday:"long",
})