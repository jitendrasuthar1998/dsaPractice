
// delay a function execution for some seconds

function debounce(func, delay) {
    let timer;
    console.log("debounce");
    return function (...args) {
        console.log("before timeout");
        clearTimeout(timer);

        timer = setTimeout(() => {
            func(...args);
        }, delay)
    }
}

function searchData() {
    console.log("Searching...");
}

const debouncedSearch = debounce(searchData, 5000);
setTimeout(() => {
    debouncedSearch()
}, 1000)

setTimeout(() => {
    debouncedSearch()
}, 2000)

setTimeout(() => {
    debouncedSearch()
}, 3000)

setTimeout(() => {
    debouncedSearch()
}, 4000)

setTimeout(() => {
    debouncedSearch()
}, 5000)

setTimeout(() => {
    debouncedSearch()
}, 6000)