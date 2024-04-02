function binarySearch(n, nums, target){
    let left = 0;
    let right = n-1;

    while(left<right){
        let mid = Math.floor((left+right)/2);

        if(nums[mid]==target){
            return mid;
        }

        else if(nums[mid]<target){
            left = mid + 1;
        }
        else{
            right = mid - 1;
        }
    }

    return -1;

}

let nums = [2, 4, 5, 8, 9];
console.log('binarySearch', binarySearch(5, nums, 8));