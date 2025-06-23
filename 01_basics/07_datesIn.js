// Dates 

let myDate = new Date()
console.log(myDate); // gives coded date format

console.log(myDate.toString()) // gives more cleaner and readable format

console.log(myDate.toTimeString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleString());


let myCreatedDate = new Date(2023, 0, 23) // we can also add time by another qauma
// also first month is denoted by 0
console.log(myCreatedDate.toDateString()); // but than you also have to change to locale string over here

let myCreatedDate2 = new Date("01-14-2023")
console.log(myCreatedDate2.toDateString())

let myTimeStamp = Date.now()

console.log(myTimeStamp);

let newDate = new Date()
console.log(newDate.getMonth() + 1);

// `${newDate}`

console.log(newDate.toLocaleString('default', {weekday:"long"}))