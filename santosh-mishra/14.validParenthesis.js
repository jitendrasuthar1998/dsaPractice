/* Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"

Output: true

Example 2:

Input: s = "()[]{}"

Output: true

Example 3:

Input: s = "(]"

Output: false

Example 4:

Input: s = "([])"

Output: true

 
*/

function isValid(str) {
    // 
    let parentheses = {
        "(": ")",
        "[": "]",
        "{": "}"
    }

    // loop over string and put it into stack

    // before putting into stack, check if stack top has opening bracket of current closing bracket, then remove that bracket
    let n = str.length;
    let stack = [];

    for (let c of str) {
        if (c == "(") {
            stack.push(")")
        } else if (c == "{") {
            stack.push("}");
        } else if (c == "[") {
            stack.push("]");
        } else if (stack.length == 0 || stack.pop() != c) {
            return false
        }
    }
    console.log("str", str);
    console.log("Stack", stack);
    return stack.length == 0;
}
let str1 = "()"
let str2 = "()[]{}"
let str3 = "(]"
let str4 = "([])"
let str5 = "{[]}"
console.log("isValid", isValid(str1))
console.log("isValid", isValid(str2))
console.log("isValid", isValid(str3))
console.log("isValid", isValid(str4));
console.log("isValid", isValid(str5));