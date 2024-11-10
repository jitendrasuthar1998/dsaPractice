// i have been given a string, and i have to return the index of word which has the most frequency of given character in it.
// if there are 2 words with the same character frequency, then return the index of first word.

let names = "Mahesh Sagar Rohan Rohit Akash";

function findWordWithMaxChar(names, char) {
    let words = names.split(" ");

    // console.log("words", words);

    let characterFrequencyMap = new Map();

    let pattern = new RegExp(char, "gi");

    for (let i = 0; i < words.length; i++) {
        // console.log("pattern", pattern);
        // console.log("word", words[i].match(pattern));
        let charFrequency = words[i].match(pattern)?.length;

        characterFrequencyMap.set(words[i], charFrequency);
    }

    let maxCharFrequency = 0;
    let maxWord = "";
    for ([key, value] of characterFrequencyMap.entries()) {
        if (value > maxCharFrequency) {
            maxCharFrequency = value;
            maxWord = key;
        }
    }
    // console.log("character frequency", characterFrequencyMap);
    return maxWord;

}



console.log(findWordWithMaxChar(names, "a"))