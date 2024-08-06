// given number => 12345

// reversed number => 54321

function reverseNumber(num){
    let rev = 0;

    while(num!=0){
        rev = (rev * 10) + (num % 10);
        num = Math.floor(num / 10);
    }

    return rev;
}

console.log("reverse number of 12345", reverseNumber(12345))