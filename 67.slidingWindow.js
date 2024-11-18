// subarray with maximum sum

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// 1,2,3 => 6
// 2,3,4 => 9
// 3,4,5 => 12
// 4,5,6 => 15
// 5,6,7 => 18
// 6,7,8 => 21
// 7,8,9 => 24

const num = 3;

function subArrayWithMaxSum(arr, size) {
    let maxSum = 0;
    let n = arr.length;

    for (let i = 0; i < n - size; i++) {
        let sum = 0;
        for (let j = i; j < i + size; j++) {
            // console.log("i", i, "j", j);
            console.log("arr[j]", arr[j]);
            sum += arr[j];
        }
        console.log("sum", sum);

        maxSum = Math.max(maxSum, sum);
        sum = 0;
    }

    return maxSum;
}

// outer loop

// i = 0
// currentSum = 0
// inner loop

// j = 0; j < 3; j++

// currentSum += arr[j]

// currentSum += arr[0] ==> currentSum = 1

// j=1

// currentSum += arr[1] ==> currentSum = 3

// j=2

// currentSum += arr[2] ==> currentSum = 6

// j=3

// outer loop

// i = 1

// j = 1; j < 1 + 3 ; j++

// currentSum += arr[1] ==> currentSum = 2
// currentSum += arr[2] ==> currentSum = 2 + 3 => 5
// currentSum += arr[3] ==> currentSum = 5 + 4 => 9

console.log("subArrayWithMaxSum", subArrayWithMaxSum(arr, num));


// window size is not fixed.
/*
10. **Find Maximum Subarray Sum**: Find the maximum sum of a contiguous subarray.
    
    Input: [-2,1,-3,4,-1,2,1,-5,4]
    
    Output: 6 (subarray: [4,-1,2,1])
*/

