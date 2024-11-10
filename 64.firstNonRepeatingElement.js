// 3. **Find First Non-Repeating Character**: Given a string, find the first non-repeating character.

//     Input: “swiss”

//     Output: “w”

// create a new instance of hash map
// traverse string 
// if current character is not in the hash map, then save it into the hash map with the value of 1
// if current character is in the hash map, then first get its value from the hash map, and increase it by one and again add it to the hash map

// then traverse through the key value pairs in the hash map

// if current key value is 1, then return the key;

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