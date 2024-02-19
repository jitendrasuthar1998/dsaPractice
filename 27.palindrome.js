/*
Problem Description
Given a string S which consists of both lowercase and uppercase alphabetical letters, you have to write a function to check if string S is a permutation of a palindrome or not. Note: Characters are case sensitive i.e. ‘a’ is not the same as ‘A’.

Input format
First line contains an integer representing the value of T, the number of test cases.

In next T lines each line contains the string S.

Output format
For each test case, print "True"(without quotes) if it is a permutation of a palindrome and "False" otherwise.

Constraints
1 <= T <= 10

1 <= length(S) <= 100000

Sample Input 1
3

nnaamm

hello

Aab

Sample Output 1
True

False

False

Explanation 1
nnaamm is a permutation of namman, which is a palindrome

hello is not a permutation of any palindrome

Aab is not a permutation of any palindrome

*/
// hash table

function isPalindrome(str) {
  //    create an object map frequency of character as key, integer as value

  const freq = new Map();
  // run a loop over all characters of input string
  for (let i = 0; i < str.length; i++) {
    // do the value++ for the current character key in frequency hashmap

    const oldFreq = freq.get(str[i]) || 0;

    freq.set(str[i], oldFreq + 1);
  }

  //   set odd integer variable with value 0

  let odd = 0;

  for (const [key, value] of freq.entries()) {
    if (value % 2 != 0) {
      odd++;
    }
  }
//   console.log('freq: ', freq);

  if (odd <= 1) {
    return true;
  }
  return false;
  // if all characters frequencies are even, or only one character frequecy is odd
}

let strings = ["abba","bcde","ABAB"]

strings.forEach((str)=>{
    console.log(`${str} is palindrom? == `,isPalindrome(str));
})
