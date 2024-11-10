// 3. **Find First Non-Repeating Character**: Given a string, find the first non-repeating character.

//     Input: “swiss”

//     Output: “w”

function firstNonRepeatingCharacter(str) {
    let strMap = new Map();
    let n = str.length;
    for (let i = 0; i < n; i++) {
        if (strMap.has(str[i])) {
            strMap.set(str[i], strMap.get(str[i]) + 1);
        } else {
            strMap.set(str[i], 1);
        }
    }


    console.log("strMap", strMap);

    for ([key, value] of strMap.entries()) {
        if (value == 1) {
            return key;
        }
    }
}

let str1 = "swiss";
console.log("firstNonRepeatingCharacter(str1)", firstNonRepeatingCharacter(str1))