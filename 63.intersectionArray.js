// Find Intersection of Two Arrays: Return the common elements between two arrays.

//     Input: [1, 2, 3], [2, 3, 4]

//     Output: [2, 3]

// Input : [4, 7, 0], [5, 6, 7]

// output = [7]

function getIntersectionOfArray(arr1, arr2) {
    let result = [];
    let n = arr1.length;
    let m = arr2.length;

    // arr1 = [1,2,3]

    // i = 0
    // arr1[0] = 1

    // j = 0
    // arr2[0] = 2

    // j = 1
    // arr2[1] = 3

    // j = 2
    // arr2[2] = 4

    // i = 1
    // arr1[1] = 2

    // j = 0
    // arr2[0] = 2

    // j = 1
    // arr2[1] = 3

    // j = 2
    // arr2[2] = 4

    // i = 2
    // arr1[2] = 3

    // j = 0
    // arr2[0] = 2

    // j = 1
    // arr2[1] = 3

    // j = 2
    // arr2[2] = 4

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (arr1[i] == arr2[j]) {
                result.push(arr1[i]);
            }
        }
    }

    return result;
}

function optimizedApproach(arr1, arr2) {
    let arr1Obj = {};
    let n = arr1.length;
    // {"1": 1, "2":2}
    for (let i = 0; i < n; i++) {
        arr1Obj[arr1[i]] = arr1[i];
    }

    let m = arr2.length;
    let result = [];
    // 2, 3, 4
    for (let i = 0; i < m; i++) {
        if (arr1Obj[arr2[i]]) {
            result.push(arr2[i]);
        }
    }

    return result;

}


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

// create the hash map of first array

// then traverse second array, and check if current number of second array is present in the hash map, then push it to the result array

// while pushing that number onto the result array, please check if that number is already present in the result array.

// if that number is already present in the result array, that time don't push it again onto the result array

// handle 0 separately because 0 is not getting pushed into the result array

var intersection = function (nums1, nums2) {
    let n = nums1.length;
    let m = nums2.length;
    let result = [];
    // for(let i=0; i<n; i++){
    //     for(let j=0; j<m; j++){
    //         if(nums1[i] == nums2[j] && !result.includes(nums1[i])){
    //             result.push(nums1[i]);
    //         }
    //     }
    // }
    // return result;
    let arr1Obj = {};
    for (let i = 0; i < n; i++) {
        if (arr1Obj[nums1[i]]) {
            continue;
        } else {
            arr1Obj[nums1[i]] = nums1[i]
        }
    }

    // console.log("arr1Obj", arr1Obj);

    for (let i = 0; i < m; i++) {
        // console.log("nums2[i]", nums2[i])
        // console.log("result.includes(nums2[i])",result.includes(nums2[i]))
        if (arr1Obj[nums2[i]] && !result.includes(nums2[i])) {
            result.push(nums2[i])
        }

        if (arr1Obj[nums2[i]] == 0 && !result.includes(0)) {
            result.push(0)
        }
    }

    return result;
};

let arr1 = [1, 5, 3];
let arr2 = [2, 3, 4];

console.log("optimizedApproach", optimizedApproach(arr1, arr2));
