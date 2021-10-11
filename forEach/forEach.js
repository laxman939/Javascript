/*--forEach() mtd iterates over elements in an array and executes 
a predefined function once per element.    
-forEach is same as map(), but forEach mtd doesn't create new array as like map mtd 
-returns undefined*/
//1
const array = [1, 2, 3, 4, 5];

array.forEach((e) => {
  console.log(e + 1);
  //return e;-->undefined
});

//2
const arr = [1, 2, 3, 4, 5, 6, 7, 8];
let squares = [];
let even = [];

arr.forEach((e) => {
  squares.push(e * e);
});
console.log(squares); //[1,  4,  9, 16, 25, 36, 49, 64]
//can use map too in place of forEach

//3
arr.forEach((e) => {
  if (e % 2 === 0) {
    even.push(e);
  }
});
console.log(even); //[ 2, 4, 6, 8 ]
