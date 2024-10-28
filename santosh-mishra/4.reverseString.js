/*
4. **Reverse a String**: Reverse the characters of a string.
    - Input: "hello", Output: "olleh"
*/

function reverseString(str){
    let newStr = "";
    let n = str.length  - 1;
    for(let i=n; i>=0; i--){
        newStr = newStr + str[i];
    }

    console.log(newStr);
    return newStr;
}

reverseString("hello");

reverseString("jitendra");

function isPalindrome(str){
    let reverseStr = reverseString(str);

    if(reverseStr == str){
        console.log(`${str} is a palindrome`);
    }else{
        console.log(`${str} is not a palindrome`);
    }
}

isPalindrome("hello");

isPalindrome("racecar");