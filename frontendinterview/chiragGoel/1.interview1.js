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

// // const add = (a,b) => a + b;

// const memoizedAdd = memorizedOne(add);


// // calculate some of two arguments
// memoizedAdd(1, 2);

// // if same arguments are pass again, don't calculate it, just return result from cache 9

// memoizedAdd(1, 2)

// memoizedAdd(2, 3);

// memoizedAdd(2, 3)

// let cachedResult = {};

function factorial(n) {

    let result = 1;
    for (let i = 1; i <= n; i++) {
        result = result * i;
    }
    return result;


}

// console.log("factorial of 5 is == ", factorial(5));

// console.log("factorial of 5 is == ", factorial(5));
// console.log("factorial of 5 is == ", factorial(4));
// console.log("factorial of 5 is == ", factorial(4));

function memoizedFactorial() {
    let cache = {};

    return function (n) {
        if (n in cache) {
            console.log("fetching from cache");
            return cache[n];
        } else {
            console.log("calculating factorial");

            const result = factorial(n);
            cache[n] = result;
            return result;
        }
    }
}

function memoizedAdd(fn) {
    let cache = {};

    return function (...args) {
        const [a, b] = args;
        console.log("arguments", args);
        if (cache[`${a}-${b}`]) {
            console.log("from cached result", cache[`${a}-${b}`]);
            return cache[`${a}-${b}`]
        } else {
            let result = fn(a, b);

            cache[`${a}-${b}`] = result;
            console.log("result", result);
        }
    }
}

// const newFactorial = memoizedFactorial();

// console.log(newFactorial(5));
// console.log(newFactorial(5));

function add(a, b) {
    return a + b;
}

const newAdd = memoizedAdd(add);

newAdd(3, 4);
newAdd(3, 4);

newAdd(3, 2);

newAdd(3, 2);


function sum(...args) {
    console.log("arguments", args);

    let result = 0;

    for (let i = 0; i < args.length; i++) {
        result += args[i];
    }

    return result;


}

console.log(sum(1, 2, 3, 5, 5, 9, 20));