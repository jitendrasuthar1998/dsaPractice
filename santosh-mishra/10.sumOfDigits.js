/*
12. **Sum of Digits**: Calculate the sum of digits of a number.
    - Input: 123, Output: 6 (1 + 2 + 3)
*/

function sumOfDigits(number) {
    let sum = 0;

    while (number > 0) {
        remainder = number % 10;
        sum = sum + remainder;
        number = Math.floor(number / 10);
    }

    return sum;
}

console.log("sumOfDigits 123", sumOfDigits(123))

function isPalindromeNumber(number) {
    let initialNumber = number;
    let reversedNumber = 0;

    while (number > 0) {
        reversedNumber = reversedNumber * 10 + number % 10;
        number = Math.floor(number / 10);
    }

    if (reversedNumber == initialNumber) {
        console.log(`${initialNumber} is a palindrome number`);
    } else {
        console.log(`${initialNumber} is not a palindrome number`);
    }
}

isPalindromeNumber(123);

isPalindromeNumber(121);

function countDigits(number) {
    let count = 0;

    while (number > 0) {
        number = Math.floor(number / 10);
        count++;
    }

    console.log(`total digits in ${number} is ${count}`);
}

countDigits(12393432);

countDigits(34533);

function isArmStrongNumber(number) {
    let initialNumber = number;
    let sum = 0;
    let remainder = 0;
    while (number > 0) {
        remainder = number % 10;
        sum = (remainder * remainder * remainder) + sum;
        number = Math.floor(number / 10);
    }

    if (initialNumber == sum) {
        console.log(`Initial number ${initialNumber} is an armstrong number`)
    } else {
        console.log(`Initial number ${initialNumber} is not an armstrong number`)
    }
}

isArmStrongNumber(153)

function countPowerOfNumber(a,b){
    return a**b;
}

console.log(countPowerOfNumber(5,10));

function linearSearch(numbers, target){
    let n = numbers.length;

    for(let i=0; i<n; i++){
        if(numbers[i] == target){
            return i;
        }
    }
}

let numbers = [1,2,40,3,4];
console.log("linear search", linearSearch(numbers,4))