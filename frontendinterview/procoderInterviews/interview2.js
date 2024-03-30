console.log('5' + 2);
console.log('5'-2);

console.log(typeof('5'+2));
console.log(typeof('5'-2));

console.log(typeof(NaN))

console.log(NaN === NaN)

// it will be false, because NaN can come from any string or number.

console.log( 1 < 2 < 3);
console.log(3 > 2 > 1);

let numbers = [0,1,2,3,4,5];

let result = numbers.filter(i => i < 3).map(i=> i * 2).reduce((a,b)=> a + b);

console.log(result);