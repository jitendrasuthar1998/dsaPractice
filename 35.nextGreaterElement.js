/*
roblem Description
Given an array A having N elements, the task is to find the next greater element(NGE) for each element of the array in order of their appearance in the array. If no such element exists, output -1. This should be achieved with a time complexity of O(n).

Input format
There are 2 lines of input

The first line contains an integer N denoting the size of the array.

The second line contains N space separated positive integers denoting the values in the array A.

Output format
Print N space separated integers, which are the next greater element for each array element. If no such greater element exists for any element, output -1

Function definition
You have to implement the given function. It accepts the original array as an argument, and returns the new next greater element array.

Constraints
1 <= N <= 10^5

0 <= Values in the array <= 10^9

Sample Input 1
4

1 3 2 4

Sample Output 1
3 4 4 -1

Explanation 1
In the array, the next larger element to 1 is 3 , 3 is 4 , 2 is 4 and for 4, there is no such greater element, hence -1.
*/



let nums = [1, 3, 2, 4];

let nums1 = [4, 12, 5, 3, 1, 2, 5, 3, 1, 2, 4, 6];


function nextLargerElement(n, arr) {
  let stack = [];
  let ans = new Array(n);

  // ans.push(-1);
  ans[n - 1] = -1;
  stack.push(arr[n - 1]);
  
  for (let i = n - 2; i >= 0; i--) {
    while (stack.length != 0 && stack[stack.length - 1] <= arr[i]) {
      stack.pop();
    }

    let next = stack.length == 0 ? -1 : stack[stack.length - 1];
    ans[i] = next;
    stack.push(arr[i]);
  }

  return ans;
}

console.log('find next greater element == ', nextLargerElement(12, nums1));
