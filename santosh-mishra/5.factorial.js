/*
5. **Factorial of a Number**: Calculate the factorial of a number.
    - Input: 5, Output: 120 (5! = 5 * 4 * 3 * 2 * 1)
*/

function factorial(number){
    let result = 1;

    for(let i=1; i<=number; i++){
        result = result * i;
    }

    return result;
}

console.log("factorial of 5 is ", factorial(5));

console.log("factorial of 5 is ", factorial(10));