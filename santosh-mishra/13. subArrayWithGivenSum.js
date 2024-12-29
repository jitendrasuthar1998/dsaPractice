/*
1. **Subarray with Given Sum**: Find a continuous subarray that adds up to a given sum in a non-negative integer array.
    
    Input: [1, 2, 3, 7, 5], Sum = 12
    
    Output: [2, 4] (subarray: [2, 3, 7])
*/

function subarrayWithGivenSumBruteForce(nums, target) {
    let n = nums.length;

    let res = [];
    for (let i = 0; i < n; i++) {
        let sum = 0;
        for (let j = i; j < n; j++) {
            sum += nums[j];
            if (sum == target) {
                res.push(i + 1);
                res.push(j + 1);
                return res;
            }

        }
    }

    // return res;
}
let nums = [1, 2, 3, 7, 5]
console.log(subarrayWithGivenSumBruteForce(nums, 12))

function subarrayWithGivenSum(nums, sum) {
    let start = 0;
    let end = 0;

    let currSum = 0;

    let flag = false;

    let res = [];
    let n = nums.length;
    for (let i = 0; i < n; i++) {
        currSum += nums[i];

        if (currSum >= sum) {
            end = i;

            console.log("currSum outside of while", currSum);

            while (sum < currSum && start < end) {
                console.log("currSum inside of while before decrement", currSum);
                console.log("start inside of while", start);
                currSum -= nums[start];
                console.log("currSum inside of while after decrement", currSum);
                ++start;
            }

            console.log("start outside of while", start);

            if (currSum == sum) {
                res.push(start + 1);
                res.push(end + 1);
                flag = true;
                break;
            }
        }
    }

    if (!flag) {
        res.push(-1);
    }

    return res;
}

console.log(subarrayWithGivenSum(nums, 12))