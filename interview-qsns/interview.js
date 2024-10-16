// 1. What is the difference between let, const, and var?
// Var --> Function-scoped, can be redeclared and reassigned
var x = 10;
var x = 20; // No error
x = 30; // No error

// Let --> Block-scoped, can be reassigned but not redeclared.
let y = 10;
// let y = 20; // Error: Identifier 'y' has already been declared
y = 30; // No error

// Const --> Block-scoped, cannot be redeclared or reassigned.
const z = 10;
// const z = 20; // Error: Identifier 'z' has already been declared
// z = 30; // Error: Assignment to constant variable

// 2. Explain the concept of hoisting in JavaScript.
// Hoisting is javascript mechanism where varaiables and function declarations are moved to the top of their containing scope before code execution

// 3. Explain the this keyword in JavaScript.
// The this keyword refers to the object that is currently executing the code

// 4. What are closures and how are they used?
// A closure is a function that has access to its own scope, the outer function’s scope, and the global scope.
function outer() {
  const x = 10;
  function inner() {
    console.log(x);
  }
  return inner;
}
const innerFunc = outer();
innerFunc(); // 10

// 5. Explain the difference between Promise, async/await, and callbacks.

// 6. How does garbage collection work in JavaScript?
// Garbage collection is the process of automatically freeing memory that is no longer used by the program.
let obj = { name: "John" };
obj = null; // obj is now eligible for garbage collection

// 7. What are arrow functions and how do they differ from regular functions?
// Arrow functions have a shorter syntax and do not have their own this context.

// 8. Explain the concept of prototypes and prototype inheritance.
// Prototypes are the objects from which other objects inherit properties and methods

// 9. What are higher-order functions?
// Higher order functions are functions that take other functions as arguments or return functions as results.
function applyOperation(a, b, operation) {
  return applyOperation(a, b);
}
function add(a, b) {
  return a + b;
}
console.log(applyOperation(a, b, add));

// 10. What is the difference between map(), reduce(), and filter()?
// Map() --> It returns a new array with the results of calling a provided function on every element
// Filter() --> It creates a new array with all the elements that pass the test implemented by the provided function
// reduce() --> This reduce method is used to apply a function to each element in an array, reducing the array to a single value
// array.reduce(function(accumulator, currentValue, currentIndex, array), initialValue)

// 11. Explain the concept of currying in JavaScript.
//   Currying is a technique of transaforming a function of multiple arguments into a sequence of functions with a single argument.
