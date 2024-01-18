/*
Problem Description
Given a number n, you have to find the count of the numbers from 1 to n that are coprime to n.

Two numbers A and B are said to be Co-Prime or mutually prime if the Greatest Common Divisor of them is 1. You have been given two numbers A and B, find if they are Co-prime or not.

Input format
One line of input, containing an integer n - the given number.

Output format
Print the total count of coprime numbers.

Sample Input 1
9

Sample Output 1
6

Explanation 1
Numbers coprime to 9 are: 1, 2, 4, 5, 7, 8

Constraints
1 <= n <= 1000
*/

// function gcd(a, b) {
//   console.log("inside gcd function");
//   console.log("a is == ", a);
//   console.log("b is == ", b);

//   if (a == 0) return b;
//   console.log("gcd is == ", gcd(b % a, a));
//   return gcd(b % a, a);
// }

let gcd = (num1, num2) => {
  //Loop till both numbers are not equal
  while (num1 != num2) {
    //check if num1 > num2
    if (num1 > num2) {
      //Subtract num2 from num1
      num1 = num1 - num2;
    } else {
      //Subtract num1 from num2
      num2 = num2 - num1;
    }
  }

  return num2;
};

// TODO: Implement this method
function coprimeNumbers(n) {
  let result = 1;
  for (let i = 2; i < n; i++) {
    if (gcd(i, n) == 1) result++;
  }
  return result;
}

console.log("total co prime numbers are == ", coprimeNumbers(9));
