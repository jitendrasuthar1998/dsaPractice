/*
3. **Max Element in Array**: Find the maximum number in an array.
    - Input: [3, 9, 2, 5], Output: 9
*/

function maxElement(numbers){
    let maxElement = numbers[0];

    for(let i=1; i<numbers.length; i++){
        maxElement = Math.max(maxElement, numbers[i]);
    }

    console.log(maxElement); 
}

let numbers = [3,9,2,5,10];
maxElement(numbers);