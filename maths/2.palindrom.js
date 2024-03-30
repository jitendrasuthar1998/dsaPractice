/*
number is palindrom when number reamins same when you read it from forward and backward.

I/P = 12321
O/P = Yes

I/P = 567
O/P = No
*/ 

function checkPalindrome(number){
    let orgNumber = number;
    let reversedNumber = 0;

    while(number > 0){
        reversedNumber = (reversedNumber * 10) + (number % 10);
        number = Math.floor(number/10);
    }

    if(orgNumber == reversedNumber){
        return "YES"
    }else{
        return "NO"
    }
}

console.log('12321 is palindrom == ', checkPalindrome(12321))
console.log('123 is palindrom == ', checkPalindrome(123))