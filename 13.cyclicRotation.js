/* 
Problem Description
Given an array of n integers and an integer k, rotate the array k times in clockwise order.

Input format
There are three lines of input.

First line contains integer n.

Next line contains n space separated integers.

Next line contains the value of k.

Output format
Print the rotated array.

Sample Input 1
5

1 2 3 4 5

2

Sample Output 1
4 5 1 2 3

Explanation 1
After first rotation array will be 5 1 2 3 4

After second rotation array will be 4 5 1 2 3

Constraints
1 <= n <= 100000

1 <= element of array <= 100000

0 <= k <= 100000

*/

function cyclicRotation(arr,k){
    for(let i=0;i<k;i++){
        let poppedElement = arr.pop();

        arr.unshift(poppedElement);
    }

    return arr;
}

console.log(cyclicRotation([1,2,3,4,5],2));
