// for...in  loop

const myObject = {
    js:"javascript",
    Cpp:"c++",
    rb:"ruby",
    swift:'swift by apple'
}
for (const key in myObject){
   //  console.log(key)
}  /* output :   js
                Cpp
                rb
                swift  */

/* to print value if have got the key  ==>    you have to use -->  [key]
for (const key in myObject){
    // console.log([key])  -->  but will return vlues in array 

    so it's better to use -->   objet_name[keyname]
} 

*/

/*
for (const key in myObject){   // or for  (const language in myObject){}
  console.log(`${key} shortcut is for ${myObject[key]}`)
}
  output :   js shortcut is for javascript
            Cpp shortcut is for c++
            rb shortcut is for ruby
            swift shortcut is for swift by apple
*/

/* Now check does for...in can be used for iteration of array

const programming = ["js","rb","py","cpp","java"]

for (const lang in programming){
    console.log(lang)
}   output:  0
             1
             2
             3 
             4     --> Note:  array mein key ko bolte index hota hai 

             yaha pr for...in  mein hamme array ka key milta hai na kii value jaise for...of mein haame directly array ka value mil jata tha but yaha haame key milta hai 

    Here also to get the value use -->   array_name[key_name]   ==>   programming[lang]

console.log(programming[lang])  // output:  
                                        js
                                        rb
                                        py
                                        cpp
                                        java

*/

/*   question: ky for...in   ya fir for...of  loop Map ke pr iterable hai 
   Note:   Although Map is an object , but MAp pr dono mein se koi iterable nhi hai 

   so , when we do console.log(key)  -->  for Map we will get nothing also there won't be any error 
*/

/*   
    for...in  -->  for normal object
    for...of  --> for array
*/