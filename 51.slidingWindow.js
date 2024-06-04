// Given an array of positive numbers and a positive number K, find the maximum sum of any contiguous subarray of size K.

// arr =  [2, 1, 5, 1, 3, 2] ,  k = 3

// first window sum = [2, 1, 5] => 8

// second window sum = [1, 5, 1] => 7

function maxSubArraySum(arr,k){
    let maxSum = 0;
    let windowSum = 0;
    let windowStart = 0;

    for(let windowEnd = 0; windowEnd < arr.length; windowEnd++){
        windowSum = windowSum + arr[windowEnd];

        if(windowEnd >= k - 1){
            maxSum = Math.max(maxSum, windowSum);

            windowSum = windowSum - arr[windowStart];

            windowStart++;
        }
    }

    return maxSum;
}

let nums1 = [2, 3, 4, 1, 5];

console.log('maxSubArraySum , k = 2', maxSubArraySum(nums1,2));

console.log('maxSubArraySum, k = 3', maxSubArraySum(nums1,3));

console.log('maxSubArraySum, k = 4', maxSubArraySum(nums1,4));

console.log('maxSubArraySum, k = 5', maxSubArraySum(nums1,5));