// Very Important for Interview purpose

// Javascript is single thread 
/*
    
Js doesn't simply execute everything line by line without any internal structure
When js executes the code, first it creates sonmething called an Execution Context. 

Execution Context :   an environment created by js in which js code is evaluated & executed . And js uses call stack to keep track of which execution context/ function is currently running 

ex:  let name = "Soni"
console.log(name);

Before executing this code, js creates an environment where it can store things such as    name -> Soni

Then it executes      console.log(name)

Types of Execution Context :    3 types :  1. Global Execution context  --> refered by "this"  2. Function Ec    3. Eval EC 

Global  -->    created when your JS program starts
Function -->   Created whenever a function is called 
Eval --->     created when code is executed using eval()     -->  What are they asked in interviews 

What is inside an Execution context 

Execution Context  
    |--> Lexical environment 
    |--> variable environment
    |--> This binding 
                                        


  Execution Context has 2 major phases   -->  1. Memory creation phase / Creation phase   2. Execution phase

Creation phase  -->  Only memory is being alloted to the variables or functions , no execution 

What does execution means

let val1 = 5
let val2 = 43
function addSum(num1, num2){
let sum = num1 +num2
return sum 
}
let result1 = addSum(val1 , val2)
let result2 = addSum(2,6)


During execution :

Global Execution --> By (this)

Memory Creation Phase ---> Then, a memory is created with val1 , but value won't be assigned now. So val1 -> undefined   (uninitilised hai abhi , because it is in Temporal Dead Zone (TDZ)

TDZ -> It is the specific behaviour where a variable declared wit let or const exists within its scope but is completely inaccessible until it is officially declared and initialized 
)
(Initialisation will begins when execution come to line let val1 = 5    -->   ess time val1 is initialised with 5)

val1  -> undefined
val2  -> undefined
addSum -> memory created and it contains defination 
defination means =>  (num1, num2){
                    let sum = num1 +num2
                    return sum 
result1 -> undefined
result2 -> undefined


NOW execution phase : --->

val1 <-  5
val2 <-  43
addSum  -->  kuch nhi hoga because yaha koi execution nhi ho rha hai 
result1 contains a function :
when result1 pr aayega then ==>  fir se ek global environment banega and dono phase,  creation and execution phase hoga 

means jaab jaab function call hoga uska a new global environment context banega and dono phase occur hoga

function addSum(num1, num2){
let sum = num1 +num2
return sum 
}         --> ess fun ke liye global banega 
         memory phase:
         val1 -> undefined
         val2 -> undefined
         sum  -> undefined

        Execution phase:
        num1 -> 5
        num2 -> 43
        sum  -> 48

        return sum  // this is left  -->  yahh return global se hoga na ki ye function ka bana hua new global context environment se 

   NOTE:    Jaise hi function katham hua tohh new global environment jo ki function ke liye bana tha wo automatically delete ho jayega

val1 <-  5
val2 <-  43
addSum  -->  kuch nhi hoga because yaha koi execution nhi ho rha hai 
result1 --> 48    --> yaha taak ho gya 
result2 -->  again function aaya same new global environment banega and same a above hoga ,  environment delete hoga na then at last return ja kr global mein karega  -. return sum   // result2 =  8


So everything is executed 

____________________________________________________________________________________________________

  CALL STACK  -->  LIFO principle (Last In First Out)

   function one(){
   console.log("one")
   }

   function two(){
   console.log("two")
   }

   function three(){
   console.log("three")
   }

   one()
   two()
   three()

   in this condition, 
   one is called first,
   then, two is called,
   then, three is called.

but,  

   function one(){
   console.log("one")
   }

   function two(){
   console.log("two")
   two()
   }

   function three(){
   console.log("three")
   three()
   }

   one()
   two()
   three()

   in this condition, 
   one is called first,
   then, two is called inside one,
   then, three is called inside two.


*/