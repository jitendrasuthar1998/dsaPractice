/* 
var x = 20;

function foo(){
    console.log(x);
    var x = 10;
}

foo();

*/

// question 2

/* 

function foo(){
    var x = 10;
}
console.log(x);
foo();

*/

/* 
question 3
function foo(){
    x = 10;
    console.log(x); // prints 10
}

foo();
console.log(x);

*/
/* 
question 4

function foo(){
    console.log(x);     //error: x is not define
    x = 10;
}

foo();
*/


// script type is module
/*
question 5

function foo(){

    x = 10;
    console.log(x);
}

foo();
// when script type is module, that time we can't create variable on the fly.

*/
/*
question 6

foo();
function foo(){
    console.log("calling foo");
}
var foo = 10;
foo();
*/

/*
question 7

for(var i =1; i<=3;i++){
    setTimeout(()=>{
        console.log(i);
    },1000)
}
*/ 


/*
question 8

for(let i =1; i<=3;i++){
    setTimeout(()=>{
        console.log(i);
    },1000)
}

*/ 


/*
question 9 

setTimeout(()=>{
    console.log("Timeout")
},0)

Promise.resolve().then(()=>console.log("Promise"))
console.log("End");

*/ 

/*
question 10

async function foo(){
    return "Hello world"
}

const result = foo();

console.log(result);

// above code will return a promise object which is fullfilled.
*/ 

/*
question 11

async function foo(){
    throw new Error("There is an error")
}

const result = foo();

console.log(result);

*/ 

/*
question 12
// return a promise in pending state

async function foo(){
    return new Promise(()=>{})
}

const result = foo();

console.log(result);

*/


/*
question 13
// get the output of the promise

async function foo(){
    return "Hello world"
}

const result = foo();

console.log(result);

result.then(value=> console.log(value))

*/

/*
question 14




*/

/*
const user1 = {
    name:"John",
    age:25,
    address:{
        city:"Mumbai",
        state:"Maharashtra"
    }
}

const user2 = user1;

user2.name = "Ramesh";
user2.address.city = "Pune"

console.log("user 1 is == ", user1)
console.log("user 2 is == ", user2)


*/
// create a new user from first user, but it should not change first user values.

function User(name,age,city,state){
    this.name = name;
    this.age = age;
    this.address = {
        city,
        state
    }
}

const user1 = {
    name:"John",
    age:25,
    address:{
        city:"Mumbai",
        state:"Maharashtra"
    }
}

const user3 = new User("Jitendra",25,"Jodhpur","Rajasthan")
// console.log("user3 is == ",user3)


/* one way
const user2 = {...user1,address:{
    ...user1.address
}};

*/

/*second way 
const user2 = structuredClone(user1);

user2.name = "Ramesh";
user2.address.city = "Pune"


console.log("user 1 is == ", user1)
console.log("user 2 is == ", user2)

*/

/* 
third way

const user2 = JSON.parse(JSON.stringify(user1));

user2.name = "Ramesh";
user2.address.city = "Pune"


console.log("user 1 is == ", user1)
console.log("user 2 is == ", user2)

*/
