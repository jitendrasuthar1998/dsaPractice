function contiguousSubArra(n,arr){
    // create two variables sum = 0, max = - infinite

        /*
        run a loop over indices from 0 to -1
            take maximum of sum + arr at i vs arr at i;

            store it in the sum variable

            take maximum of sum and max

            store it in the max variable
        */

        // return max variable

        let sum = 0;
        let max = -Infinity;
        for(let i=0;i<n;i++){
            console.log("before sum == ", sum);
            sum = Math.max(sum+arr[i], arr[i]);
            console.log("after sum == ", sum);
            max = Math.max(max,sum);
            console.log(" max == ", max);
        }

        return max;
}

let nums = [-2, -3, 4, -1, -2, 1, 5, -3]

console.log("largest sum of contiguous sub array is == ", contiguousSubArra(8,nums) )