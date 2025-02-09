function debouncedFunction(delay, fn) {
    let timer = null;

    return function (...args) {
        clearTimeout(timer);

        timer = setTimeout(() => fn(...args), delay);
    }
}

const display = () => console.log("hello world");

const debouncedDisplay = debouncedFunction(1000, display);

debouncedDisplay();

setTimeout(() => {
    debouncedDisplay();
}, 1000)


setTimeout(() => {
    debouncedDisplay();
}, 2000)

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
person.sayHello(); // ✅ "Hello, I'm Jitendra"


person.displayName();