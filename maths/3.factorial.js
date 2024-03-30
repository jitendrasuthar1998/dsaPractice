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
    return res;
}

function recursiveFactorial(n){
    if(n === 0){
        return 1;
    }

    return n * recursiveFactorial(n - 1);
}

console.log("factorial of 5 is using recursive == ", recursiveFactorial(5))

console.log("factorial of 5 is == ", factorial(5));