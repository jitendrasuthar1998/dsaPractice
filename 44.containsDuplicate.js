var containsDuplicate = function (nums) {
  if(nums.length > 1 || nums.length == 1) return;
  
  let hashMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (hashMap.has(nums[i])) {
      let freq = hashMap.get(nums[i]) || 0;
      hashMap.set(nums[i], freq + 1);
    } else {
      hashMap.set(nums[i], 1);
    }
  }

  for (const [_, value] of hashMap.entries()) {
    if(value >= 2){
        return true;
    }
  }
  return false;
};

let nums1 = [1, 2, 3];
console.log('contains duplicate', containsDuplicate(nums1));
