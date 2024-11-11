/* 

*****
*****
*****
*****
*****

you have given n, and you have to print n stars in n lines


*/

function starsPattern(n) {
    let starString = "";

    for (let i = 0; i < n; i++) {
        starString += "*";
    }

    for (let i = 0; i < n; i++) {
        console.log(starString);
    }
}

/*

*
**
***
****
*****

*/

function starsPattern2(n) {
    let starString = "";

    for (let i = 0; i < n; i++) {
        starString += "*";
        console.log(starString);
    }
}

function pattern3(n) {
    let starString = "";

    for (let i = 1; i <= n; i++) {
        starString += i;
        console.log(starString);
    }
}

function pattern4(n) {


    for (let i = 1; i <= n; i++) {
        let starString = "";
        for (let j = 1; j <= i; j++) {
            starString += i;
        }
        console.log(starString);
        starString = "";
    }
}

function pattern5(n) {

    for (let i = 1; i <= n; i++) {
        let starString = "";
        for (let j = i; j <= n; j++) {
            starString += "*";
        }
        console.log(starString);
        starString = "";
    }
}

function pattern6(n) {

    for (let i = n; i >= 1; i--) {
        let starString = "";


        for (let j = 1; j <= i; j++) {

            starString += j;

        }
        console.log(starString);
        starString = "";
    }
}

pattern6(5)
starsPattern(10);

starsPattern2(5);

pattern4(5);

pattern5(5);

/*
1
12
123
1234
12345
*/

function numberPattern(n) {
    let str = "";
    console.log("numberPattern");
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            str += j
        }
        console.log(str);
        str = "";
    }
}

numberPattern(5);

/*
1
22
333
4444
55555
*/

function numberPattern1(n) {
    let str = "";
    console.log("numberPattern");
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            str += j
        }
        console.log(str);
        str = "";
    }
}

numberPattern(5);

/*
*****
****
***
**
*
*/
