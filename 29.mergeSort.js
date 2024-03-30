// merge two sorted array

// nums1 = [1, 2, 3]

// nums2 = [2, 5, 6]

// result = [1, 2, 2, 3, 5, 6 ]


function mergeSort(nums1, nums2, m, n){
    
    let result = new Array(m+n);
    
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;

    while(p3<m+n){
        let v1 = (p1 < m) ? nums1[p1] : 1e9+5;
        let v2 = (p2 < n) ? nums2[p2] : 1e9+5;

        if(v1 <= v2){
            result[p3] = nums1[p1];
            p1++;
            p3++;
        }

        if(v1 > v2){
            result[p3] = nums2[p2];
            p3++;
            p2++;
        }
    }

    return result;
}

let nums1 = [1, 2, 3];

let nums2 = [2, 3, 4, 5, 6];

console.log("result array after merging two sorted array", mergeSort(nums1,nums2,3, 5))