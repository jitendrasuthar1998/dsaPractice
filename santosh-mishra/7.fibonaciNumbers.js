/*
8. **Fibonacci Series**: Generate the first N numbers in the Fibonacci sequence.
    - Input: N = 5, Output: [0, 1, 1, 2, 3]
*/



function fibonacciNumbers(n){
    let n1 = 0;
    let n2 = 1;
    let n3 = 0;
    let numbers = [];

    numbers.push(n1);
    numbers.push(n2);

    for(let i=2; i<=n; i++){
        n3 = n1 + n2;
        numbers.push(n3);
        n1 = n2;
        n2 = n3;
    }

    return numbers
}

console.log(fibonacciNumbers(5));