// Thee are two ways to create the object 1. using constructor 2.using literals 

// using the constructor   Singleton bnta hai 
// using literals singleton nhi bnta hai   ----> Interview question

// Object.create    -->  constructor method
// const object = {} -->  literals method
//  


// singleton
// Object.create => constructor method to declare objects



// object literals =>  way of declaring objects

const mySym = Symbol("key1")

const JsUser = {        //  keys and values pair 
    name: "Soni",       // name is treated as string
    "full name": "Soni Agrawal",
    mySym: "mykey1",
    [mySym]: "mykey1",  // output as symbol key
    age: 22,
    location: "Bihar",
    email: "soni@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
/* Accessing the object key value
   1. using dot
   2. bracket notation []
   3. accessing both key and value using Object.entries()

   Jsuser.name   --> Soni
   jsuser.age    --> 22

// console.log(JsUser);
// console.log(JsUser.email);
// console.log(JsUser["email"]);

prblm arises when 

  const Jsuser = {
    name: "Soni",
    full name: "Soni Agrawal",
    age: 22,
    location: "Bihar",
    email: "soni@google.com",
    isLoggedIn : false,
    lastLoginDays: ["Monday", "saturday"]
}

 1st use of Bracket notation  -- >  when we have to excess full name   (check object how full name is declared)

console.log(Jsuser.full name) ==> it will show error    --> We can excess it only through  bracket notation  

console.log(Jsuser["full name"])    # Soni Agrawal 

// console.log(JsUser.full name);  // never accessed get error bcz full name is inside double quotes
// console.log(JsUser["full name"]);



2nd use -->        When to access the Symbol     (In interview it is asked how will you use symbol in object and how to access it or take a symbol add it in object and print it)

const mySym = Symbol("key1")

const Jsuser = {
    name: "Soni",
    "full name": "Soni Agrawal",
    mySym: "key1",                 // symbol added 
    age: 22,
    location: "Bihar",
    email: "soni@google.com",
    isLoggedIn : false,
    lastLoginDays: ["Monday", "saturday"]
}

// console.log(JsUser.mySym); #key1  -->    it is not a symbol it is just an string got printed although yo will get output : key1  but in object Jsuser symbol is not added directly like other key-value pairs  mySym: "key1"  
you can check it by checking datatype of mySym => it is not the right way to declare symbol

 add:   [mySym]: "key1"
 access:  Jsuser[mySym]     # key1

 NOTE:  typeof(Jsuser[mySmy])  or  typeof Jsuser[mySym]     ==>  both are correct syntax for typeof()

 typeof(Jsuser[mySmy])   #   string 
 typeof [mySym]          #   symbol     --> value of symbol is string 
   */
// console.log(typeof JsUser.mySym);  // string

/* Now correct way to add and access symbol
syntax:  to add symbol
 Symbol is added and can be accessed using the bracket notation only 

  add:   [mySym]: "key1"
  access:  Jsuser[mySym]     # key1

 NOTE:  typeof(Jsuser[mySmy])  or  typeof Jsuser[mySym]     ==>  both are correct syntax for typeof()

 typeof(Jsuser[mySmy])   #   string 
 typeof [mySym]          #   symbol     --> value of symbol is string 
   */

 // console.log(JsUser[mySym]);  // it is right way to declare symbol
// console.log(typeof JsUser.mySym); 


// Changing the value of object
// JsUser.email = "soni@youtube.com"  // to change the value of object

/* 
How to lock the key-value which you don't want to get changed    ->  use    Object.freeze(Object_name.key)
          Object.freeze(Jsuser.email) 
          */

// Object.freeze(JsUser)  // to freeze the value after this we are unable to change the value
// JsUser.email = "soni@microsoft.com"
// console.log(JsUser);


// Declaring function inside the object 

JsUser.greeting = function(){
    console.log("Hello JS user");
}
// console.log(JsUser.greeting);  //  # output:    function(anonymous)
console.log(JsUser.greeting());  // output:  Hello JS user


 /*
         Important    String Interpolation  -->  Done by using back tick (` ${} `)

     */
/* Note:  when we have use 'this' in an object, its main use is to refer to the current object from inside one of its method  
*/

  /*  let user ={
    name:"Soni",
    age:22,
    greet: function(){
    console.log(` My name is ${this.name} `)  // here this refers the above object
    }
 }
*/


JsUser.greeting2 = function(){
    console.log(`Hello JS user, ${this.name}`);
}
console.log(JsUser.greeting2);
console.log(JsUser.greeting2()); 


// Inside an object's method, this refers to the object that is calling the method.

/* const user = {
    name: "Ankit",

    welcome: function() {
        console.log(this.name)
    }
}

user.welcome()      # output   Ankit

*/


/* const user1 = {
    name: "Ankit",
    sayName: function() {
        console.log(this.name)
    }
}

const user2 = {
    name: "Rahul",

    sayName: function() {
        console.log(this.name)
    }
}

user1.sayName()
user2.sayName() 
*/

/* output:   Ankit
          Rahul
*/

 /*  this.name

gets the name from the object currently calling the method.

For user1:

this → user1
this.name → "Ankit"

For user2:

this → user2
this.name → "Rahul"
*/

