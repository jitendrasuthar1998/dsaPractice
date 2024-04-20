// first question

// console.log(a);
// console.log(b);
// var a = b = 5;


// second question

// console.log(number);
// let number = 5;

// third question

// var c = 5;
// console.log(c++);
// console.log(c);

// fourth question

console.log(1 < 2 < 3);
console.log(3 > 2 > 1);

// fifth question

var name = "jitendra";

const foo = function() {
    console.log(this.name);
}

foo.call({name:'John'});

// in arrow function, this directs to its parent scope.

// this keyword works different in arrow function and normal function.

const zoo = function()  {
    console.log(this.name);
    const bar = () => {
        console.log(this.name);
    }
    bar();
}

zoo.call({name:'Jaya'});

const user = {
    id:123,
    name:'John doe',
    age:28,
    address:{
        city:'Mumbai',
        state:'Maharashtra'
    }
}

// freeze user id, so that it can't be changed later

Object.defineProperty(user,"id", {writable:false})

user.id = 3242;

console.log(user);

// object operations

const book1 = {
    name:'The monk who sold his ferrari',
    author:'Robin Sharma'
}

// add new key to object
book1.genre = "Mind management";
book1.published = "2020";
console.log("book1 after adding genre and published date", book1);

// deleting existing key
delete book1.published;
console.log("book1 after deleting published date", book1);

// how to freeze object, so that not any new value can't be added to object, can't be deleted any value from object, or can't be changed any value of object

const book2 = {
    name:'The power of positive thinking',
    author:'Jay Shah'
}

Object.freeze(book2);
// add new key to object
book2.genre = "Mind management";
book2.published = "2020";
console.log("book2 after adding genre and published date", book2);

// deleting existing key
delete book2.published;
console.log("book2 after deleting published date", book2);


// Primitive and non primitive data types

// pass by value or pass by reference

/*
One of the fundamental differences of objects versus primitives is that objects are stored and copied “by reference”, whereas primitive values: strings, numbers, booleans, etc – are always copied “as a whole value”.
*/ 

let message = "Hello";
let phrase = message;

console.log("message", message);
console.log("phrase", phrase);

let person = {
    name: "Jitendra"
}