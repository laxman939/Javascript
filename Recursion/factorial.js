//using recursion-->finding factorial of a given number
function factorial(n) {
  if (n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
console.log(factorial(5)); // 120
//In simple way using ternary operator
function factorial1(n) {
  return n === 1 ? 1 : n * factorial1(n - 1);
}
console.log(factorial1(4)); //24
