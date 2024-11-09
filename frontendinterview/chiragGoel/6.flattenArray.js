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

function flattenArray(nestedArray, flattenedArray) {
    for (let i = 0; i < nestedArray.length; i++) {
        if (Array.isArray(nestedArray[i])) {
            flattenArray(nestedArray[i], flattenedArray);
        } else {
            flattenedArray.push(nestedArray[i]);
        }
    }

    return flattenedArray;
}

console.log("flattened array", flattenArray(nestedArray, []));