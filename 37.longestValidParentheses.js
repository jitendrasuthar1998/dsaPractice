/*
Problem Description
Given a string S containing just the characters '(' and ')', find the length of the longest valid (well-formed) parentheses substring.

Input format
First line contains a string - The string S.

Output format
Print the length of the longest valid substring.

Sample Input 1
()(()(())

Sample Output 1
6

Explanation
The last 6 characters of the string forms the longest valid substring i.e. "()(())".

Constraints
0 <= length of string <= 10^5
*/


let str1 = "((()()"

function longestValidParentheses(s) {
    
    if(s==null || s.length<2){
        return 0;
    }

    let stack = [];

    for(let i=0; i<s.length; i++){
        if(s.charAt(i) == "("){
            stack.push(i)
        }else{
            if(stack.length!=0 && s.charAt(stack[stack.length - 1]) == "("){
                stack.pop()
            }else{
                stack.push(i);
            }
        }
    }
    
    let max = 0;
    let end = s.length;

    while(stack.length!=0){
        let ele = stack.pop();
        max = Math.max(max, end - ele - 1);
        end = ele;
    }
    return Math.max(end, max)
}

console.log("length is == ", longestValidParentheses(str1))