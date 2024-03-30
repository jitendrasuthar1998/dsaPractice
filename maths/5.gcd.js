/*
find greatest common diviser

6,14 => 2
*/ 

function gcd(a,b){
    while(b != 0){
        a = a % b;
        [a,b] = [b,a]
    }
    return a;
}

console.log("gcd of 6,14 is == ", gcd(6,14));
console.log("gcd of 234,144 is == ", gcd(234,144));
console.log("gcd of 12,15 is == ", gcd(12,15));

function myLCM(a,b){
    return (a*b) / gcd(a,b);
}

console.log("lcm of 5, 7 is == ", myLCM(5,7))