// **Find the Missing Number**: Given an array of size N containing numbers from 1 to N+1, find the missing number.

//     Input: [1, 2, 4, 5]

//     Output: 3


function findMissingNumber(nums) {
    let n = nums.length;
    let range = nums.length + 1;
    let totalSum = (range * (range + 1)) / 2
    console.log("total sum: ", totalSum);
    let missingElement = totalSum;
    // let arraySum = 0;
    for (let i = 0; i < n; i++) {
        console.log("nums[i]", nums[i]);
        totalSum = totalSum - nums[i];
    }

    return totalSum;
}

// console.log("find missing number", findMissingNumber(nums))

// [2,3,5,7,8,10]

function binarySearch(nums, target) {
    let start = 0;
    let end = nums.length - 1;

    while (start <= end) {
        mid = Math.floor(start + (end - start) / 2);
        console.log("mid", mid);
        if (nums[mid] == target) {
            return mid;
        }

        if (nums[mid] > target) {
            end = mid - 1;
        }

        if (nums[mid] < target) {
            start = mid + 1;
        }
        console.log("start", start);
        console.log("end", end);
    }

}

function missingNumberUsingBinarySearch(nums) {
    let start = 0;
    let end = nums.length - 1;
    let ans = -1;
    // let mid = Math.floor(start + (end - start) / 2);
    while (start <= end) {
        let mid = Math.floor(start + (end - start) / 2);
        let diff = nums[mid] - mid;
        console.log("diff", diff);

        if (diff == 1) {
            start = mid + 1;
        } else {
            ans = mid;
            end = mid - 1;
        }

        // mid = Math.floor(start + (end - start) / 2);
        console.log("start", start);
        console.log("end", end);
    }

    if (ans + 1 == 0) {
        return nums.length + 1;
    }

    return ans + 1;

}



const numbers = [2, 3, 5, 7, 8, 10];

const nums = [1, 2, 3, 4, 6];
// console.log("binary search", binarySearch(numbers, 10))

console.log("missing number", missingNumberUsingBinarySearch(nums))

















function isArrayPalindrome(nums) {
    let start = 0;
    let end = nums.length - 1;
    let isPalindrome = false;

    while (start <= end) {
        console.log(`nums[${start}] = ${nums[start]}`);
        console.log(`nums[${end}] = ${nums[end]}`);
        if (nums[start] == nums[end]) {
            start++;
            end--;
            isPalindrome = true;
        } else {
            isPalindrome = false;
            return isPalindrome;
        }
    }
    return isPalindrome;
}

const palindromicArray = [1, 2, 3, 3, 2, 1];
// start index = 0
// end index = 6
// nums[start] == nums[end]

console.log("isArrayPalindrome", isArrayPalindrome(palindromicArray))


// Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

// Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

// The tests are generated such that there is exactly one solution. You may not use the same element twice.

// Your solution must use only constant extra space.

let numbers1 = [2, 7, 11, 15];
let numbers2 = [2, 3, 4];

function twoSumInSorted(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    console.log('nums', nums);

    while (start < end) {
        if (nums[start] + nums[end] == target) {

            // if array is 0th index
            return [start, end];

            // if array is 1th index
            // return [start+1, end+1];
        } else {
            if (nums[start] + nums[end] > target) {
                end--;
            } else {
                start++;
            }
        }
    }
}

console.log("twoSumInSorted", twoSumInSorted(numbers1, 9))
console.log("twoSumInSorted", twoSumInSorted(numbers2, 5))

