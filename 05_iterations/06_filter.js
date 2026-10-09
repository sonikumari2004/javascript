
/*
.filter()  -->  it is used to select specific elements from an array based on a condition. it returns a new array containing only the elements that pass the condition  
        ==>  Means if the condition returns true, the element is included. If it returns false, the element is excluded
           It means jaha pr condition true hoga wo element new array mein add hoga   -->  5>4 , true 5 will get added in new array
   
  syntax: 
          array.filter( (element) => {
            return condition
            })

*/

// const myNums = [1,2,3,4,5,6,7,23]
// const newNums = myNums.filter( (num) => num>4)   // but note here {} is not used -> { nm > 4} not used
// console.log(newNums)  // output :   [ 5, 6, 7, 23 ]

// what will happen when we use  {}
// when we use {} it means we have made a scope and then for that we have to explicitly return the value ,  but here above implicit return happen , so no scope{}   -->  keep in mind 

const myNums = [1,2,3,4,5,6,7,23]
const newNums = myNums.filter( (num) => {
 return num > 4})
 console.log(newNums)  // # output :   [ 5, 6, 7, 23 ]

/*   Real life use 

request through api to get data from datbase ,  and we got following datas of books, Now among them we want only book of genre history only, we can use .filte() here


 const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === 'History')   
  
  console.log(userBooks);    //output:  [
                         {
                            title: 'Book Three',
                            genre: 'History',
                            publish: 1999,
                            edition: 2007
                        },
                        {
                            title: 'Book Seven',
                            genre: 'History',
                            publish: 1986,
                            edition: 1996
                        }
                        ]    -->  filter returns array



userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 
})
  console.log(userBooks);


 userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})
  console.log(userBooks);


  Outcome of filter()  -->   it selects the matching elements  and return the elements based on the operations =>  mtlb haame array wala wo elemnts milega jiska condition satisfy hoga

  ex :  
       const nums = [2,3,5,4]
       const newNums = ( (num) => {
        return num * 2 > 5})  //  1. num = 2 , 
                                  2.  num * 2 =>  2 *2 = 4
                                  3. 4 > 5 --> false  ==>   condition is false num will not be included in the array ( 2 not included)   
                 output:   [3,5,4]   => a)  NOTICE that the elements are not replaced with their doublrdd values. The calculation is only used to decide which elemnts to keep.
                 b) filter()  --> return array of same or smaller size ,  depends on condition 

--------------------------------------------------------------------------------------------------------------------------------------

To perform operations use map()

*/