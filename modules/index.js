/*Module is a file that contains code to perform a specific task. 
A module may contain variables, functions, classes etc.*/
//Export multiple objects
export function sum(a, b) {
  return a + b;
}
export class Person {
  constructor(name, age, address, profession) {
    this.name = name;
    this.age = age;
    this.address = address;
    this.profession = profession;
  }
}
/*Renaming Exports and Imports*/
//1-Renaming in export file
function factorial(n) {
  if (n === 1) {
    return n;
  } else {
    return n * factorial(n - 1);
  }
}
function multiply(x, y) {
  return x * y;
}
export { factorial as fact, multiply as mul };

//2-Renaming import files
function division(a, b) {
  return a / b;
}
function fibonacci(n) {
  let arrry = [];
  for (let i = 0; i <= n; i++) {
    if (i <= 1) {
      arrry.push(i);
    } else {
      arrry.push(arrry[i - 2] + arrry[i - 1]);
    }
  }
  return arrry[n - 2] + arrry[n - 1];
}
export { division, fibonacci };

/*Default export-->only one can be a default*/
export default function square(n) {
  return n * n;
}
