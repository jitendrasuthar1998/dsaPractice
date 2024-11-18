/*
Given a string s, sort it in decreasing order based on the frequency of the characters. The frequency of a character is the number of times it appears in the string.

Return the sorted string. If there are multiple answers, return any of them.

 

Example 1:

Input: s = "tree"
Output: "eert"
Explanation: 'e' appears twice while 'r' and 't' both appear once.
So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.
Example 2:

Input: s = "cccaaa"
Output: "aaaccc"
Explanation: Both 'c' and 'a' appear three times, so both "cccaaa" and "aaaccc" are valid answers.
Note that "cacaca" is incorrect, as the same characters must be together.
Example 3:

Input: s = "Aabb"
Output: "bbAa"
Explanation: "bbaA" is also a valid answer, but "Aabb" is incorrect.
Note that 'A' and 'a' are treated as two different characters.
 

Constraints:

1 <= s.length <= 5 * 105
s consists of uppercase and lowercase English letters and digits.
*/

var frequencySort = function (s) {
    // charMap
    let charMap = new Map();
    let n = s.length;
    // traverse over the hash map
    for (let i = 0; i < n; i++) {
        let count = charMap.get(s[i]);
        charMap.set(s[i], count ? count + 1 : 1)
    }

    let sortedCharMap = new Map([...charMap.entries()].sort((a, b) => {
        console.log("a", a);
        console.log("b", b);
        return b[1] - a[1];
    }))

    let charStr = "";

    for (const [key, value] of sortedCharMap.entries()) {
        console.log("key", key, "value", value)
        for (let i = 0; i < value; i++) {
            charStr += key;
        }
    }

    return charStr;
    // console.log("charMap before sorting", charStr);


    // console.log("charMap after sorting", sortedCharMap)

    // let sortedTwiceArr = twice.sort((a, b) => b - a);
    // console.log("sortedTwiceArr", sortedTwiceArr);
    // let joinedArr = twice.concat(once).join("");

    // console.log("joinedArr", joinedArr)

    // return joinedArr;


    // twice = []

    // once = []  
};

let str1 = "tree"

let str2 = "raaeaedere";

// frequencySort(str2)

function optimizedFrequencySort(s) {
    // charMap
    let charMap = new Map();
    let n = s.length;
    // traverse over the hash map
    for (let i = 0; i < n; i++) {
        if (!charMap.has(s[i])) {
            charMap.set(s[i], s[i]);
        } else {
            let str = charMap.get(s[i]);
            charMap.set(s[i], str + s[i]);
        }
    }

    let sortedCharMap = new Map([...charMap.entries()].sort((a, b) => {
        console.log("a", a);
        console.log("b", b);
        return b[1].length - a[1].length;
    }))

    let charStr = "";

    for (const [key, value] of sortedCharMap.entries()) {
        console.log("key", key, "value", value)
        charStr += value;
    }

    console.log("charStr", charStr);

    return charStr;
}

optimizedFrequencySort(str2);