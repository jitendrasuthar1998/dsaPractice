/*
9. **Find Even Numbers in Array**: Find all even numbers in an array.
    - Input: [1, 2, 3, 4], Output: [2, 4]
*/

function evenNumbers(arr){
    let numbers = [];
    let n = arr.length;
    for(let i=0; i<n;i++){
        if(arr[i] % 2 != 0){
            numbers.push(arr[i]);
        }
    }

    return numbers;
}
let numbers = [1,2,3,4];
console.log("even numbers from ", numbers, evenNumbers(numbers));