function removeDuplicates(nums) {
  let currElem = nums[0];
  let index = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == currElem) {
      continue;
    } else {
      currElem = nums[i];
      index++;
      nums[index] = currElem;
    }
  }

  for (let i = index + 1; i < nums.length; i++) {
    nums[i] = '_';
  }

  return nums;
}

let nums1 = [1, 1, 2];


let nums2 = [0,0,1,1,1,2,2,3,3,4]
console.log('removeDuplicates', removeDuplicates(nums1));

console.log('removeDuplicates nums2', removeDuplicates(nums2));

// remove element

// remove given element from given array

let nums3 = [3,2,2,3];

let nums4 = [0,1,2,2,3,0,4,2];

function removeElement(nums, val){
    let index = 0;
    
    for(let i=0; i<nums.length; i++){
        if(nums[i] == val){
            continue;
        }else{
            nums[index++] = nums[i];
        }
    }
    
    for (let i = index; i < nums.length; i++) {
        nums[i] = '_';
      }

    return nums;
}

console.log('removeElement', removeElement(nums3,2));

console.log('removeElement nums4', removeElement(nums4,2));