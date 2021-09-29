function fibonacci(n) {
  if (n <= 1) {
    return n;
  } else {
    return fibonacci(n - 2) + fibonacci(n - 1);
  }
}
console.log(fibonacci(4)); //Chain Rule(tree) for high values it will give slow response so not prefer for high values
//fib(0) = 0; fib(1) = 1;
//fib(2) = fib(0) + fib(1)-->calls fib(0) and fib(1)
//fib(3) = fib(1) + fib(2)-->calls fib(1) and fib(2); --fib(2) again calls fib(0),fib(1)
//fib(4) = fib(2) + fib(3)-->calls fib(2) and fib(3);

//2-using for loop-prefer
function fibonacci2(n) {
  let array = [];
  for (let i = 0; i <= n; i++) {
    if (i <= 1) {
      array.push(i);
    } else {
      array.push(array[i - 2] + array[i - 1]);
    }
  }
  return array[n - 2] + array[n - 1];
}
console.log(fibonacci2(6));
