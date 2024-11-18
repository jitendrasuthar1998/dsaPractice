/*
Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

 

Example 1:

Input: s = "leetcode"

Output: 0

Explanation:

The character 'l' at index 0 is the first character that does not occur at any other index.

Example 2:

Input: s = "loveleetcode"

Output: 2

Example 3:

Input: s = "aabb"

Output: -1

 

Constraints:

1 <= s.length <= 105
s consists of only lowercase English letters.
*/

function firstUniqueCharacter(str) {
    let charMap = new Map();
    let n = str.length;

    for (let i = 0; i < n; i++) {
        if (charMap.has(str.charAt(i))) {
            let charObj = charMap.get(str.charAt(i));
            charObj.frequency = charObj.frequency + 1;
            charMap.set(str.charAt(i), charObj);
        } else {
            let charObj = { index: i, frequency: 1 };
            charMap.set(str.charAt(i), charObj);
        }
    }

    for (const [_, obj] of charMap.entries()) {
        if (obj.frequency == 1) {
            return obj.index;
        }
    }
    console.log("charMap", charMap);

    return -1;
}

let str2 = "loveleetcode";

let str3 = "aabb";
console.log("firstUniqueCharacter", firstUniqueCharacter(str3));

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    // console.log("s is",s.split(""));

    let charArr = s.split("");

    let frequencyMap = new Map();

    let n = charArr.length;

    for (let i = 0; i < n; i++) {
        let count = frequencyMap.get(charArr[i]);

        frequencyMap.set(charArr[i], count ? count + 1 : 1)
    }

    // console.log("frequencyMap",frequencyMap);
    let uniqueCharacter = null;

    for (const [key, value] of frequencyMap.entries()) {
        if (value == 1) {
            uniqueCharacter = key;
            break;
        }
    }
    // console.log("uniqueCharacter",uniqueCharacter);
    let uniqueCharIndex = -1;

    if (uniqueCharacter) {
        uniqueCharIndex = charArr.indexOf(uniqueCharacter);

        // console.log("uniqueCharIndex", uniqueCharIndex);
    }

    return uniqueCharIndex

    // return uniqueCharIndex;
};


// first non repeating character

// leetcode


// l => 0

// loveleetcode

// v => 2


