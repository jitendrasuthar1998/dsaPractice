/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {

    let hN = haystack.length;
    let nN = needle.length;
    
    for(let i=0; i<=(hN - nN); i++){
        for(let j=0; j <=nN; j++){
            if(needle.charAt(j) !== haystack.charAt(i+j)){
                break;
            }

            if(j == (nN - 1)){
                return i;
            }
        }
    }

    return -1;
}

/* 
Example 1:

Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0

*/

let haystack = "sadbutsad", needle = "sad"

console.log(strStr(haystack, needle))