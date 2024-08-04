// Write a  program to calculate the factorial of a given number. Like for 5 answer should be 120

function factorial(num){
    let result = 1;

    for(let i=1;i<=num;i++){
        result = result * i;
    }

    return result;
}

console.log("factorial of 5", factorial(5))