/*
Given an array of integers, our task is to write a program that efficiently finds the second largest element present in the array. 

Example:

Input: arr[] = {12, 35, 1, 10, 34, 1}
Output: The second largest element is 34.
Explanation: The largest element of the 
array is 35 and the second 
largest element is 34

Input: arr[] = {10, 5, 10}
Output: The second largest element is 5.
Explanation: The largest element of 
the array is 10 and the second 
largest element is 5

Input: arr[] = {10, 10, 10}
Output: The second largest does not exist.
Explanation: Largest element of the array 
is 10 there is no second largest element
Efficient Solution:

Approach: Find the second largest element in a single traversal. 
Below is the complete algorithm for doing this:  

1) Initialize the first as 0(i.e, index of arr[0] element
2) Start traversing the array from array[1],
   a) If the current element in array say arr[i] is greater
      than first. Then update first and second as,
      second = first
      first = arr[i]
   b) If the current element is in between first and second,
      then update second to store the value of current variable as
      second = arr[i]
3) Return the value stored in second.
*/

function secondLarestElement(nums) {
    let first = nums[0];
    let second = null;
    let n = nums.length;

    for (let i = 1; i < n; i++) {
        if (nums[i] > first) {
            second = first;
            first = nums[i];
        }

        if (first > nums[i] && nums[i] > second) {
            second = nums[i];
        }
    }

    if (first == second) {
        second = null;
    }

    return { first, second };
}

let nums1 = [12, 35, 1, 10, 34, 1];
let nums2 = [10, 5, 10];
let nums3 = [10, 10, 10]
let nums4 = [2, 1, 2];
console.log(secondLarestElement(nums1));
console.log(secondLarestElement(nums2));
console.log(secondLarestElement(nums3));
console.log(secondLarestElement(nums4));

