/*
write a function called compute

const input = {
A: (a,b,c) => a + b + c,
B: (a,b,c) => a - b - c,
C: (a,b,c) => a + bc,
}

*/

const input = {
    A: (a,b,c) => a + b + c,
    B: (a,b,c) => a - b - c,
    C: (a,b,c) => a + b * c,
}
    

function compute(a,b,c){
    const output = {};
    console.log("object keys", Object.keys(input))
    for(const val of Object.keys(input)){
        console.log("val ", input[val](a,b,c));

        output[val] = input[val](a,b,c)
    }

    return output;
}

console.log("compute",compute(1,1,1));