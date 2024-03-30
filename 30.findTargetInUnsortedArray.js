// [2, 4, 5, 9, 8 ]

// target = 11

// print indeces of two elements in increasing order

function twoSumUnsorted(nums, target){
    let numMap = new Map();

    for(let j=0; j<nums.length; j++){
        let x = target - nums[i];

        if(numMap.has(x)){
            let i = numMap.get(x);

            return [i,j];
        }

        numMap.set(nums[j],j);
    }

    return null;
}