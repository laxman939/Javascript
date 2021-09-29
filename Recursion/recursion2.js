/*Sum of all the the numbers till the given*/
//1-using for loop
function sum1(n) {
  let value = 0;
  for (let i = 1; i <= n; i++) {
    value += i;
  }
  return value;
}
console.log(sum1(5)); //15 = 1+2+3+4+5

//2-using recursion-->not prefer; invloves nested calls and slower
function sum2(n) {
  if (n === 1) {
    return 1;
  } else {
    return sum2(n - 1) + n;
  }
}
console.log(sum2(4)); //10 = 1+2+3+4

//3-Direct formula
function sum3(n) {
  return (n * (n + 1)) / 2;
}
console.log(sum3(4)); //10
