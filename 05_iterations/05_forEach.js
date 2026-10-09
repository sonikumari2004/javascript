// forEach()

/*     
    forEach() is a method used to run a function once for every element in a collection, most commonly an array.

Think:   "For each item, do this."

Basic syntax
array.forEach(callBackFunction);

note: while writing call back function we don't write the name of the function  

const coding = ["js", "ruby","java","cpp"]

coding.forEach(function coding (){}) -->   wrong because we have written function name
coding.forEach(function (item){       --> name not written , yaha pr item is given to the elements of array , hmm item ke bdle kuch bhi bol ske hai like value,name ,a,b anything
// defination --> ky krna hai item ke sath
})

coding.forEach(function (item){
console.log(item)
})


*/  
const coding = ["js", "ruby","java","cpp"]

//  coding.forEach(function (item){
//    console.log(item)
// })  
//  output :   each element ko select krega jisko item bolnge and then console.log means print krega    
       /*       js
                ruby
                java
                cpp
         */


/*  Simillarly it can be done for Arrow function

coding.forEach((item) => {
    console.log(item)
    })

*/

/* 
   We can also phle kahi function ko declare krke uska refrence pass kr skte hai 

   function printMe(item){
   console.log(item)}

   coding.forEach(printMe)  // output : js
                                        ruby
                                        java
                                        cpp
  
*/

/*   
    Note inside the parameter of forEach sirf haame element ka hi access nhi milta ,haame uske index and array ka bhi access mil jata hai 

coding.forEach( (item,index,arr) => {
    console.log(item,index,arr)
})
    output:  js 0 [ 'js', 'ruby', 'java', 'cpp' ]
            ruby 1 [ 'js', 'ruby', 'java', 'cpp' ]
            java 2 [ 'js', 'ruby', 'java', 'cpp' ]
            cpp 3 [ 'js', 'ruby', 'java', 'cpp' ]
*/


/*
  Very Important when object is inside the array

  const a = [{},{},{},{}]

*/
const user = [
    {
        username: "ankit",
        age: 20
    },{
        username:"anand",
        age:21
    },{
        username:"amp",
        age:22
    }
]

user.forEach((customer)=>{
    console.log(customer.username)
})  /*   // output :ankit
                    anand
                    amp
*/