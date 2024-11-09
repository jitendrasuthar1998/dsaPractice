function throttle(mainFunction, delay) {
    let timer = null;

    return function (...args) {
        if (timer === null) {
            mainFunction(...args);

            timer = setTimeout(() => {
                timer = null;
            }, delay)
        }
    }
}

function searchData() {
    console.log("Searching...");
}

const throttleSearch = throttle(searchData, 5000)

throttleSearch()

throttleSearch()
throttleSearch()
throttleSearch()
throttleSearch()
throttleSearch()
throttleSearch()

setTimeout(() => {
    throttleSearch()
}, 1000)

setTimeout(() => {
    throttleSearch()
}, 2000)

setTimeout(() => {
    throttleSearch()
}, 3000)

setTimeout(() => {
    throttleSearch()
}, 4000)

setTimeout(() => {
    throttleSearch()
}, 5000)

setTimeout(() => {
    throttleSearch()
}, 6000)