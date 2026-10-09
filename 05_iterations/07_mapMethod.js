/*
       map()  -->  it is a method to create a new array by applying a function too every element of an existing array 
 In simple words:

 ->  take an element from the original array
 -> perform an operation
 -> put the returned value in a new array 
 -> repeat for every element
 NOTE:  The original array remains unchanged 

 syntax:
        array.map( (element) => {
            return newValue
            })

  callback function can recieve 3 arguments  ( element, index,array)

  map()  creates a result array and puts each callback's returned value into it.
  IMP: we do not manually push values into the new array like in forEach().    map() does that automatically

Here also implicit & explicit returns are possible

What will hapen if we donot return anything  ==> It will show undefined. 

const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})
 output : [11,12,13,14,15,16,17,18,19,20]


Easy way to remember: 
map() → Transform every element.
filter() → Select elements based on a condition.
forEach() → Perform an action for every element.

 // full tab mein open krke difference dekhna

Feature                  map()                                  filter()                                               forEach()

Purpose              Transforms each element       Selects elements that satisfy a condition           Executes a function for each element
Return value          Returns a new array                  Returns a new array                               Returns undefined 
Array length         Same as the original array        Same or smaller than the original array              Does not create a new array
Modifies original     No, not by default                No, not by default                                No, not by default
array?
Callback result      Each result becomes an          Each result is evaluated as true             The result is ignore
..                     element in the new array           or false 
Can be chained?              Yes                             Yes                              Not directly, because it returns undefined
Best use case      Converting or transforming data        Finding matching elements               Performing an action for every element  
Example               [1, 2, 3].map(x => x * 2)               [1, 2, 3].filter(x => x > 1)       [1, 2, 3].forEach(x => console.log(x))    
Output                 [2, 4, 6]                              [2, 3]                             Prints 1, 2, 3; returns undefined




// chaining -->    .map().map()

const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNums = myNumers
                .map((num) => num * 10 )  // output: [10,20,30,40,50,60,70,80,90,100]
                .map( (num) => num + 1)  // now above array from .map()  will be passed in next .map()
                     // output :  [11,21,31,41,51,61,71,81,91,101]


 newNums = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)   ---> and so on chaining kr skte hai 

                
*/