/*
Problem Description
A school has following rules for grading system:

[0, 25) - F

[25, 45) - E

[45, 50) - D

[50, 60) - C

[60, 80) - B

[80, 100] - A

If the input is less than 0 or greater than 100 then it is considered invalid.

You are given a real number score, print the corresponding grade or "Invalid" if the input is invalid.

Input format
First line contains a real number - The score.

Output format
Print the corresponding grade or "Invalid" if the input is invalid.

Sample Input 1
83.5

Sample Output 1
A

Sample Input 2
42

Sample Output 2
E

Constraints
Score can be any real number.

*/

function findGrade(score){

    if(0 <= score && score < 25){
        return "F";
    }

    if(25 <= score && score < 45){
        return "E";
    }

    if(45 <= score && score < 50){
        return "D";
    }

    if(50 <= score && score < 60){
        return "C";
    }

    if(60 <= score && score < 80){
        return "B";
    }

    if(80<= score && score < 100){
        return "A";
    }

    if(score < 0 || score > 100){
        return "Invalid";
    }
}

console.log(findGrade(83.3));