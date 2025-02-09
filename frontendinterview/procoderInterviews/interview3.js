// {
//     let a = 1;
//     let b = 2;
//     var c = 13;
//     console.log(a);
//     console.log(b);
// }

// console.log(c);
// console.log(a);
// console.log(b);

/*
function checkVariableScope(){
    let a = 1;
    let b = 2;
    c = 3;
    console.log(a);
    console.log(b);
}
checkVariableScope()
console.log(c);
console.log(a);
console.log(b);

*/



// var x = 10;

// function foo() {
//     console.log(x);
//     var x = 100;
//     console.log(x);
// }

// foo();


// foo();

// var foo = 20;

// function foo() {
//   console.log('calling foo');
// }

// foo();

/*

 **Here's the output of the code and the explanation:**

**Output:**

```
calling foo
```

**Explanation:**

1. **Global Variable Declaration:** The line `var foo = 20;` creates a global variable named `foo` and assigns it the value 20.
2. **Function Declaration:** The line `function foo(){ ... }` defines a function named `foo` with its own scope.
3. **Function Precedence:** When you later call `foo();`, JavaScript prioritizes the function over the global variable, executing the function's code.
4. **Function Output:** The function's code instructs the console to log "calling foo," resulting in the output you see.

**Key Points:**

- **Function Precedence:** Functions always take precedence over global variables with the same name when called. This allows you to create functions that operate independently of any variables with similar names.
- **Variable Scope:** The global variable `foo` and the function `foo` exist in different scopes, preventing conflicts.
- **Function Execution:** Calling `foo();` invokes the function, not the global variable.

**Important Note:** While this code demonstrates function precedence, shadowing a global variable with a function of the same name is generally not recommended. It can make code less readable and maintainable. Consider using unique names for variables and functions to avoid confusion.
*/

/* write an example where closure is being used*/

/* counter 

function Counter(initialValue) {
  let count = initialValue;

  function incrementCounter() {
    count++;
    console.log("count is == ", count);
  }

  function decrementCounter() {
    if (count >= 1) {
      count--;
      console.log("count is == ", count);
    }
  }

  return {
    incrementCounter,
    decrementCounter,
  };
}

let counter1 = Counter(10);
let counter2 = Counter(4);

counter1.incrementCounter();
counter1.incrementCounter();
counter1.decrementCounter();

counter2.decrementCounter();

*/

/* 

console.log("Start");
setTimeout(()=> (console.log("Timeout")),0);
console.log("End");

*/

// function printNumbersTimeInterval() {
//     for (let i = 0; i < 10; i++) {
//         setTimeout(() => {
//             console.log(i);
//         }, i * 1000)
//     }
// }

// printNumbersTimeInterval();

/*setTimeout with loop 

for(var i=1;i<=3;i++){
    setTimeout(()=>{
        console.log(i);
    },1000);
}

for(var i=1;i<=3;i++){
    function counter(a){
        setTimeout(()=>{
            console.log(a);
        },a * 1000);
    }
    counter(i);
}

*/

/* setTimeout with Promise  

setTimeout(()=> {
    console.log("Timeout"); // Macrotask
},0);

Promise.resolve().then(()=> console.log("Promise"));
Microtask
console.log("End");

End
Promise
Timeout

*/


async function foo() {
    return "Hello world!";
}

// async function add(a, b) {
//     return a + b;
// }

// add(1, 2).then((res) => console.log(res));

// console.log(result);

// const result = foo();
// result.then((res)=> console.log(res));

const person = { name: "John", age: 22, email: "john@example.com" };

person.email = "john@gmail.com";

const { name: personName, age: personAge, email } = person;

console.log("name", personName);
console.log("age", personAge);

// const person1 = person;
// person1.name = "Jack";

// const person2 = { ...person };
// person2.name = "Person 2";
// console.log("person 2 name", person2.name);

// const { name: personName1, age: personAge1, email1 } = person;

// delete person2.email;
// console.log("person 2", JSON.stringify(person2));
// console.log("person 1 name", personName1);

const address = {
    city: "Jodhpur",
    pinCode: 24444,
}

person.address = address;

console.log("person", JSON.stringify(person));

const person2 = JSON.parse(JSON.stringify(person));

Object.seal(person2); // read only and not extensible
person2.name = "Jack Sparrow"
person2.address.city = "Jaipur"

// person2.gender = "Male"

// Object.seal(person2); // can't add new properties to an object but can change the values of the properties

// person2.name = "Jack Sparrow"
// person2.address.city = "Jaipur"
// console.log("person2", person2);



console.log("person2 keys", Object.keys(person2));

console.log("entries", Object.entries(person2));

for (const [key, value] of Object.entries(person2)) {
    console.log("key", key);
    console.log("value", value);
}

const person3 = Object.assign({}, person)
person3.name = "Person 3"
console.log("person", person);
console.log("person3", person3);

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1)
    }, 1000);
})

const giveDataWithPromise = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(a + b), 1000);
    })
}

// giveDataWithPromise(1, 2).then((res) => console.log("1+2", res));

// promise.then((res) => console.log("resolved", res));

// function Person(name, age, email){
//     this.name = name;
//     this.age = age;
//     this.email = email;
//     console.log("Hello");
// }
// object creation using constructor
// const person1 = new Person("Jitendra",25, "jitendra@gmail.com");
// const person2 = new Person("Kavita",22, "kavita@gmail.com");


// const {name, age, email} = person1;
// console.log("Person1 details", "name", name,"age", age, "email", email)

// const {name:p2name, age:p2age, email:p2email} = person2;
// console.log("Person1 details", "name", p2name,"age", p2age, "email", p2email)

// const userDetails = {
//     "user-name": "Jitubhai",
//     age:25
// }

// accessing user-name by creating its alias

// const {"user-name":userName,age:userage} = userDetails
// console.log("User details", "name", userName, "age", userage)

const promise1 = new Promise((resolve, reject) => {
    const num = 0.6;

    if (num >= 0.5) {
        resolve("Promise is fullfilled");
    } else {
        reject("Promise is failed")
    }
});

const Random = async () => {
    try {
        const message = await promise1;
        console.log("message", message);
    } catch (error) {
        console.log("Error", error);
    }
}

// Random();


const getUserDetails = async () => {
    let githubResponse = await fetch(`https://api.github.com/users/jitendrasuthar1998`);
    let githubUser = await githubResponse.json();
    return githubUser;
}

// getUserDetails().then((user)=> console.log("user", user));


// promise1.then((res)=> console.log("promise successful", res)).catch((err)=> console.log("promise failed", err))


// Objects

// const person1 = {
//     name: "John", age: 20
// }

// person1.city = "Jodhpur";
// person1.area = "Kamla Nehru Nagar";

// const { name, age, city, area } = person1

// person1.age;
// // console.log(person1["name"],person1["city"])

// const person2 = new Object();
// person2.name = "Mayank";
// person2.age = 26;

// function Person(firstName, lastName, age, city, area) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.getFullName = function () {
//         return this.firstName + " " + this.lastName;
//     }
//     this.age = age;
//     this.city = city;
//     this.area = area;
// }

// const per1 = new Person("Jitendra", "Suthar", 25, "Jodhpur", "Kudi");

// // console.log(per1.getFullName())

// // get all keys of an objectz

// const per1AllKeys = Object.keys(per1);
// // console.log("per1AllKeys",per1AllKeys);

// // console.log("is per1 have area key == ", "firstName" in per1)


// // Object.freeze(per1);


// per1.area = "Kamla Nehru Nagar"

// console.log(per1)

// for (const property in per1) {
//     console.log("key", property, "value", per1[property])
// }