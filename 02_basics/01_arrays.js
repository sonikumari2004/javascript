// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeroes = ["shaktiman","nagraj"]
const myArr2 = new Array(1, 2, 3, 4)

// console.log(myArr[4]);

// Array methods

// myArr.push(6)  // add the element
// myArr.push(7)
// myArr.pop()  // remove last element
// myArr.unshift(9)  // add at the starting
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));
// console.log(myArr.indexOf(9));

// const newArr = myArr.join()
// console.log(myArr);
// console.log(newArr);
// console.log(typeof myArr);
// console.log(typeof newArr);

// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)
console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);  // REMOVE SPLICE ELEMENT
console.log(myn2);
