function nthFibonacciNumber(n) {
  let n1 = 0;
  let n2 = 1;
  let n3 = 0;
  let numbers = [];
  numbers.push(n1);
  numbers.push(n2);
  if (n == 0) return n1;
  if (n == 1) return n2;

  for (let i = 2; i <= n; i++) {
    n3 = n1 + n2;
    numbers.push(n3);
    n1 = n2;
    n2 = n3;
  }

  return numbers;
}

console.log("10th fibonacci number is == ", nthFibonacciNumber(10));
