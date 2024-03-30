// [2, 4, 5, 8, 9]

// target element = 9

// if array has two numbers whose sum is equal to target element, return true or else false.

function toSumPresent(nums, target) {
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            let sum = nums[i] + nums[j];

            if (sum == target) {
                return true
            }
        }
    }

    return false;
}

function twoSumWithTwoPointer(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {

        let sum = nums[left] + nums[right];

        if (sum == target) {
            return true;
        }

        else if (sum > target) {
            right--;
        }
        else {
            left++;
        }
    }
    return false;
}

let nums = [2, 4, 5, 8, 9]
let target = 9
console.log("isTwoSum present == ", toSumPresent(nums, target))

console.log("isTwoSum present with twoSumWithTwoPointer == ", twoSumWithTwoPointer(nums, target))