/*
Given an array of positive integers nums and a positive integer target, return the minimal length of a 
subarray
 whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.

 

Example 1:

Input: target = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: The subarray [4,3] has the minimal length under the problem constraint.
Example 2:

Input: target = 4, nums = [1,4,4]
Output: 1
Example 3:

Input: target = 11, nums = [1,1,1,1,1,1,1,1]
Output: 0
 

Constraints:

1 <= target <= 109
1 <= nums.length <= 105
1 <= nums[i] <= 104

*/ 

function smallestSubarrayWithGivenSum(nums,target){
    let windowSum = 0;
    let minLength = Infinity;
    let windowStart = 0;
    let maxLength = 0;

    for(let windowEnd=0; windowEnd < nums.length; windowEnd++){
        windowSum += nums[windowEnd];

        while(windowSum>=target){

            minLength = Math.min(minLength, windowEnd - windowStart + 1);

            maxLength = Math.max(maxLength, windowEnd - windowStart + 1)
            windowSum = windowSum - nums[windowStart];
            windowStart++;
        }
    }

    if(minLength == Infinity){
        return 0;
    }

    return {"minLength":minLength, "maxLength":maxLength};
}

let nums1 = [2,3,1,2,4,3];

console.log("smallestSubarrayWithGivenSum", smallestSubarrayWithGivenSum(nums1,7))