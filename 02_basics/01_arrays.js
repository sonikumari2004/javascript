// array

/* Different from array of c,java
  
   Array in js are resizable and can conatin different datatypes at a time 
   like it can have String , number or even array

   Array is call by refrence beacuse array is an object $ we know object is call by refrence  

  Declaration 

  let arr1 =[1,2,3,4,5]
  let arr2 = new Array(1,2,3,4,5)    -->  no square bracket[] 


  Shallow Copy of Arrays in JavaScript

A shallow copy of an array creates a new array where the top-level elements are copied, but nested objects or arrays still reference the same memory locations as the original. This means changes to nested objects in the copy will reflect in the original array.
Means shallow copy create a new outer array/object ,but nested objects/arrys are still shared 

const originalArray = [1, 2, { key: 'value' }];
const shallowCopy = originalArray.slice();
shallowCopy[0] = 99; // Changes only the copy
shallowCopy[2].key = 'newValue'; // Affects both arrays
console.log(originalArray); // [1, 2, { key: 'newValue' }]
console.log(shallowCopy); // [99, 2, { key: 'newValue' }]



  Deep copy
A deep copy of an object is a copy whose properties do not share the same references (point to the same underlying values) as those of the source object from which the copy was made. As a result, when you change either the source or the copy, you can be assured you're not causing the other object to change too.


const myArr = [0, 1, 2, 3, 4, 5]
const myHeroes = ["shaktiman","nagraj"]
const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[4]);

// Array methods

//myArr.length()
// myArr.push(6)  // add the element at last
// myArr.push(7)
// myArr.pop()  // remove last element

// myArr.unshift(9)  // it will add 9 at 0th index  [9,0,1,2,3,4,5] (add at the starting)

// myArr.shift()   // [1,2,3,4,5]  --> remove 0,because it is at 0th index

// now arr = [1,2,3,4,5]  after shift( )


// There are some methods which is used for question purpose


// console.log(myArr.includes(9));  // false  --> checking 9 is present in myArr or not

// console.log(myArr.indexOf(3));  // true  --> checking 3 is present in myArr or not
// console.log(myArr.indexOf(8)); 
// console.log(myArr.indexOf(9));

// const newArr = myArr.join()
// console.log(myArr) // [1,2,3,4,5]
// console.log(newArr)  // 1,2,3,4,5 
// console.log(typeof(newArr))  # string --> .join() ne newArr ko join bhi kr diya hai or usko string mein convert kr diya hai



// slice --> gives substring, splice

const array = [3,4,5,6,7]
console.log("A ", array);

const arr1 = array.slice(1, 3)
console.log(arr1);
console.log("B ", array);

const arr2 = array.splice(1, 3)
 
console.log(arr2);
console.log("C", array)  // REMOVE SPLICE ELEMENT


/*   
 difference b/w slice and splice

 A [ 3, 4, 5, 6, 7 ]
[ 4, 5 ]
B [ 3, 4, 5, 6, 7 ]   --> after slice there is no any change in original array
[ 4, 5, 6 ]
C [ 3, 7 ]   --> But after splice, original array gets changed

*/

/*
   DIFFERENCE B/W SLICE AND SPLICE   =>  Asked in Interview

   slice()  --> takes out a portion WITHOUT changing the original array .
   splice() --> adds/removes/replace elements AND changes the original array.

   1. removing in splice
  arr = [3,4,5,6,7]
arr.splice(1,3)  --> start = index 1
                     delete = 3 elements    ==>  arr = [3,7]    NOTE: In this end index is included

   2 Add elements

   arr = [3,4,5,6,7]
   arr.splice(2,0,8)  --> start = index 2
                          delete 0 elements
                          insert 8        ==> arr = [3,4,8,5,6,7]


    3. replace elements
    
    arr = [3,4,5,6,7]
    arr.splice(1,2,200,300)  -->  start = index 1
                                  remove 2 elements 
                                  insert 200 and 300   ===>  arr = [3,200,300,6,7]  --> remove 4,5 
   
   

 // Array do have some prototype inside it  -->  use chatgpt to know more about it 
*/
