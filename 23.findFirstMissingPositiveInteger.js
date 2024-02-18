// [3,4,-1,1]

// 2

let numbers = [3, 4, -1, 1];
let newNumbers = [6, 4, 3, 5, 2];
let thirdNumbers = [1, 2, 3, 4, 5];

function missingPositiveInteger(numbers) {
  let count = 1;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] == count) {
      count++;
    }
  }
  return count;
}

function missingPositiveIntegerBySort(nums) {
  nums.sort((a, b) => a - b);
//   console.log('nums is after sorting == ', nums);
  let count = 1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === count) {
      count++;
    }
    // return count;
  }
  return count;
}

// console.log('missing positive integer is= ' + missingPositiveInteger(numbers));

// console.log('missing positive integer is= ' + missingPositiveInteger(newNumbers));

// console.log('missing positive integer is= ' + missingPositiveInteger(thirdNumbers));

console.log('missing positive integer is= ' + missingPositiveIntegerBySort([1,2,0]));

// without sorting array, the run time is 100ms.

// after sorting array, the run time is 77ms.

function missingPositiveIntegerUsingSet(nums) {
  let numbersSet = new Set(nums);

  console.log('number set is ', numbersSet);

  for (let i = 1; i <= nums.length; i++) {
    if (!numbersSet.has(i)) {
      return i;
    }
  }

  return nums.length + 1;
}

// [1,2,3,4,5,6,7,8,9,28,15]

function missingNumber(nums) {
  let numbersSet = new Set(nums);

  console.log('number set is ', numbersSet);

  for (let i = 0; i <= nums.length; i++) {
    if (!numbersSet.has(i)) {
      return i;
    }
  }

  return nums.length + 1;
}

// console.log(
//   'missing positive integer is= ' + missingPositiveIntegerUsingSet([1, 2, 0])
// );

// console.log('missing positive integer is= ' + missingPositiveIntegerUsingSet([0,1,2,3,5])
//   );

// console.log('missing number is == ', missingNumber([0, 1, 2]));

// find missing number from 0 to n

// [0,1,2,4]

function missingNumberUsingArithmetic(nums) {
  let n = nums.length + 1;

  let total = (n * (n - 1)) / 2;

  for (n of nums) {
    total = total - n;
  }

  return total;
}
