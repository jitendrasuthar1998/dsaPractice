// given nested array. return one dimensional array 

let nestedArray = [1, [2, 3], [4, [5, 6]], 7];

// function flattenArray(nestedArray) {

//     let flattenedArray = [];

//     function flatten(nested) {
//         for (let i = 0; i < nested.length; i++) {
//             if (Array.isArray(nested[i])) {
//                 flatten(nested[i]);
//             } else {
//                 flattenedArray.push(nested[i]);
//             }
//         }
//     }

//     flatten(nestedArray);

//     return flattenedArray;
// }

// function flattenArray(nestedArray, flattenedArray) {
//     for (let i = 0; i < nestedArray.length; i++) {
//         if (Array.isArray(nestedArray[i])) {
//             flattenArray(nestedArray[i], flattenedArray);
//         } else {
//             flattenedArray.push(nestedArray[i]);
//         }
//     }

//     return flattenedArray;
// }

// console.log("flattened array", flattenArray(nestedArray, []));

function newFlattenArray(nestedArray, flattenedArray = []) {
    for (let i = 0; i < nestedArray.length; i++) {
        if (Array.isArray(nestedArray[i])) {
            newFlattenArray(nestedArray[i], flattenedArray);
        }
        else {
            flattenedArray.push(nestedArray[i]);
        }
    }

    return flattenedArray;
}

// function flattenArray(nestedArray, flattenedArray = []) {
//     if (nestedArray.length === 0) {
//         return flattenedArray;
//     }

//     const [first, ...rest] = nestedArray; // Destructure the first element and the rest

//     if (Array.isArray(first)) {
//         flattenArray(first, flattenedArray); // Recursively flatten the first element if it's an array
//     } else {
//         flattenedArray.push(first); // Push non-array elements to the result
//     }

//     return flattenArray(rest, flattenedArray); // Process the remaining elements
// }

const nestedArray1 = [1, [2, [3, 4]], [5, [6, 7, [8, 9]]]];
const result = newFlattenArray(nestedArray1);
console.log(result); // Output: [1, 2, 3, 4, 5]