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

function numberPattern4(n) {


    for (let i = 1; i <= n; i++) {
        let starString = "";
        for (let j = 1; j <= i; j++) {
            // console.log("j", j);
            starString += i;
        }
        console.log(starString);
        starString = "";
    }
}

function numberPattern5(n) {


    for (let i = n; i >= 1; i--) {
        let starString = "";
        for (let j = 1; j <= i; j++) {
            // console.log("j", j);
            starString += i;
        }
        console.log(starString);
        starString = "";
    }
}

function starsPattern1(n) {


    for (let i = n; i >= 1; i--) {
        let starString = "";
        for (let j = 1; j <= i; j++) {
            // console.log("j", j);
            starString += "*";
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

// numberPattern(5);
// pattern6(5)
// starsPattern(10);

// starsPattern2(5);

// numberPattern4(5);
// numberPattern5(5);
// starsPattern1(5);
// pattern5(5);

// numberPattern(5);
/*
*****
****
***
**
*
*/

function forwardStars(n) {
    // let star = "";

    for (let i = 0; i < n; i++) {
        let star = "";

        for (let j = i; j < n; j++) {
            star += "*";
        }
        console.log(star);
    }
}


/*
12345
1234
123
12
1

*/

function numberPattern6(n) {


    for (let i = n; i >= 1; i--) {
        let starString = "";
        for (let j = 1; j <= i; j++) {
            // console.log("j", j);
            starString += j;
        }
        console.log(starString);
        starString = "";
    }
}

// numberPattern6(5);

// forwardStars(5);

/*
1
2 3
4 5 6
7 8 9 10
11 12 13 14 15
*/

function numberPattern7(n) {
    let count = 0;

    for (let i = 1; i <= n; i++) {
        let numStr = "";
        for (let j = 1; j <= i; j++) {
            count++;
            if (j == i) {
                numStr += `${count}`
            } else {
                numStr += `${count} `
            }
        }
        console.log(numStr)
    }
}

numberPattern7(5);