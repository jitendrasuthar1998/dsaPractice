let nums = [6, 3, -2, 4, -1, 0, 5];
let nums1 = [1,4,2,5];
let nums2 = [1,1,0,2];
let nums3 = [2,1,-1];
function prefixSum(nums) {
//   let prefixSumArray = new Array(nums.length);
//   prefixSumArray[0] = nums[0];
  for (let i = 1; i < nums.length; i++) {
    nums[i] = nums[i-1] + nums[i];
  }
  return nums;
}

console.log(prefixSum(nums));

function equalPartitionIndex(nums){
    let n = nums.length;
    let prefixArray = new Array(n);
    let suffixArray = new Array(n);

    prefixArray[0] = nums[0];
    suffixArray[n-1] = nums[n-1];

    // prefix sum 

    for(let i=1; i < n; i++) {
        prefixArray[i] = prefixArray[i-1] + nums[i];
    }

    for(let j=n-2; j>=0; j--){
        suffixArray[j] = suffixArray[j+1] + nums[j];
    }

    for(let k=0;k<n; k++) {
        if(prefixArray[k] == suffixArray[k]) {
            console.log("element is == ", nums[k], "index is ", k);
            return k;
        }
    }
    return -1;
}

console.log("equal partition index", equalPartitionIndex(nums3))