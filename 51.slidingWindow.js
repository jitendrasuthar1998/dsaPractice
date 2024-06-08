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

    return maxSum/k;
}

let nums1 = [2, 3, 4, 1, 5];

let nums2 = [1,12,-5,-6,50,3];

// console.log('maxSubArraySum , k = 2', maxSubArraySum(nums1,2));

// console.log('maxSubArraySum, k = 3', maxSubArraySum(nums1,3));

// console.log('maxSubArraySum, k = 4', nums2, maxSubArraySum(nums2,4));

// console.log('maxSubArraySum, k = 5', maxSubArraySum(nums1,5));

function maxAverageOfSubarray(arr,k){
    let maxSum = 0;
    let windowSum = 0;
    let windowStart = 0;
    let windowAverage = 0;
    let maxAverage = -Infinity;

    for(let windowEnd = 0; windowEnd < arr.length; windowEnd++){
        windowSum = windowSum + arr[windowEnd];

        if(windowEnd >= k - 1){
            // maxSum = Math.max(maxSum, windowSum);

            windowAverage = windowSum / k;

            console.log("windowAverage",windowAverage)
            
            maxAverage = Math.max(windowAverage, maxAverage);


            windowSum = windowSum - arr[windowStart];

            windowStart++;
        }
    }

    return maxAverage;
}

// console.log('maxSubArraySum, k = 5', maxAverageOfSubarray(nums2,4));

// console.log('maxSubArraySum, k = 5', maxAverageOfSubarray([-1],1));

// average of all contiguous array

function averageOfAllContiguousArray(nums,k){
    let averages = [];

    let windowSum = 0;
    let windowAverage = 0;
    let windowStart = 0;

    for(let i=0; i<nums.length; i++){
        windowSum = windowSum + nums[i];

        if(i >= k - 1){
            averages.push(windowSum/k);
        
            windowSum = windowSum - nums[windowStart];
            windowStart++;
        }

        
    }

    return averages;
}

console.log('averageOfAllContiguousArray, k = 4', averageOfAllContiguousArray(nums1,4));


console.log('averageOfAllContiguousArray, k = 4', averageOfAllContiguousArray(nums2,4));

