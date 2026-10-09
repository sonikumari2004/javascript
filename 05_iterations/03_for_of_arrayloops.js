/*    
     for...of loop         for...of and forEach   are two different things ,  here we will see for...of


for...of is used when you want to directly get the values/elements of an iterable, such as an array or string.You don't have to perform some operations on elements . You just have to get the value/elements

syntax:
        Syntax:- for..of loop

        for (variable of iterable) {
          // code block to be executed
        }

let fruits = ["apple", "banana", "mango"];

for (let fruit of fruits) {
  console.log(fruit);
}
Output:
apple
banana
mango
Notice that you don't need:

fruits[i]
The variable fruit directly contains the current value.

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}
     output:
Each char is H
Each char is e
Each char is l
Each char is l
Each char is o
Each char is  
Each char is w
Each char is o
Each char is r
Each char is l
Each char is d
Each char is !

 
             MAIN DIFFERENCE B/W BOTH

for                                          	for...of
Gives you control over index              	Gives you the value directly
More flexible	                            Simpler for iterating values
You usually manage the counter            	No counter needed
Can easily access index                    	Doesn't directly give index
Can loop in custom ways                 	Best for straightforward iteration


When should you use which?
Use for...of when you simply want each value:

for (let user of users) {
  console.log(user);
}
Use for when you need the index or more control over the loop:

for (let i = 0; i < users.length; i++) {
  console.log(i, users[i]);
}


Don't confuse for...of with for...in.

let fruits = ["apple", "banana", "mango"];

for (let x of fruits) {
  console.log(x);
}
➡️ x = values: "apple", "banana", "mango"

for (let x in fruits) {
  console.log(x);
}
➡️ x = indexes: "0", "1", "2"

Easy way to remember:

for...of → values
 for...in → indexes/keys   --> aage dekhange kaise yee indexes ko access krta hai in objectloop.js file mein 



*/

// ____________________________   MAP   __________________________________
/*   

Map is a built-in JavaScript data structure used to store data as key-value pairs

Creating a Map
The basic syntax is:

        const myMap = new Map();
        Initially, it's empty.

console.log(myMap);
Output:
Map(0) {}

.set() is used to add a key-value pair.

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
 console.log(map);
  // output: #  Map(3) {
              'IN' => 'India',
              'USA' => 'United States of America',
              'Fr' => 'France'
                }
--------------------------------------------
  const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")    -->  same key-value pair is added again
console.log(map)

output:   Map(3) {
        'IN' => 'India',
        'USA' => 'United States of America',
        'Fr' => 'France'
                      }    -->  same as above output 

  Note:  It means that Map give unique values and remains in same order as per key-value pair is given                   

 */

  
  //  using loop on Map
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
  for (const key of map){
     console.log(key)
  }  /*   // output : [ 'IN', 'India' ]
                      [ 'USA', 'United States of America' ]
                      [ 'Fr', 'France' ]      -->  while using key , you will get an array of key-value pairs
          
*/

/*   To get the key-value pairs sepertely we will use [key,value]


*/
for (const [key,value] of map){
   console.log(key,  value)    
}  /* // output : IN India
                USA United States of America
                Fr France
*/

/*   for (const [key,value] of map){
   console.log(key, ' :- ' ,  value)

IN :- India
USA :- United States of America
Fr :- France
--------------------------------------------------
map.get()
.get() retrieves the value associated with a key.

const person = new Map();

person.set("name", "Rahul");
person.set("age", 22);

console.log(person.get("name"));
console.log(person.get("age"));
Output:
      Rahul
      22
If the key doesn't exist:
console.log(person.get("salary"));
Output: undefined
---------------------------------------------

 map.has()
.has() checks whether a key exists.

const person = new Map();
person.set("name", "Rahul");

console.log(person.has("name"));
console.log(person.has("age"));
Output:
true
false

This is useful when you want to check before accessing something.

if (person.has("name")) {
  console.log(person.get("name"));
}
----------------------------------------------------

map.delete()    -->  .delete() removes a key-value pair.
NOTE:    delete() returns a boolean:

console.log(person.delete("name")); // true
console.log(person.delete("xyz"));  // false
-----------------------------------------------------

map.clear()
.clear() removes everything.

person.clear();
console.log(person);
Output: Map(0) {}
-----------------------------------------------------

map.size
.size tells you how many key-value pairs are inside the Map.

console.log(person.size);    output :  3 

NOTE:   Notice that size is a property, not a function.
Correct:person.size
Wrong:person.size()
*/

/* 
   The most important feature: Map can have different types of keys
This is one of the biggest differences between Map and a normal object.

Keys are different
This is a very important difference.

Object
Object keys are generally strings or symbols.

const obj = {};

obj[1] = "one";
obj[true] = "yes";
JavaScript converts those keys to strings:

console.log(Object.keys(obj));
You get:

["1", "true"]

Map
A Map can use almost any JavaScript value as a key.

const map = new Map();

map.set(1, "one");
map.set(true, "yes");
map.set({ name: "Rahul" }, "user");
A Map can use keys:
strings
numbers
booleans
objects
arrays
functions
basically any JavaScript value
as keys.

Another imp :    Objects can be keys in Map
This is one of the biggest advantages of Map.
With a normal object, you can't directly use an object as a distinct object key in the same way.
*/


/* 
     Now check does this for...of  is iterable on normal object or not 


*/
const myObj = {
  game1: "asd",
  game2:"erge"
}

for(const [key,value] of myObj){
    console.log(key, ':-', value)
}  /* output : TypeError: myObj is not iterable

Important Note:   for...of is iterable over Map but not over the normal object , although Map is also an object but uska iteration ho jayega , but noraml object ka nhi hoga   
 
Therefore to iterate on noraml object we use  ==>   (for...in) --> objectLoop.js  file
*/

/*
   Also note:  Map and map() are two different things

*/