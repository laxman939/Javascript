//import multiple objects
import { sum, Person } from "./index.js";
//1-Importing renamed objects
import { fact, mul } from "./index.js";
//2-renaming imported files
import { division as div, fibonacci as fib } from "./index.js";

console.log(sum(1, 7)); //8

const aradhya = new Person("aradhya", 27, "Bangalore", "Test_Engineer");
console.log(aradhya.age); //27

console.log(fact(3)); //1*2*3=6
console.log(mul(2, 9)); //18

console.log(div(4, 2)); //2
console.log(fib(6)); //8

//Can rename the defualt one
import sqr from "./index.js";
console.log(sqr(4)); //16
