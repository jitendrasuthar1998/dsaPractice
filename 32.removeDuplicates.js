// [2, 2, 2, 3, 4, 4, 9]

// [2, 2, 3, 4, 4, 9]

// create hashmap and integer, frequency

// if frequency is greater than 2, make it 2.

// calculate total of frequency.


// do it without using any space.

function removeDuplicatesFromArray(n, nums) {
    
    let i = 0;
    for (const e of nums) {
        if (i == 0 || i == 1 || nums[i-2] != e) {
            nums[i] = e;
            i++;
        }
    }
    const object = { newLength: i+1, newArr: nums }
    return object;
}

function removeDuplicatesFromSortedArrayII(n, nums) {
    let i=0;
       for(const e of nums){
           if(i == 0 || i == 1 || nums[i-2]!=e){
               nums[i]=e;
               i++;
           }
       }
       const object = {newLength: i, newArr: nums}
       return object;
   }

let nums = [2, 2, 2, 3, 4, 4, 9]

console.log("removeDuplicates == ", removeDuplicatesFromArray(7, nums))

