var containsDuplicate = function (nums) {
  let hashMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (hashMap.has(nums[i])) {
      let freq = hashMap.get(nums[i]) || 0;
      hashMap.set(nums[i], freq + 1);
    } else {
      hashMap.set(nums[i], 1);
    }
  }

  let maxCount = 0;

  for (const [_, value] of hashMap.entries()) {
    if(value >= 2){
        return true;
    }
  }
  return false;
};

let nums1 = [1, 2, 3];
console.log('contains duplicate', containsDuplicate(nums1));
