/*
Count number of trailing zeros of factorial of given number

5! = 120 
trailing zero = 1

10! = 3628800

trailing zero = 2

formula for trailing zero = n/5 + n/25 + n/125 + ...
*/ 


// given number = 4

// factorial of given number => 4 * 3 * 2 * 1 = 24

// trailing zeros in the factorial of 4 => 0

// given number = 10

// factorial of given number => 10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1  = 36,28,800

// trailing zeros in the factorial of 4 => 0


function countTrailingZeroes(number){
    let res = 0;

    for(let i=5;i<=number;i=i*5){
        res = res + Math.floor(number/i);
    }

    // number = 10

    // i = 5 => res = res + Math.floor(number/i) => res = 0 + Math.floor(10/5) => 2
    
    // i = 25 => i <= number => condition false, will not get into for loop.



    return res;
}

console.log("trailing zero in factorial of 5 is == ", countTrailingZeroes(5));

console.log("trailing zero in factorial of 3455 is == ", countTrailingZeroes(3455));

// number = 3455

// i = 5 => res = res + Math.floor(number/i) => res = 0 + Math.floor(3455/5) => 691
    
// i = 25 => res = 691 + Math.floor(3455/25) => 691 + 138 =>  829

// i = 125 => 829 + Math.floor(3455/125) => 829 + 27 => 856

// i = 625 => 856 + Math.floor(3455/625) => 856 + 5 => 861

// i = 3125 => 861 + Math.floor(3455/3125) => 861 + 1 => 862
 