// TWo methods of declaring an object 

/*      
    method 1 -->    const tinderUSer = new object()    --> using object constructor (singleton object) // output as empty object

    method 2 -->    const tinderUser = {}              --> using object literals (non-singleton object)  // output as empty object

    what is the difference b/w the both asked in the interview

    in method1 --->  object ceated is singleton 
     method2 ---->  it is not singleton

*/

const tinderUser = {}

tinderUser.name = "Soni"
tinderUser.id = "123abc"
tinderUser.isLoggedIn = false

// console.log(tinderUser)   // output as keys-values pairs

const regularUser = {
    email :"user@gmail.com",
    fullname:{
        userfullname:{
            firstname: "Soni",
            lastname: "Agrawal"
        }
    }
}

// console.log(regularUser.fullname);  // nested objects (objects inside objects)
// console.log(regularUser.fullname.userfullname);

// console.log(regularUser.fullname.userfullname.firstname)   # Soni

// console.log(regularUser.fullname?.userfullname.firstname)   --> what is the use question mark here,it check if fullname is available of not ,we don't have to use if esle to check full name is available or not

// combing  or merging of objects

const obj1 = {1: "a", 2:"b"}
const obj2 = {3: "c", 4:"d"}


/* syntax of merging  -->  Object.assign(target , source)  ==>  where target means the new object  &  source means the objects that you have to merge 

 Therefore syntax:    Object.mergre({}, a,b,c)   , a,b,c are objects that you have to merge 


 const obj1 = {1: "a", 2:"b"}
const obj2 = {3: "c", 4:"d"}

 const obj3 = Object.assign(obj1, obj2)
  console.log(obj3)    ==>   { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

But The problem arises when you check obj1

  console.log(obj1)    # output:   { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }   ==>  Note:  we have consoled obj1 which is  {1: "a", 2:"b"}    but we have got   { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }   it means our obj1 is changed 

Therefore {} is used here 
const obj3 =  Object.mergre({}, obj1,obj2)   ==>  so that after merging it will get assigned into {} 
 
And now 
console.log(obj1)  --> {1: "a", 2:"b"}
console.log(obj2)  --> {3: "c", 4:"d"}
console.log(obj3)  -->  { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
*/
const obj3 = Object.assign({},obj1, obj2)  // since new object bann hi rhe hai then why should we loss initial object , keep it for futur use 
// console.log(obj3)

// Another ways is using spread(...)   -->  95% this is used

const obj4 = {...obj1, ...obj2}
// console.log(obj4)


// Array of objects
const users = [
    {
    id: "1",
    email:"amp@123.com"
},{
    id: "2",
    email:"ank@123.com"
}
]
// now accesing the array ,  since it is array so can be accessed using the index   users[1]  and again since the element at 0 index is an object its values can be accessed using dot 

// console.log(users[1].email)   # ank@123.com


/*          How to access key value pairs of an object


console.log(tinderUser)   #   { name: 'Soni', id: '123abc', isLoggedIn: false }
console.log(Object.keys(tinderUser))   #  [ 'name', 'id', 'isLoggedIn' ]   -->  for keys
console.log(Object.values(tinderUser))   #  [ 'Soni', '123abc', false ]   --> for values
NOTE:  we get output in an array datatype  ==>  very imp for project purpose   remember it ,  Beacuse since we have got the output in an array we can use loop to access them all

*/

/*    
Object.entries(entries)     #   [ [ 'name', 'Soni' ], [ 'id', '123abc' ], [ 'isLoggedIn', false ] ]   --> to get all key-value pairs in an array

*/ 

/*    How to check the existance of property of an object   => use       .hasOwnProperty('property_name')   --> returns boolean value

ex:  checking tinderUser have the property of name 
const tinderUser = {}

tinderUser.name = "Soni"
tinderUser.id = "123abc"
tinderUser.isLoggedIn = false               -->  we can see it has 

console.log(tinderUser.hasOwnProperty('name'))    # true 

*/



/* Destructing   -->  it is a convenient way to extract values from arrays or properties from objects into variables 
Example: 
const course={
    coursename:"chai aur js",
    price: "99",
    courseInstructor:"Hitesh"
}

if we have to print coursename and courseInstructor many time , then again we have to do 
console.log(course.coursename)
console.log(course.courseInstructor)

It make the code messy threfore destructuring is used  here 


// course.courseInstructor

const {courseInstructor} = course
//console.log(courseInstructor);
const {courseInstructor: instructor} = course
console.log(instructor);  // destructing

const name = course.coursename;
const price = course.price

Also it is used when we have same variable name and property like above we have made a price variable to get the course price

syntax:
         const {price , coursename} = course   --> it basically saying: take the price and name properties and from course and create variables with those name
         
In case of array

const color = ["red","pink", "white"]

without destructuring 
          const first = color[1]   // red
          const second = color[2]  // pink 

with destructing 
        const {first , second} = colors


    NOTE:    Incase of objects , property name matter , and incase of Array positon matters

We can also rename the property 

const {courseInstructor: mentor} = course 
console.log(mentor) # Hitesh

Remember:  {name}   --> Aise jaha pr bhi dikhega smjh jana destructing kiya gya hai 
*/
 