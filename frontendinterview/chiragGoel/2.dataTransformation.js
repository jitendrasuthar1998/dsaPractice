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

function dataTransform(obj) {
    const output = {};

    obj.forEach(item => {
        if (output[item.key]) {
            output[item.key].push(item);
        } else {
            output[item.key] = [item]
        }
    })

    return output;
}

console.log("dataTransform", dataTransform(obj));



