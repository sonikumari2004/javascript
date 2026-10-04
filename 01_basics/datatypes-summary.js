// Primitive Type

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

// const score = 100
// const score = false
// const scoreValue = 100.3
// const isLoggedIn = false
// const outsideTemp = null
// console.log(typeof outsideTemp);  // object bcz datatype of null is object
// let userEmail;

// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id === anotherId); // false


// const bigNumber = 34566788844363n
// console.log(typeof bigNumber); // bigint


// Reference Type (Non primitive)  // dataype = object
// Array, Objects, Functions

// const heros = ["shaktiman", "naagraj", "doga"];  // arrays
// console.log(typeof heros);  // object


// let myObj = {
//     name: "soni",
//     age: 22,
// }    //object

// console.log(typeof myObj);


// const myFunction = function() {   
//     console.log("Hello world");
// }  // function
// console.log(typeof myFunction);







// ++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

//Stack (Primitive)
// let myCollegename = "DCE Darbhanga"

// let anothername = myCollegename
// anothername = "MIT Muzzaffarpur"  

// console.log(myCollegename);
// console.log(anothername);



// Heap (Non-Primitive)

let user1 = {
    email: "user@google.com",
    upi: "user@ybl"
}

let user2 = user1

user2.email = "soni@google.com"
console.log(user1.email);  // reference
console.log(user2.email); 