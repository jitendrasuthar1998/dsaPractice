function firstOccurenceOfNeedle(haystack, needle){
    let m = haystack.length;
    let n = needle.length;

    for(let i=0;i<=m-n;i++){
        for(let j=0;j<n;j++){
            if(haystack[i+j] != needle[j]){
                break;
            }

            if(j == n-1){
                return i;
            }
        }
    }
    return -1;
}

let haystack = "sadbutsad", needle = "sad";

console.log("sad occurence of needle in haystack", firstOccurenceOfNeedle(haystack, needle));