//  string

// is valid palindrome

// anagram 

// Hello, world!    How are you?

function giveStringWithoutSpaceAndSpecialCharacters(str) {
    let newStr = "";
    let n = str.length;
    for (let i = 0; i < n; i++) {
        console.log(str.charAt(i));
        if (str.charAt(i).match(/\w/g) && !str.charAt(i).includes("_")) {
            newStr += str.charAt(i).toLowerCase();
        }
    }

    return newStr;
}

// console.log("giveStringWithoutSpaceAndSpecialCharacters", giveStringWithoutSpaceAndSpecialCharacters("Hello world!"));

function isValidPalindrome(str) {
    let str1 = giveStringWithoutSpaceAndSpecialCharacters(str);

    console.log("str1: " + str1);

    let str2 = reverseString(str1);

    if (str1 == str2) {
        return true;
    } else {
        return false
    }
}

function reverseString(str) {
    let newStr = ""
    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }
    return newStr;
}



function optimizedIsValidPalindrome(s) {

    // regex function to replace the characters which are not alphanumeric to empty string

    // convert result string to lower case

    // then traverse result string from left to right and right to left at the same time

    // when at any moment, item at left is not equal to item at right indexes, then we can say, string is not a palindrome

    const formattedStr = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
    console.log("formattedStr", formattedStr);
    let i = 0, j = formattedStr.length - 1;

    while (i < j) {
        if (formattedStr[i] === formattedStr[j]) {
            i++;
            j--;
        } else {
            return false
        }
    }
    return true
}

console.log("isValidPalindrome", optimizedIsValidPalindrome("Hello, world!  How are you?     "));