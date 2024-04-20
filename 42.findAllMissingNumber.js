// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

// first find missing number

// find all missing number

let nums = [1, 3, 7, 5, 6, 2, 9];

function missingNumber(arr) {
  let number = 1;

  let n = arr.length;

  arr.sort((a, b) => a - b);
  // [1, 2, 3, 5, 6, 7, 9 ]
  let result = [];
  for (let i = arr[0]; i < arr[arr.length - 1]; i++) {
    if (!arr.includes(i)) {
      result.push(i);
    }
  }

  return result;
}

console.log('missingNumber is == ', missingNumber(nums));
