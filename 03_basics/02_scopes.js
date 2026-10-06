/*  
        SCOPE:  
    It is the area of a program where a variable, function or other identifier can be accessed or used 

    {} --> this is scope

global , block and local scope



{
   ->block scope is surroundd by {} , such as an if, for or while
-> inside it is block scope 
 -> can be used inside only
}

// Local scope -->  A variable declared inside a function is local to that function

*/

/*
    let a = 5
    const b = 7
    var c = 3 

    console.log(a)    # 5 
    console.log(b)    # 7
    console.log(c)    # 3



// but when it is present inside a scope 

if(true){
let a = 5
const b = 7
var c = 3 
}
console.log(a)   //  # error: a is not defined
console.log(b)   // # error: b is not defined 
console.log(c)   // # 3   ==> no error  therefore var is avoided 

// Why var is avoided -->  var gets out of the scope therefore it is avoided to use it .


let a = 100
if(true){
let a = 5
const b = 7
}
console.log(a)  # 100 not 5

*/

/* 
      //  Nested scope

 function one (){
   const username = "Soni"

   function two(){
   const website = "Youtube"
   console.log(username)
   }
 
   console.log(website)  // it will give error because website is a local variable of two function , so it can't be used outside the two()

 two ()    // -->  since upper wala code error de diya tohh yahh chalega hi nhi . If wo nhi hota then ye execute hota and username print krta 
 }

one()

*/



/* if (true) {
    const username = "soni"
    if (username === "soni") {
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website); // error => bcz it is out of scope
}
// console.log(username); // error =>bcz it is also out of scope
*/



/*    ********************************** Intresting ************************************

// function declaration 

function addOne(num){
return num + 1
}

cont addTwo = function(num){
return num + 2
}
 
// in 1st, function is declared  and in 2nd, it is stored in a variable 

  
// now call the function before declaring it 

console.log(addOne(5))  // # 6 -->      it will not give any error
  function addOne(num){
return num + 1
}


console.log(addtwo(5))  //   -->  it will give the error : addTwo is not declared 
cont addTwo = function(num){
return num + 2
}

*/