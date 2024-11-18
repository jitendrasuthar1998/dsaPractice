// [1,1,1,1,1,2,2,2,3,3,3,2,2,2,2]

// element which is repeatedly most consequently

function mostRepeatedElement(nums) {
    let maxElement = nums[0];
    let currElement = nums[0];
    let maxCount = 1;
    let currCount = 1;

    for (let i = 1; i < nums.length; i++) {
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

const nums = [1, 1, 1, 1, 1, 2, 3, 2, 3, 1, 1, 1, 3, 3, 3, 2, 2, 2, 2]


function consecutiveNumber(nums) {
    let numsMap = new Map();

    // 1 => frequency

    // when number changes, get previous number frequency and add it into maxFrequency and maxNumber.

    // for next numbers, do the same thing

    // get frequency of previous number, and compare it with maxFrequency.

    // if previous number frequency is greater than maxFrequency, then update maxFrequency
    let n = nums.length;
    let maxFrequency = 0;
    let maxNumber = 0;

    numsMap.set(nums[0], 1);

    for (let i = 1; i < n; i++) {
        if (nums[i] == nums[i - 1]) {
            let count = numsMap.get(nums[i]);
            numsMap.set(nums[i], count ? count + 1 : 1);
        } else {
            let previousNumberFrequency = numsMap.get(nums[i - 1]);

            numsMap.set(nums[i], 1);

            if (previousNumberFrequency > maxFrequency) {
                maxFrequency = previousNumberFrequency;
                maxNumber = nums[i - 1];
            }

            numsMap.set(nums[i - 1], 0);

        }
    }

    return [maxFrequency, maxNumber];
}

console.log("consecutiveNumber", consecutiveNumber(nums));

// console.log("max repeated element", mostRepeatedElement(nums));