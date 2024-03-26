// s, t, t is an anagram of s.

// anagram is when we can create first string by rearranging second string.

// s = anagram

// t = nagaram

// anagram , nagaram

// car

// rat

// string will contain only lowercase letters.

// first method

// generating permutation of first string and check if that permutated string is equal to second string

// rat ,
// rat, tar, art, atr, tra, rta
// if anyone of the permutation is equal to the second string, then both strings will be anagram to each other.

// !3

// 1 * 2 * 3

// !4 => 1 * 2 * 3 * 4

// Second method

// s = aabbccddee

// t = ababcdcdee

// sort both strings by character and check if the resultant string is equal to each other.

function isAnagramBySort(s, t) {
  let firstString = s.split('').sort().join('');
  let secondString = t.split('').sort().join('');

  console.log('firstString', firstString);
  console.log('secondString', secondString);

  if (firstString == secondString) {
    return true;
  } else {
    return false;
  }
}

let s = 'anagram';
let t = 'nagaram';

console.log('isAnagram == ', isAnagramBySort('anagram', 'nagaram'));

// third method

// create a set for both strings, and check if in both set, the frequency of characters is same or not

// if both string are anagram to each other, that time the frequency of each character will also be same in both string.

// how to check the frequency of characters?

// create set of 26 characters from a to z.

// check if all characters have same frequency in both set, then they are anagram to each other

function isAnagramArray(s, t) {
  // create a frequency array f1 for string s of 26 size
  // create a frequency array f2 for string t of 26 size

  // run a loop over all characters in string s
  // frequency of (ch-'a')++ in f1

  // run a loop over all characters in string t
  // frequency of (ch-'a')++ in f2

  // run a loop over all indeces 0 to 25
  // if f1 of idx != f2 of idx, return false

  if (!s && !t) {
    return true;
  }

  if (!s || !t) {
    return false;
  }

  let f1 = new Array(26).fill(0);
  let f2 = new Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    // frequency of (ch-'a')++ in f2

    f1[s.charCodeAt(i) - 'a'.charCodeAt()]++;
    f2[t.charCodeAt(i) - 'a'.charCodeAt()]++;
  }

  for (let i = 0; i < f1.length; i++) {
    if (f1[i] !== f2[i]) {
      return false;
    }
  }
  return true;
}

console.log('isAnagramArray == ', isAnagramArray(s, t));