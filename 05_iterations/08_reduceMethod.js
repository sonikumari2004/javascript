
// reduce() is used specially in shoping cards

/* 
reduce() method in JavaScript is used to reduce an array and return a single value, by executing a callback function on each element.

That return result can be a number,string,object,array or another value. 
It is commonly used to calculate sums, products, averages, frequency counts, and more.

Syntax: 
    array.reduce((accumulator, currentValue) => {
        // logic
        return accumulator;
    }, initialValue);

    parameters are: 
 -> accumulator: Stores the result accumulated so far.
 -> currentValue: The current array element.
 -> initialValue: The starting value of the accumulator.

The parameter names are your choice. You can use acc and curr, or any other meaningful names.

Example: 
 const numbers = [10, 20, 30, 40];
const sum = numbers.reduce((acc, curr) => {    // normal function can also be used
    return acc + curr;
}, 0);
console.log(sum); // 100

 ->  First iteration: 0+10 =10  , acc = 10
 -> Second iteration:10+20=30   , acc = 30
 -> Third iteration : 30+30 =60
 -> fourth iteration : 60+40 = 100
The final accumulated value is returned by reduce()


 Find the maximum number: 
const numbers = [12, 45, 7, 89, 23];
const max = numbers.reduce((acc, curr) => {
    return curr > acc ? curr : acc;
}, numbers[0]);
console.log(max); // 89

Convert an array of objects into a total:
const cart = [
    { name: "Book", price: 200 },
    { name: "Pen", price: 50 },
    { name: "Bag", price: 500 }
];
const total = cart.reduce((acc, item) => {
    return acc + item.price;
}, 0);
console.log(total); // 750


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]
const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(priceToPay);   # output : 22996




// When no any initial value is given to accumulator
-->  When no initial value is given to the accumulator (acc) in JavaScript's reduce() method, the first element of the array becomes the initial value of acc, and iteration starts from the second element.

const nums = [10, 20, 30, 40];
const result = nums.reduce((acc, curr) => {
    console.log("acc:", acc, "curr:", curr);
    return acc + curr;
});
console.log("Result:", result);
Output:
acc: 10 curr: 20
acc: 30 curr: 30
acc: 60 curr: 40
Result: 100




*/
 