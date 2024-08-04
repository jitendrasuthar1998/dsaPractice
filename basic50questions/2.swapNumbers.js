//Swap two No with & without using any temporary variable.

let num1 = 10;
let num2 = 15;

function swapWithTemp(num1, num2) {
    let temp;

    temp = num1;
    num1 = num2;
    num2 = temp;

    num1 = num2;

    return num1, num2;
}

// Switching the values without a third variable

// 10, 15


// a = 10, b = 15

// a = a + b;

// a = 10 + 15 => 25

// b = a - b;

// b = 25 - 15 => 10;

// a = a - b;

// a = 25 - 10 => 15;

function swapWithoutTemp(num1, num2) {
    num1 = num1 + num2;
    num1 = num1 - num2;
    num2 = num1 - num2;
    return num1, num2;
}