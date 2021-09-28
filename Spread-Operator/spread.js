/*the spread operator spreads the content of an array, 
while the rest operator gathers elements (arguments to a function) into an array*/
/*Spread operator can be used in many cases*/
//1-as concat()-->merges multiple arrays or objects into new single one

//using concat()-->prefer
const array1 = [1, 2];
const array2 = [3, 4];
arr = array1.concat(array2);
console.log(arr); //[ 1, 2, 3, 4 ]

//using spread
const array01 = [1, 2];
const array02 = [3, 4];
arr1 = [...array1, ...array2];
console.log(arr1); //[ 1, 2, 3, 4 ]

//2-copy
const arr2 = arr1;
arr2.push(5);
console.log(arr2); //[ 1, 2, 3, 4, 5]->But when we change/add anything to copied one it also affects the original one
console.log(arr1); //[ 1, 2, 3, 4, 5]

//using spread-->prefer
const arr02 = [...arr1];
arr02.push(0);
console.log(arr1); //[ 1, 2, 3, 4, 5 ]
console.log(arr02); //[ 1, 2, 3, 4, 5, 0 ]

//3-Expand-->But displays array inside another array
const arr3 = [array01, 3, 4];
console.log(arr3); //[ [ 1, 2 ], 3, 4 ]

//using spread-->prefer
const arr03 = [...array01, 3, 4];
console.log(arr03); //[ 1, 2, 3, 4 ]

//4-Math-->But doesn't work for arrays
console.log(Math.min(arr03)); //NaN
console.log(Math.min(1, 2, 3, 4, 5, 6, 0, -1)); //Math.min()--> displays min value-->-1
console.log(Math.max(1, 2, 3, 4, 5, 6, 0, -1)); //6

//using spread-->spread is used for arrays
const arr4 = [1, 2, 3, 4, 5, 6, 9, 0];
console.log(Math.min(arr4)); //NaN
console.log(Math.min(...arr4)); //0-->Math.min()-gives small value; max()-gives large value
console.log(Math.max(...arr4)); //9
