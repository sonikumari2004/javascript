// *********** truthy and falsy ************

const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}


// ********** falsy values ***************

// false, 0, -0, BigInt 0n, "", null, undefined, NaN



// *********** truthy values ***********
// "0", 'false', " ", [], {}, function(){} -->  yee saare bhi truthy hote hai   ==>  bakki falsy ke alawa saare truthy value hote hai


// Checkin  array is empty or not:  
// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }



const emptyObj = {}

// checking the object is empty or not:
//  Object.keys(emptyObj)  -->  It will return an object   , again use .length  t check it length 
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

console.log(false == 0)    // true
console.log(false == '')   // true
console.log(0 == '')       // true


/* 
  nullish coalescing opertor :  It is used to provide a default value when the left-hand value is null or undefined 

  Kabhi project mein aisa situation banega kii value null or undefined hone ke wajh se code mein error show hoga then in that situation using null coalesing operator automatically value assign ho jayega

  syntax:  let result = value1 ?? value2;

  It works like : 
                 If phle se hi agr result ka vlaue null or undefined hai then yahh operator usko value1 assign kr dega
                 result is value1  (if value1 is not  null or undefined , then result is value1)
                 if value1 is null or undefined , then result is value2 hoga 

    Example:   let  name = "Soni"
               let username = name ?? "Guest"
               console.log(usrname)     #   Soni

               let  name = null     // phle se null hai 
               let username = name ?? "Guest"
               console.log(usrname)   #  Guest 
               
               let  name ;     // phle se undefined hai 
               let username = name ?? "Guest"
               console.log(usrname)   #  Guest 
         
            val1 = null ?? 10 ?? 20        --> 10 assign ho jayega
*/

// ********* Ternary Operator **********

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")

/*  Difference between  ?? vs ||

Both operators can provide default values, but they behave differently when the value is falsy. 

let value = 0 ;
console.log( value || 100);
console.log(value ?? 100); 

output : 100
         0
   using || (logical OR)
   The || operator returns  the right-hand value when the left-hand is falsy
    So it returns 100 because 0 is falsy

    Using nullish (??)
the ?? operator uses the right-hand value only when the left-hand value is null or undefined 
so returns 0  not 100


    */