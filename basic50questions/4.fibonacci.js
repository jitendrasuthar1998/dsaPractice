// Generate Fibonacci sequence.


function generateFibonacciSequence(num) {
    let num1 = 0;
    let num2 = 1;
    let nextTerm;

    for (let i = 1; i <= num; i++) {
        console.log(num1);
        nextTerm = num1 + num2;
        num1 = num2;
        num2 = nextTerm;
    }

}

// console.log("generating Fibonacci sequence", generateFibonacciSequence(10))

// A function that returns true if x is a perfect square

function isPerfectSquare(x) {
    let sqrt = parseInt(Math.sqrt(x));
    return sqrt * sqrt == x;
}

// Returns true if n is a Fibonacci Number, else false

function isFibonacci(n) {
    console.log(5 * n * n + 4);
    return isPerfectSquare(5 * n * n + 4) || isPerfectSquare(5 * n * n - 4);
}

// Example usage:
let i = 258;
if (isFibonacci(i)) {
    console.log(i + " is a Fibonacci number.");
} else {
    console.log(i + " is not a Fibonacci number.");
}
