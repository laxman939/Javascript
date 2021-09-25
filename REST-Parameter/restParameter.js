/*REST Parameter-->The rest par syntax allows a function to accept an indefinite number of arguments as an "array", 
providing a way to represent variadic functions in JavaScript.
--The rest parameters(...) gather all remaining arguments and it must be at the end.
variadic function-->Variadic functions are functions that can take a variable number of arguments.          */
//--using "for of"
function sum(a, b, c, ...d) {
  let sum = a + b + c;
  for (let ele of d) {
    sum += ele;
  }
  return sum;
}
console.log(sum(1, 2, 3, 4, 5, 4, 3, 1)); //23
//using "reduce" method
function add(...args) {
  return args.reduce((previous, current) => {
    return previous + current;
  });
}
console.log(add(1, 2, 3, 4, 5)); //15

function show(...args1) {
  return args1;
}
console.log(show(1, 2, 3, 4)); //[ 1, 2, 3, 4 ]-->array
console.log(show("laxman", "nag", "aradhya"));

/*-->"arguments" is an Array-like object accessible inside functions that contains the values of the arguments 
passed to that function.
--it is an object used in earlier and similar to rest 
--prefer rest     */
//finding longest string using arguments
function longestString() {
  var longest = "";
  for (var i = 0; i < arguments.length; i++) {
    if (arguments[i].length > longest.length) {
      longest = arguments[i];
    }
  }
  return longest;
}
//can take any number of arguments
console.log(longestString("ran", "can", "arguments", "spread")); //arguments

/*Arrow functions do not have "arguments"
If we access the arguments object from an arrow function, it takes them from the outer “normal” function.   */
function f() {
  let show = () => {
    for (let i in arguments) {
      console.log(arguments[i]);
    }
  };
  show();
}
f(1, 2, 3, 4);
