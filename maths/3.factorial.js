/*
find factorial of a number 

5! = 5 * (5 - 1) * (5 - 2) * (5 - 3) * (5 - 4) * (5 - 5)

5! = 120
3! = 6
*/ 

function factorial(n){
    // iterative approach

    let res = 1;

    for(let i=0;i<n;i++){
        res = res * (n - i);
    }

    // i = 0 => res = 1 * (5 - 0) => res = 1 * 5 => 5
    // i = 1 => res = 5 * (5 - 1) => res = 5 * 4 => 20
    // i = 2 => res = 20 * (5 - 2) => res = 20 * 3 => 60
    // i = 3 => res = 60 * (5 - 3) => res = 60 * 2 => 120
    // i = 4 => res = 120 * (5 - 4) => res = 120 * 1 => 120
    

    return res;
}

function recursiveFactorial(n){
    if(n === 0){
        return 1;
    }

    return n * recursiveFactorial(n - 1);
}

// 5 * recursiveFactorial(5 - 1) => 5 * 4 * 3 * 2 * 1
// 4 * recursiveFactorial(4 - 1) => 4 * 3 * 2 * 1
// 3 * recursiveFactorial(3 - 1) => 3 * 2 * 1
// 2 * recursiveFactorial(2 - 1) => 2 * 1
// 1 * recursiveFactorial(1 - 1) => 1


console.log("factorial of 5 is using recursive == ", recursiveFactorial(5))

console.log("factorial of 5 is == ", factorial(5));