/*
Count the digit of a given number, and number is greater than 0.

I/P = 123456
O/P = 6

I/P = 456
O/P = 3

Divide number by 10 until it become lesser than 0.
On each division, increase the value of count variable.
*/ 

function countDigits(number){
    let count = 0;
    while(number > 0){
        number = Math.floor(number/10);
        count++;
    }
    return count;
}

console.log("digits in 12345 is == ", countDigits(12345))
console.log("digits in 4234893747289374 is == ", countDigits(4234893747289374))