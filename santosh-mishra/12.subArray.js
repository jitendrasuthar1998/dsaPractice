/*

Questions on sub array

Maximum sub array sum

10. **Find Maximum Subarray Sum**: Find the maximum sum of a contiguous subarray.
    
    Input: [-2,1,-3,4,-1,2,1,-5,4]
    
    Output: 6 (subarray: [4,-1,2,1])

Sub array with given sum

1. **Subarray with Given Sum**: Find a continuous subarray that adds up to a given sum in a non-negative integer array.
    
    Input: [1, 2, 3, 7, 5], Sum = 12
    
    Output: [2, 4] (subarray: [2, 3, 7])

*/

let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

function maximumSumOfSubArray(nums) {
    let maxSum = nums[0];
    let n = nums.length;
    let startIndex = 0;
    let endIndex = 0
    for (let i = 0; i < n; i++) {
        let currentSum = 0;
        for (let j = i; j < n; j++) {
            currentSum += nums[j];

            if (currentSum > maxSum) {
                maxSum = currentSum;

                startIndex = i;
                endIndex = j;
            }
        }
    }
    let subArray = nums.slice(startIndex, endIndex + 1);
    return { maxSum, subArray };
}

// i = 0, j = 0 => n;
// i = 1 , j = 1 => n;

// console.log(maximumSumOfSubArray(nums));

function maximumSumUsingKadanes(nums) {
    let sum = 0;
    let maxSum = nums[0];
    let n = nums.length;

    for (let i = 0; i < n; i++) {
        sum += nums[i];

        if (sum > maxSum) {
            maxSum = sum;
        }

        if (sum < 0) {
            sum = 0;
        }
    }

    return maxSum;
}

console.log(maximumSumUsingKadanes(nums));