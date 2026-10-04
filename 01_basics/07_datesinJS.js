// Dates

// let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2026, 9, 4)
// console.log(myCreatedDate.toDateString());


// let myCreatedDate = new Date(2026, 9, 4, 12, 3)
// console.log(myCreatedDate.toLocaleString());

// let myCreatedDate = new Date("2026-10-04")
// console.log(myCreatedDate.toLocaleString());


// let myCreatedDate = new Date("2026-10-04")
// console.log(myCreatedDate.getTime());

// let myTimeStamp = Date.now()
// console.log(myTimeStamp);

// console.log(Date.now());
// console.log(Date.now()/1000);
// console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth());
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

console.log(newDate.toLocaleString('default', {
    weekday: "long"
}));
