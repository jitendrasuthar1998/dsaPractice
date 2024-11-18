/*
5. **Find Majority Element**: In an array of size N, find the element that appears more than N/2 times.

    Input: [2, 2, 1, 1, 2, 2]
    N = 6
    Find out element that appears more than N/2 times means more than 3 times
    Output: 2
*/
function majorityElement(nums) {
    let n = nums.length;
    let numsMap = new Map();

    for (let i = 0; i < n; i++) {
        let count = numsMap.get(nums[i]) || 0;
        numsMap.set(nums[i], count + 1);

        let countAfter = numsMap.get(nums[i]);

        if (countAfter > n / 2) {
            return nums[i];
        }
    }
}

let nums = [2, 2, 1, 1, 2, 2]
console.log("majorityElement", majorityElement(nums))