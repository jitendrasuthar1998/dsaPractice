// create a Counter function with private count variable
// example of Closures

function Counter(count) {
    let countValue = count;

    function displayValue() {
        console.log(countValue);
    }

    function incrementCounter() {
        countValue += 1;
        console.log(countValue);
    }

    function decrementCounter() {
        countValue -= 1;
        console.log(countValue);
    }

    return { displayValue, incrementCounter, decrementCounter }

}

class Counter1 {
    constructor(count) {
        this.countValue = count;
    }

    displayValue = function () {
        console.log(this.countValue);
    };

    incrementCounter = function () {
        this.countValue += 1;
        console.log(this.countValue);
    };

    decrementCounter = function () {
        this.countValue -= 1;
        console.log(this.countValue);
    };
}


// let counter1 = Counter(1);

// counter1.incrementCounter();
// counter1.incrementCounter();
// counter1.incrementCounter();

// counter1.decrementCounter();

// counter1.decrementCounter();

// let counter2 = Counter(1);
// counter2.displayValue();

let counter = new Counter1(5);
counter.incrementCounter();
let counter1 = new Counter1(1);
counter1.incrementCounter();
counter.incrementCounter();
counter.incrementCounter();
counter.incrementCounter();
counter1.incrementCounter();