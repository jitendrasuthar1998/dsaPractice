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

// number should be from 1 to n in given array

// find missing numbers from given array

function findMissingNumbers(numbers){
  let result = [];
  for(let i = 0; i<numbers.length; i++){
      let idx = Math.abs(numbers[i]) - 1;

      if(numbers[idx] < 0){
          continue;
      }

      numbers[idx] *= -1; 
  }

  for(let i=0; i<numbers.length; i++){
      if(numbers[i] > 0){
          result.push(i+1);
      }
  }

  return result;
}

console.log();
