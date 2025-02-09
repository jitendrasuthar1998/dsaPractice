const obj = [
    { key: "Sample 1", data: 'Data 1' },
    { key: "Sample 1", data: 'Data 1' },
    { key: "Sample 1", data: 'Data 1' },
    { key: "Sample 1", data: 'Data 1' },
    { key: "Sample 2", data: 'Data 2' },
    { key: "Sample 2", data: 'Data 2' },
    { key: "Sample 2", data: 'Data 2' },
    { key: "Sample 3", data: 'Data 3' },
    { key: "Sample 3", data: 'Data 3' },
]

const output = {
    "Sample 1": [{ key: "Sample 1", data: 'Data 1' }, { key: "Sample 1", data: 'Data 1' }, { key: "Sample 1", data: 'Data 1' }, { key: "Sample 1", data: 'Data 1' }],
    "Sample 2": [{ key: "Sample 2", data: 'Data 2' }, { key: "Sample 2", data: 'Data 2' }, { key: "Sample 2", data: 'Data 2' }, { key: "Sample 2", data: 'Data 2' }],
    "Sample 3": [{ key: "Sample 3", data: 'Data 3' }, { key: "Sample 3", data: 'Data 3' }]
}

function newDataTransform(obj) {

    const result = obj.reduce((prev, curr) => {
        if (prev[curr.key]) {
            prev[curr.key].push(curr);
        } else {
            prev[curr.key] = [curr];
        }
        return prev;
    }, {})

    return result;
}

console.log(newDataTransform(obj));

// function dataTransform(obj) {
//     // const output = {};

//     // obj.forEach(item => {
//     //     if (output[item.key]) {
//     //         output[item.key].push(item);
//     //     } else {
//     //         output[item.key] = [item]
//     //     }
//     // })

//     // return output;

//     const result = obj.reduce((prev, current) => {
//         if (prev[current.key]) {
//             prev[current.key].push(current);
//         } else {
//             prev[current.key] = [current];
//             // prev[current.key].push(current);
//         }
//         // console.log("prev", prev);
//         return prev;
//     }, {})
//     return result;
// }

// console.log("dataTransform", dataTransform(obj));



