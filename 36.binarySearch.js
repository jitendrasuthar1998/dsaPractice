function binarySearch(n, nums, target) {
    let left = 0;
    let right = n - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] == target) {
            return mid;
        }

        else if (nums[mid] < target) {
            left = mid + 1;
        }
        else {
            right = mid - 1;
        }
    }

    return -1;

}

let nums = [2, 4, 5, 8, 9];
console.log('binarySearch', binarySearch(5, nums, 8));


let numbers = [5, 4, 3, 2, 1];

function lastOccurrence(nums, target) {
    let n = nums.length;
    let left = 0;
    let right = n - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] == target) {
            if (nums[mid + 1] != 1) {
                return mid;
            } else {
                left = mid + 1;
            }
        }

        else if (nums[mid] < target) {
            right = mid - 1;
        }
        else {
            left = mid + 1;
        }
    }

    return -1;

}

let ones = [1, 1, 1, 1, 1, 0, 0, 0]

console.log(lastOccurrence(ones, 1))