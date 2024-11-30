// prime number is a number that is divisible by 1 and itself.

function checkPrime(number) {
    let isPrime = true;

    if (number === 1) {
        console.log("1 is not prime or composite number");
    }

    else if (number > 1) {
        for (let i = 2; i <= number / 2; i++) {
            console.log("i is = ", i);
            console.log("number / 2", number / 2);

            console.log("remainder of ", number, i, number % i);

            if (number % i == 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            console.log(`Number ${number} is prime number`);
        } else {
            console.log(`Number ${number} is not prime number`);
        }
    }

    else {
        console.log("Number is not prime");
    }
}

checkPrime(9);
// checkPrime(503)

function optimizedPrime(number) {
    if (number == 1) return false;

    if (number === 2 || number == 3) return true;

    if (number % 2 == 0 || number % 3 == 0) return false;

    for (let i = 5; i * i <= number; i = i + 6) {
        if (number % i === 0 || number % (i + 2) === 0) return false;
    }

    return true;
}