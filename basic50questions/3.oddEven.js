// odd => % != 0

// even => % == 0

function isOddOrEven(num){
    if(num % 2 == 0){
        return "Even";
    }else{
        return "Odd";
    }
}

// natural numbers => 1, 2, 3, 4, 5, 6, 7, 8, 9, 10

function sumOfNaturalNumbers(tillNumber){
    let sum = 0;

    for(let i=1; i<=tillNumber; i++){
        sum = sum + i;
    }

    return sum;
}

console.log("sumOfNaturalNumbers", sumOfNaturalNumbers(10));