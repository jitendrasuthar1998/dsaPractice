/*
5. **Factorial of a Number**: Calculate the factorial of a number.
    - Input: 5, Output: 120 (5! = 5 * 4 * 3 * 2 * 1)
*/

function factorial(number) {
    let result = 1;

    for (let i = 1; i <= number; i++) {
        result = result * i;
    }

    return result;
}

function countDigits(number) {
    let count = 0;
    while (number > 0) {
        number = Math.floor(number / 10);
        count++;
    }
    return count;
}

function countDigitsOfFactorial(n) {
    if (n < 0)
        return 0;

    // base case 
    if (n <= 1)
        return 1;

    // else iterate through n and calculate the 
    // value
    let digits = 0;
    for (let i = 2; i <= n; i++)
        digits += Math.log10(i);

    return Math.floor(digits) + 1;
}

console.log("factorial of 5 is ", factorial(5));

console.log("factorial of 5 is ", factorial(10));