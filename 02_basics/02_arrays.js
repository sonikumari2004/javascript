const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)  
// push or merge arrays inside array 
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)  
// same as push merge but in the same or single array
// console.log(allHeros);

const all_new_heros =[...marvel_heros, ...dc_heros]
// same as concat in different way merge two aor more array simultaneously once
// console.log(all_new_heros);

// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
// const real_another_array = another_array.flat(Infinity) 
// spread out in single array
// console.log(real_another_array);


// console.log(Array.isArray("soni"));  // false
// console.log(Array.from("soni")); // make array of each letter
console.log(Array.from({name: "soni"})); // empty array

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3)); // Returns a new array from set of elements