/*
 * You are given a string, and you have to reverse order of words and return the string.
 * If there is any leading or trailing whitespace, then you must have to remove them, and reverse the order of words.
 *
 *
 *
 * sample string 1 = "hello world"
 *
 * sample output 1 = "world hello"
 *
 * sample input 2 = "    Jitendra suthar is   a great person   "
 *
 * sample output 2 = "person great a is suthar Jitendra"
 *
 *
 */

function reverseOrderOfWords(s) {
  // create a mutable string

  let resultantString = '';
  // run a for loop over index from length - 1 to -1 by index
  for (let i = s.length - 1; i >= -1; i--) {
    // if index is not equal to -1 and character at index is not space, then continue

    if (i != -1 && s.charAt(i) != ' ') {
      continue;
    }

    // set a count variable to 0

    let count = 0;

    // run a for loop over all characters from index + 1 till the next space or strings

    for (let j = i + 1; j < s.length && s.charAt(j) !== ' '; j++) {
      // append the characters in the output resultant

      resultantString += s.charAt(j);
      //   increment the count
      count++;
    }

    if (count > 0 && i != -1) {
      resultantString += ' ';
    }
  }

  return resultantString;
  // append a space character
}

console.log(reverseOrderOfWords('  hello world  '));

// second type

// Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

/**
Example 1:

Input: s = "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"

Example 2:

Input: s = "Mr Ding"
Output: "rM gniD"

*/

function reverseOrderOfCharacterInString(str) {
  // loop over from start to end
  console.log('str is == ', str);
  // if character at index is not space, then append that character to an empty string.

  // if character at index is space, reverse tempString and then append that tempString into resultantString and empty tempString
  let resultantString = '';
  let tempString = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] != ' ') {
      tempString = str[i] + tempString;
    }

    if (str[i] !== ' ' && str[i + 1] == ' ') {
      resultantString = resultantString + tempString + ' ';
      tempString = '';
    }
  }
  return resultantString + tempString;
}

console.log(
    reverseOrderOfCharacterInString('    hello how are YOU       world')
);
