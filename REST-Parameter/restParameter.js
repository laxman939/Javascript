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
