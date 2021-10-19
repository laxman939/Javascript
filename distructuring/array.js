//Destructuring assignment unpack the values from arrays, or properties from objects, into distinct variables.
//Before ES6
const array = [1, 2, 3, 4];
let a = array[0];
let b = array[1];
let c = array[2];
console.log(a, b, c); //1, 2, 3

//After ES6
const array1 = [1, 2, 3];
let [x, y, z] = array1; //destructuring
console.log(x, y, z); //1,2,3

/*Can assign default values*/
const array2 = [3, 4];
let [p, q, r = 5, s = 6] = array2;
console.log(p, q, s); //3 4 6

/*Swapping varaibles using destructuring asnmnt*/
let a1 = 2;
let b1 = 4;

[a1, b1] = [b1, a1];

console.log(a1, b1); //4, 2

/*skipping unwanted items*/

const array3 = ["kiran", "anjan", "nag"];

let [a3, , c3] = array3;

console.log(a3, c3); //kiran nag

/*assigning remaining items to a single varaible*/
const array4 = ["ram", "prajwal", ...array3];
console.log(array4);
let [a4, b4, ...c5] = array4;
console.log(c5); //[ 'kiran', 'anjan', 'nag' ]

/*Nested destructuring asnmnt*/
const array5 = [1, [3, 5]];
let [a5, [b5, c5]]
