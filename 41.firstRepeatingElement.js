// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
let nums = [10, 3, 5, 4, 3, 5, 6];

// find first repeating element

function findFirstRepeatingElement(n, arr){
    let numsMap = new Map();
    
    for(let i=0;i<n;i++){
        if(numsMap.has(arr[i])){
            let freq = numsMap.get(arr[i]);
            numsMap.set(arr[i], freq+1);
        }else{
         numsMap.set(arr[i],1);    
        }
        
    }
    
    for(const [value, freq] of numsMap.entries()){
       if(freq == 2){
           return value;
       }
    }
}

console.log(findFirstRepeatingElement(nums.length, nums))

console.log("Try programiz.pro");