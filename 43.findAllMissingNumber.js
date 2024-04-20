// number should be from 1 to n in given array

// find missing numbers from given array

function findMissingNumbers(numbers){
    let result = [];
    for(let i = 0; i<numbers.length; i++){
        let idx = Math.abs(numbers[i]) - 1;

        if(numbers[idx] < 0){
            continue;
        }

        numbers[idx] *= -1; 
    }

    for(let i=0; i<numbers.length; i++){
        if(numbers[i] > 0){
            result.push(i+1);
        }
    }

    return result;
}

console.log();