/* Problem Description
Given a number n, you have to print a diamond-shaped pattern with 2n-1 rows using '*', with the i’th row having i asterisks for i <= n and 2n-i asterisks for i > n. (i starts at 1)

For eg. if n = 5, the pattern will be:

image

Input format
One line of input, containing an integer - n.

Output format
Print the pattern as described.

Sample Input 1
5

Sample Output 1
image

Constraints
0 < n < 100

*/

// if n is 5, that time print stars in 9 lines.

// number of stars present at line number 1 will be equal to the number of stars present at line number 9.

// arrayOfString[i] = arrayOfString[2 * n - i - 2]
// n is the given number
// i is the line number

// generate a string of stars and return it

function generateStars(n){
    let starString = "* ";

    for(let i=0;i<n;i++){
        starString += "* ";
    }

    return starString;
}

function diamondPattern(n){
    let arrayOfString = [];

    for(let i=0;i<2*n;i++){
        arrayOfString.push('');
    }    

    for(let i=0;i<n;i++){
        arrayOfString[i] = arrayOfString[2 * n - i - 2] = generateStars(i);
    }
    
    // arrayOfString.forEach((string)=> console.log(string));
    return arrayOfString;
}

console.log(diamondPattern(5))