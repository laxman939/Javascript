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
// Currying is a technique of transforming a func that takes multiple arguments into a sequence of func's, each taking a single argument.
//  Instead of calling the function with all arguments at once, a curried function allows you to pass them one at a time, returning a new function at each step until all arguments have been provided
// Normal function
function add(a, b, c) {
  return a + b + c;
}
console.log(add(1, 2, 3)); // 6

// Curried function
function add(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(add(1)(2)(3));

//   Withnarroe function
const addArrow = (a) => (b) => (c) => a + b + c;

console.log(addArrow(1)(2)(3)); // 6

// Why use currying?
// Reusability: You can create specialized functions from more general ones.
// Function composition: It allows partial application of arguments, enabling functions to be reused in different contexts.
// Modularity: Currying helps break down functions into smaller, manageable chunks that handle one concern at a time.

// 12. Syntax error, Reference error, and Type error
// Reference error occurs when trying to access a varaible or function that does not exist

// Causes
// - Using a variable before declaring it
// - Mispelling a variable name
// - Accessing variables outside of their scope

// Syntax errors occurs when the JS engine encounters code that does not follow the correct syntax rule of the language

// Type error occurs when try to do something with a value that is not allowed for it's type

// 13. Can you explain event delegation and how it improves performance in web applications?
//  Event delegation is a technique where we attach a single event listener to a parent element instead of adding listeners
//  to each child. It improves performance by reducing the no of event listeners

// 14. What are arrow functions, and how do they differ from regular functions in JavaScript?
// Do not have their own this context
// Simple syntax
// Can not be used as constructors

// React Questions
// 1. How would you optimize the performance of a React.js application?
// - Implement lazy loading for components using React.lazy and Suspense
// - Utilize useCallback and useMemo hooks to prevent unnecessary re-renders.
// - Avoid inline functions inside jsx
// - Optimize component rendering by splitting code using code splitting.
