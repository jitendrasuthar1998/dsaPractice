// Find the Duplicates Find all the duplicate numbers in an array of integers where numbers are between 1 to N.

//     Input: [4,3,2,8,8,2,3,1]

//     Output: [2, 3]


function findDuplicates(nums) {
    let numsMap = new Map();
    let n = nums.length;
    for (let i = 0; i < n; i++) {
        let count = numsMap.get(nums[i]);
        numsMap.set(nums[i], count ? count + 1 : 1);
    }

    let duplicates = [];

    for (const [key, value] of numsMap.entries()) {
        if (value >= 2) {
            duplicates.push(key);
        }
    }

    return duplicates;
}

