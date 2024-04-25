function duplicateZeros(nums) {
  let start = 0;
  while (start < nums.length) {
    if (nums[start] == 0) {
      nums.pop();
      nums.splice(start, 0, 0);
      console.log("array after splice", nums);
      start++;
    }
    start++;
  }
}

let nums1 = [1, 0, 2, 3, 0, 4, 5, 0];
let nums2 = [1,2,3];
duplicateZeros(nums1);
console.log('duplicate zeros', nums1);
