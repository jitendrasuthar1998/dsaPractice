function countVowels(str){
    let vowels = ['a','e', 'i', 'o', 'u'];

    let count = 0;
    let n = str.length;
    for(let i=0; i<n;i++){
        if(vowels.includes(str.charAt(i))){
            count++;
        }
    }

    return count;
}

console.log("vowels in hello", countVowels("hello"));

console.log("vowels in My name is Jitendra Suthar.", countVowels("My name is Jitendra Suthar."));