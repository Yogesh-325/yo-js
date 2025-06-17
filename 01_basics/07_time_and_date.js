// Dates 

let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toUTCString())
// console.log(myDate.toTimeString())

// let myCreateDate = new Date(2025, 05, 16)
// let myCreateDate = new Date(2025, 05, 16, 22, 15)
// let myCreateDate = new Date("2025-6-16")
let myCreateDate = new Date("6-16-2025")
// console.log(myCreateDate.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getTime());
// console.log(newDate.getDay());
// console.log(newDate.getMinutes());
// console.log(newDate.getTimezoneOffset());
// console.log(newDate.getFullYear());

console.log(newDate.toLocaleString('default', {
    weekday: "long",
    
}));