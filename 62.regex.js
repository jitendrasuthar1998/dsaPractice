let str = "1323pabc";

// define the pattern to search in a string
// /[^a-zA-Z]/
// exclude the characters from a to z and A to Z

let pattern = /[^a-zA-Z]/g;

let result = str.match(pattern);

console.log("result", result);

let newStr = str.replace(pattern, '');

console.log("newStr: " + newStr);