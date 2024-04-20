// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

// find peakElement

let nums = [10, 20, 15, 2, 23, 90, 67, 99, 88];

function peakElement(n,arr){
    let result = [];
    
    for(let i=1;i<n-1;i++){
        if(arr[i]> arr[i-1] && arr[i] > arr[i+1]){
            result.push(arr[i]);
        }
    }
    
    return result;
}

// console.log(peakElement(nums.length, nums));

// console.log("Try programiz.pro");


let nums1 = [10, 20, 15, 2, 23, 90, 67, 99, 88];

// peak element 

// a number which has smaller numbers at its both sides (left and right)

function findPeakElement(nums1, n){
    let result = [];
    for(let i=1;i<n-1;i++){
        if(nums1[i] > nums1[i-1] && nums1[i] > nums1[i+1]){
            result.push(nums1[i])
        }
    }

    return result;
}

console.log("findPeakElement of nums1 == ", findPeakElement(nums1,nums1.length))

