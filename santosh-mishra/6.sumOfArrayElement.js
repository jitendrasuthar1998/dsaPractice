/*
7. **Sum of Elements in Array**: Calculate the sum of all elements in an array.
    - Input: [1, 2, 3], Output: 6
*/

function arraySum(arr){
    let sum = 0;
    let n = arr.length;
    for(let i=0; i<n; i++){
        sum += arr[i]
    }
    return sum;
}
let numbers = [1,2,3];
let numbers1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];
// console.log(`sum of ${numbers} is => ${arraySum(numbers)}`)
console.log(`sum of ${numbers1} is => ${arraySum(numbers1)}`)