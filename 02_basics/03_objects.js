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
// console.log(JsUser);
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser.full name);  // never accessed get error bcz full name is inside double quotes
// console.log(JsUser["full name"]);

// console.log(JsUser.mySym);  // it is not the right way to declare symbol
// console.log(typeof JsUser.mySym);  // string

// console.log(JsUser[mySym]);  // it is right way to declare symbol
// console.log(typeof JsUser.mySym); 

// JsUser.email = "soni@youtube.com"  // to change the value
// Object.freeze(JsUser)  // to freeze the value after this we are unable to change the value
// JsUser.email = "soni@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
// console.log(JsUser.greeting);  // function(anonymous)
console.log(JsUser.greeting());  // output print


JsUser.greeting2 = function(){
    console.log(`Hello JS user, ${this.name}`);
}
console.log(JsUser.greeting2);
console.log(JsUser.greeting2()); 
