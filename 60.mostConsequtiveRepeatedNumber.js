// [1,1,1,1,1,2,2,2,3,3,3,2,2,2,2]

// element which is repeatedly most consequently

function mostRepeatedElement(nums) {
    let maxElement = nums[0];
    let currElement = nums[0];
    let maxCount = 1;
    let currCount = 1;

    for (let i = 0; i < nums.length; i++) {
        if (currElement == nums[i]) {
            currCount++;
        } else {
            if (currCount > maxCount) {
                maxCount = currCount;
                maxElement = currElement;
            }
            currElement = nums[i];
            currCount = 1;

        }
    }

    return maxElement;
}

const nums = [1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2]


console.log("max repeated element", mostRepeatedElement(nums));