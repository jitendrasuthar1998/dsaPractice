// [10,20,30,40,50,60]

function reverseArray(nums){
    let temp = [];
    let n = nums.length;
    for(let i=n-1; i>=0;i--){
        temp.push(nums[i]);
    }
    return temp;
}

let nums = [1,2,3,4,5,6]

// console.log("reverse this array", nums, reverseArray(nums));

function reverseArrayWithoutSpace(nums){
    let n = nums.length;
    let low = 0;
    let high = n - 1;

    while(low < high){
        [nums[low], nums[high]] = [nums[high], nums[low]]
        low++;
        high--;
    }

    return nums;
}

console.log("reverse this array",nums, reverseArrayWithoutSpace(nums));