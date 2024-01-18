// odd numbers are those number whose remainder is not zero when devided by 2.

function printOddNumbers(n){
    let oddNumbers = [];

    // for(let i=0; i<=n; i++){
    //     if(i % 2 != 0){
    //         oddNumbers.push(i);
    //     }
    // }

    for(let i=1; i<=n; i+=2){
        oddNumbers.push(i);
    }

    return oddNumbers;
}

console.log(printOddNumbers(18));