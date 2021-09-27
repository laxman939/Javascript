//Recursion-->Recursion is the concept that a function can be expressed in terms of itself.
//Method:-1-Using for loop
function pow(a, b) {
  let result = 1; //result is multiplied by a by  b times
  for (let i = 0; i < b; i++) {
    result *= a;
  }
  return result;
}
console.log(pow(2, 3)); //8

//Method-2:-recursion concept
function power(x, n) {
  if (n <= 0) {
    return 1;
  } else {
    return x * power(x, n - 1);
  }
}
console.log(power(2, 4));
// pow(2, 4) = 2 * pow(2, 3); n value decreases
// pow(2, 3) = 2 * pow(2, 2)
// pow(2, 2) = 2 * pow(2, 1)
// pow(2, 1) = 2

function sum(array, n) {
  if (n <= 0) {
    return 0;
  } else {
    return sum(array, n - 1) + n;
  }
}
console.log(sum([1, 2, 3, 4], 3)); //1+2+3 = 6
//(n-1) function second parameter decreasing and calling itself
