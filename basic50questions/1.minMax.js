//Find out the minimum and maximum of three numbers.

function minMax(num1, num2, num3){

    let minNum, maxNum;

    if(num1 > num2 && num1 > num3) {
        maxNum = num1;
    };
    if(num2 > num3 && num2 > num3) {
        maxNum = num2;
    };
    if(num3 > num1 && num3 > num1) {
        maxNum = num3;
    };

    if(num1 < num2 && num1 < num3){
        minNum = num1;
    }

    if(num2 < num1 && num2 < num3){
        minNum = num2;
    }

    if(num3 < num1 && num3 < num2){
        minNum = num3;
    }

    console.log("minimum and maximum between", num1, num2, num3, "is minimum == ", minNum, "is maximum == ", maxNum);
}

console.log(minMax(30, 20, 44));