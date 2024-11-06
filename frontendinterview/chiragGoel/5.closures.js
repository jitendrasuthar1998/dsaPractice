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

let counter1 = Counter(1);

counter1.incrementCounter();
counter1.incrementCounter();
counter1.incrementCounter();

counter1.decrementCounter();

counter1.decrementCounter();

let counter2 = Counter(1);
counter2.displayValue();