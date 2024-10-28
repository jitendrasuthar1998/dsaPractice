/*2. **Perfect Number**: Determine if a given number is perfect (equal to the sum of its proper divisors).
- Input: 28, Output: True (28 = 1 + 2 + 4 + 7 + 14)

*/

function perfectNumber(number){
    let divisorSum = 0;

    for(let i=1; i<=number/2; i++){
        if(number % i == 0){
            divisorSum += i;
            console.log("i is ", i);
            console.log("number", number);
        }
    }

    if(divisorSum == number){
        console.log(`${number} is perfect number`);
    }else{
        console.log(`${number} is not perfect number`);
    }
}


perfectNumber(28)
