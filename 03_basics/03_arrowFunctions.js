/*

const user = {
    username: "Soni",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`)

    }
}
user.welcomeMessage()    //  Soni, welcome to website
user.username = "Agrawal"
user.welcomeMessage()    // Agrawal, welcome to website

*/




// Now check the output when you print this

const user = {
    username: "Soni",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`)
        console.log(this)  // 1st 
    }
}
// user.welcomeMessage()  
 /*   Soni, welcome to website
                                {
                                username: 'Soni',
                                price: 999,
                                welcomeMessage: [Function: welcomeMessage]
                                }     */

user.username = "Soni"   // username changed 

// user.welcomeMessage() 
  /*  Soni, welcome to website
                            {
                            username: 'Soni',
                            price: 999,
                            welcomeMessage: [Function: welcomeMessage]
                            }
                            Agrawal, welcome to website
                            {
                            username: 'Agrawal',
                            price: 999,
                            welcomeMessage: [Function: welcomeMessage]
                            }     */


// NOTE:   when print 'this' in outside the object

console.log(this)  // output   {}   --> it will give outout as empty object    ==>  keep in mind kaha pr ky output dega 

/* Note:   when you inspect and then in console if you run console.log(this)  
==>   output will be   
            #    Window {window: Window, self: Window, document: document, name: '', location: Location, …}
   -->  means there output will be a window object

   For interview purpose reason are :
  Node.js treats each .js files as a module. At the top level of a CommonJSmodule, this refers to the module's exports object , so this refers to the object 
 But in case of the browser window is the global object, so this refers to the window 

*/

// ___________________________________________ ARROW FUNCTION  _________________________________



/*
function chai(){
    let username ="Soni"
    console.log(this);
}
chai()  // output ----> error
*/

function chai(){
    let username ="Soni"
    console.log(this.username);
}
chai()   // output  ----> undefined =>  we are not able to use this  inside function 

const chai = function () {
    let username ="Soni"
    console.log(this.username);
}
chai()  // output  ----> undefined



// *********** make arrow function ************ 
  
// remove function keyword and use arrow
/*
const chai = () => {
    let username ="Soni"
    console.log(this.username);  
}
// chai()  // output --> undefined
*/



// arrow function is represented as () => {}

/*
const addTwo = (num1, num2) => {
    return num1 + num2
}
console.log(addTwo(3,4))  // output --> 7
*/


// implicit return(it means to suppose return, there is no need to write return keyword )  --> remove curly braces --> because when we remove curly braces , there is no need to write return keyword but when we use curly braces, there must be return

// const addTwo = (num1, num2) => num1 + num2
// console.log(addTwo(3,4))  // output --> 7


// const addTwo = (num1, num2) => (num1 + num2)
// console.log(addTwo(3,4))  // output --> 7  ---> when we use parentheses , there is no need to write return keyword


const addTwo = (num1, num2) => (num1 + num2)

/*  
  syntax check for both 

  main difference b/w both is use of this keyword
  Normal function
A normal function gets its own this depending on how the function is called.

const person = {
  name: "Rahul",
  greet: function () {
    console.log(this.name);
  }
};

person.greet();
Output: Rahul

Here:
this === person
because the function was called as:
person.greet()

Arrow function
Arrow functions do not have their own this.

They take this from the surrounding/lexical scope.
const person = {
  name: "Rahul"
  greet: () => {
    console.log(this.name);
  }
};

person.greet();
This will generally print:
undefined

because the arrow function does not make this refer to person.

Important rule
Normal function: this depends on how the function is called.
Arrow function: this comes from the surrounding scope.


Another main difference is in emplicit and explicit return 

use chatgpt to know more differences

*/

/* 
curley bracket mein likha toh return keyword likhna parega , 
 single line mein with or without parenthesis mein likha tohh your wish return keyword use kro ya fir nhi kro

Implicit and Explicit return 

Implicit return ==>  without using return keyword
Explicit =>  use return 

While returning the object,  parenthesis is imp 

const employ = () => ({user: "username"})
console.log()

*/ 
// const employ = () => {user: "username"}  // # output --->  undefined 
const employ = () => ({user: "username"}) // so parenthesis is used to return an object
console.log(employ())   // output:  { user: 'username' }

const army = () => ({
    name:"armyname",
    age:25,
    regiment: "Bihar regiment"
})
console.log(army())   // implicit return of object   -->  { name: 'armyname', age: 25, regiment: 'Bihar regiment' }

/*   
     javaScript interprets {} after => as a function body, not an object. So we need parenthesis to return the object.
  NOTE:    const employ = () => ({user: "username"})  --->  understand this what is it written , aage doms mein kaam aayega
*/