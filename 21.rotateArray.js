var rotate = function (nums, k) {
  // Calculate the effective rotation (in case k is larger than the array length)
  k = k % nums.length;
  // [1,2,3,4,5]
  console.log("k is == ", k)
  // [5,4,3,2,1]

  // Reverse the entire array
  reverseArray(nums, 0, nums.length - 1);

  // [1,4,3,2,5]

  // Reverse the first k elements
  reverseArray(nums, 0, k - 1);

  // Reverse the remaining elements
  reverseArray(nums, k, nums.length - 1);
  // [1,4,3,5,2]
};

function reverseArray(nums, start, end) {
  console.log("nums is == ", nums);
  console.log("start is ", start);
  console.log("end is ", end);
  while (start < end) {
    // Swap elements at start and end indices
    const temp = nums[start];
    nums[start] = nums[end];
    nums[end] = temp;

    // Move indices towards the center
    start++;
    end--;
  }
}



let numbers = [1,2,3,4,5];
console.log('numbers before rotation == ', numbers)
rotate(numbers,3)
console.log('numbers after rotation == ', numbers)
