// objects in javascript

const user = {
    name:"Jitendra",
    age:24,
    "is a smart boy": true
}

console.log(user.name);

user.name = "Jitendra Suthar";

console.log(user.name);

delete user.age;

console.log(user);

const func = (function (a){
    delete a;
    return a;
})(5);

console.log(func); // 5

console.log("Is Jitendra a smart boy", user["is a smart boy"] ? "yes" : "no")

// because delete keyword is only work when we want to delete any key from an object.

// here a is a local variable. and delete can't remove that variable.

const property = "firstName";
const name = "Jitendra";

// const newUser = {
//     property, name
// }

const newUser = {
    [property]: name
}

console.log('new user', newUser) 

for(key in user){
    console.log(key,":",user[key]);
}

const obj = {
    a:"one",
    b:"two",
    a:"three"
}

console.log(obj);

// if you have two keys with same name, that time it will be replaced by second key with the last specified value.

// {a:"three",b:"two"}

// create a function multiplyByTwo(obj) that multiplies all numeric property values of nums by 2

let nums = {a:100, b:200, title:'My nums'}

function multiplyByTwo(obj){
    for(key in obj){
        if(typeof obj[key] == "number"){
            obj[key] = obj[key] * 2;
        }
    }
}

multiplyByTwo(nums);
console.log(nums);

// what's the output of the following code?

const a = {};
const b = {key:"b"};
const c = {key:"c"};

a[b] = 123;
a[c] = 456;

console.log('b',b);
console.log('a',a)
console.log('a[b]',a[b]);

// what is JSON.stringify

const prod = {name:'Apple', qty:2, price:3};

const prod1 = {name:'Banana', qty:2, price:3};

console.log(JSON.stringify(prod));

localStorage.setItem("prod",JSON.stringify(prod));

console.log(JSON.parse(localStorage.getItem("prod")));

// spread operator

console.log([..."Jitendra"]);

const prod2 = {isNew:true, ...prod1};

console.log('prod2', prod2);

const setting = {name:"jitendra", level:20, health:100};

const data = JSON.stringify(setting,["level", "health"]);
// only stringify given properties in an object.

console.log("data", data);

const shape = {
    radius:10,
    diameter(){
        return this.radius * 2;
    },
    parameter:()=> 2 * Math.PI * this.radius
}

console.log("diameter", shape.diameter());


window.radius = 20;

// when you call arrow function, this keyword refers to window object. and in window object, radius is not defined.
console.log("parameter", shape.parameter());

// what is destructuring in objects?

const user1 = {firstName:'Jitendra',lastName:"Suthar" };

const {firstName, lastName} = user1;

console.log("firstName", firstName, "lastName", lastName);
// how you can variable in object destructuring?

const user2 = {firstName:'Jaya',lastName:"Suthar" };

const {firstName:user2FirstName, lastName:user2LastName} = user2;

console.log("firstName", user2FirstName, "lastName", user2LastName);

const user3 = {firstName:'Jaya',lastName:"Suthar", address:{
    street:"1A/444", area:"Kudi bhagtasni"
} }

const {address:{street,area}} = user3;

console.log("address", street, area);

// object referencing

let greet = {greeting:"Hey!"};

let talk = greet;
console.log("greet", talk.greeting)
greet.greeting = "Nice to meet you."
console.log("greet", talk.greeting)

// object comparison

console.log({a:1} == {a:1});
// console.log({a:1} === {a:1})
// This condition will always return 'false' since JavaScript compares objects by reference, not value.ts(2839)

const value = {number:10};

function multiply(x = {...value}){
    console.log(x.number *= 2);
}

multiply();
multiply();

multiply(value); //20
multiply(value); //40