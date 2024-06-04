function contigousSubArray(nums){
    let n = nums.length;

    let sum = 0, max = -Infinity;

    for(let i=0; i<n; i++){
       sum = Math.max(sum+nums[i], nums[i]);

       max = Math.max(sum, max);
    }

    return max;
    // create two variable sum = 0, max = -Infinity

    // run a loop over indices from 0 to n-1
    // take maximum of (sum + arr[i]) vs (arr[i]), store it in the sum variable

    // take maximum of sum and max

    // store it in the max variable


    // return max variable
}

let nums = [-2, -3, 4, -1, -2, 1, 5, -3];

console.log("contigous sub array sum", contigousSubArray(nums))