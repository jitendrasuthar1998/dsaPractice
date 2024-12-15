// currying

// function sum(a){
//     return function(b){
//         return function(c){
//            return a + b + c;
//         }
//     }
// }

function sum(...argsA) {
  // Calculate the initial result from the provided arguments
  let result = argsA.reduce((a, b) => a + b, 0);

  // Return a function that takes new arguments and continues the chain
  function curriedSum(...argsB) {
    if (argsB.length === 0) return result; // If no arguments, return the final result
    result += argsB.reduce((a, b) => a + b, 0); // Add new arguments to the result
    return curriedSum; // Return the same function to allow chaining
  }

  return curriedSum;
}

console.log(sum(1, 2, 3, 4)(5)()); // Output: 15
console.log(sum(1)(2)(3)(4)(5)()); // Output: 15
console.log(sum(10, 20)(30, 40)(50)()); // Output: 150


console.log('sum', sum(1, 2, 3, 4)(5)());

// let currSum = sum(3)(5);

// console.log("currSum", currSum());

// console.log(sum(2)(3)(5)());

// function sum(...a){
//     // let argsSum = [...a].reduce((a,b)=> a + b)

//     console.log("argsSum",...a);
//  return function(...b){
//     // let argsSumB = [...b].reduce((a,b)=> a + b)

//     console.log("argsSumB",...b);
//     if(!b){
//         return [...a].reduce(a,b => a + b,0);
//     }
//     return sum(...a,...b);
//  }   
// }

// console.log(sum(2,5)(3,4,6)(5,9,10)(29)(22)())