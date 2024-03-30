/*
Count number of trailing zeros of factorial of given number

5! = 120 
trailing zero = 1

10! = 3628800

trailing zero = 2

formula for trailing zero = n/5 + n/25 + n/125 + ...
*/ 

function countTrailingZeroes(number){
    let res = 0;

    for(let i=5;i<=number;i=i*5){
        res = res + Math.floor(number/i);
    }
    return res;
}

console.log("trailing zero in factorial of 5 is == ", countTrailingZeroes(5));

console.log("trailing zero in factorial of 3455 is == ", countTrailingZeroes(3455));