function debouncedFunction(delay, fn) {
    let timer = null;

    return function (...args) {
        clearTimeout(timer);

        timer = setTimeout(() => fn(...args), delay);
    }
}

const display = () => console.log("hello world");

const debouncedDisplay = debouncedFunction(1000, display);

// debouncedDisplay();

// setTimeout(() => {
//     debouncedDisplay();
// }, 1000)


// setTimeout(() => {
//     debouncedDisplay();
// }, 2000)

const user = { name: "Jitendra" };

function greet(greeting) {
    console.log(`${greeting}, ${this.name}`);
}

greet.call(user, "Hello");  // ✅ "Hello, Jitendra"
greet.apply(user, ["Hi"]);  // ✅ "Hi, Jitendra"

const boundGreet = greet.bind(user);
boundGreet("Hey");  // ✅ "Hey, Jitendra"


function Person(name) {
    this.name = name;
}

Person.prototype.displayName = function () {
    console.log("Name is", this.name)
}

Person.prototype.sayHello = function () {
    console.log(`Hello, I'm ${this.name}`);
};

const person = new Person("Jitendra");
// person.sayHello(); // ✅ "Hello, I'm Jitendra"


// person.displayName();

// create a function to flatten deep nested array

const nestedArray = [1, 2, 3, [4, 5, 6, [8, 9, 10]], [11, 12, [13, 14, [15, 16]]]]

function flattenArray(numbers, result = []) {
    for (let i = 0; i < numbers.length; i++) {
        if (Array.isArray(numbers[i])) {
            flattenArray(numbers[i], result)
        } else {
            result.push(numbers[i])
        }
    }
    return result;
}

// console.log("flattenArray", flattenArray(nestedArray))

function printNumbers(n, num = 1) {
    // base case
    if (num == n) {
        console.log("n", n);
        return;
    }

    console.log("num", num++);
    printNumbers(n, num);
    // recursive function call
}

// printNumbers(10)


function Counter(n = 0) {
    let counter = n;

    function incrementCounter() {
        counter++;
        printCounter()
    }

    function decrementCounter() {
        counter--;
        printCounter()
    }

    function printCounter() {
        console.log(counter);
    }

    return { incrementCounter, decrementCounter };
}

let counter1 = Counter();

counter1.incrementCounter();
counter1.incrementCounter();
counter1.incrementCounter();
counter1.decrementCounter();

const promise = (number) => {
    return new Promise((resolve, reject) => {
        // let number = 44;
        // console.log("number", number);
        if (number > 40) {
            // console.log("number", number);
            resolve(`Promise resolved - ${number}`)
        } else {
            console.log("number", number);
            reject(`Promise rejected - ${number}`)
        }
    })
}

promise(40).then((res) => console.log(res)).catch((err) => console.log(err));

promise(41).then((res) => console.log(res)).catch((err) => console.log(err));

function swapNumbers(a, b) {
    a = a + b;
    b = a - b;
    a = a - b;
    return { a, b };
}

console.log("swapNumbers(4, 5)", swapNumbers(4, 5));