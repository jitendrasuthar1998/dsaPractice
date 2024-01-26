var rotate = function (nums, k) {
  // Calculate the effective rotation (in case k is larger than the array length)
  k = k % nums.length;

  // Reverse the entire array
  reverseArray(nums, 0, nums.length - 1);

  // Reverse the first k elements
  reverseArray(nums, 0, k - 1);

  // Reverse the remaining elements
  reverseArray(nums, k, nums.length - 1);
};

function reverseArray(nums, start, end) {
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
