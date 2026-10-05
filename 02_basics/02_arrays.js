const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)  // push or merge arrays inside array 
// console.log(marvel_heros);  // ['Thor', 'Ironman', 'Spiderman',['superman','flash','batman']]

// to acces flash
// console.log(marvel_heros[3][1]); // flash



// Another method is using concatination

// const marvel_heros = ["Thor", "Ironman" , "Spiderman"]
// const dc_heros = ["superman","flash","batman"]
// marvel_heros.concat(dc_heros)

// console.log(marvel_heros)   //  ['Thor', 'Ironman', 'Spiderman',['superman','flash','batman']] --> yee output nhi 
// console.log(marvel_heros)  //   [ 'Thor', 'Ironman', 'Spiderman' ]  --> This will be our output 
// NOTE:  concatination does changes our original array , it will make a new array 

// const allHeros = marvel_heros.concat(dc_heros) 
// console.log(allHeros); // [ 'Thor', 'Ironman', 'Spiderman', 'superman', 'flash', 'batman' ]   --> yaha pr array ke andar array nhi bana  difference can be ask in interview
// same as push merge but in the same or single array

// Push changes the original array but concat make a new array



// Another way is using the spread operator

/*
   Spread operator is (...)   --> here also new array will be formed  & only 3 dots are in spread syntax (...)
*/
const all_new_heros =[...marvel_heros, ...dc_heros]  // using spread
// same as concat in different way merge two or more array simultaneously once
// console.log(all_new_heros);  // [ 'Thor', 'Ironman', 'Spiderman', 'superman', 'flash', 'batman' ]


const nested_array = [1,2,3,[2,5],[6,7,[9,8]]] // contains nested array and we want all elements to come inside singe main array irrespective of kitna how man nested array are there  ==>  .flat()   method is used for that 

/* 
flat() --> it also used for spreading 

  .flat(depth_value)  ==> depth_value -> kitna depth taak jana 
  for ex:
          [1,2,3,[2,5],[6,7,[9,8]]] --> 2 depth hai array(arr(arr))

          since yaha tohh esliye dikh gya depth_value ==> but when there will elements in array then prblm will occur to count the depth-value then at that time we will use infinity for safer side.

     const all_values = nested_array.flat(Infinity)     
*/
const all_values = nested_array.flat(Infinity)
// console.log(all_values)


// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
// const real_another_array = another_array.flat(Infinity) 
// spread out in single array
// console.log(real_another_array);


/* 
  Checking the data is array or not 
      use -->   Array.isArray(value)

// console.log(Array.isArray("soni"));  // false --> Beacuse "soni" is an string

convert it into array 
       use -->  Array.from(value)

// console.log(Array.from("soni")); // # ['s','o','n','i']// make array of each letter
console.log(Array.from({name: "soni"})); // empty array
*/

/* 
   console.log(Array.from(object))  // Intresting asked in interviews  what will happen when object is passed

   console.log(Array.from({name: "Ankit"}))  # []   --> output will be an empty array , because it will confuse that keys ka array banaye ya fir values ka
*/



/* 
  How to make an array from set of elements

  use:  Array.of(element1,element2,element3,.....)

  Example:
  
*/

  let value1 = 1
  let value2 = 2
  let value3 = 3
  let value4 = [9,8,7]
  console.log(Array.of(value1,value2,value3,value4))  // output:   [ 1, 2, 3, [ 9, 8, 7 ] ]

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3)); // Returns a new array from set of elements