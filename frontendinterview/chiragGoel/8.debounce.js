
// delay a function execution for some seconds

function debouncedFunction(func, delay) {
    let timer;

    return function (...args) {
        console.log("args", ...args);
        if (timer) {
            clearTimeout(timer);
        };

        timer = setTimeout(() => {
            const result = func(...args);
            console.log("result", result);
        }, delay);
    }
}


function add(a, b) {
    console.log("add", a, b);
    return a + b;
}

// function fetchSuggestions(query) {
//     console.log(`Fetching suggestions for: ${query}`);
//     // Simulating an API call
//     fetch(`https://api.example.com/suggestions?q=${query}`)
//         .then(response => response.json())
//         .then(data => console.log("Suggestions:", data))
//         .catch(error => console.error("Error fetching suggestions:", error));
// }

// const debouncedSearchSuggestion = debouncedFunction(fetchSuggestions, 500);

// debouncedSearchSuggestion("ra");
// debouncedSearchSuggestion("rab");


const debouncedAdd = debouncedFunction(add, 500);

setTimeout(() => {
    debouncedAdd(2, 3)
}, 200);
setTimeout(() => {
    debouncedAdd(7, 8)
}, 400);
setTimeout(() => {
    debouncedAdd(8, 9)
}, 600);
;


setTimeout(() => {
    debouncedAdd(5, 6)
}, 800)

setTimeout(() => {
    debouncedAdd(10, 11)
}, 1100);
;

// function debounce(func, delay) {
//     let timer;
//     console.log("debounce");
//     return function (...args) {
//         console.log("before timeout");
//         clearTimeout(timer);

//         timer = setTimeout(() => {
//             func(...args);
//         }, delay)
//     }
// }

// function searchData() {
//     console.log("Searching...");
// }

// const debouncedSearch = debounce(searchData, 5000);
// setTimeout(() => {
//     debouncedSearch()
// }, 1000)

// setTimeout(() => {
//     debouncedSearch()
// }, 2000)

// setTimeout(() => {
//     debouncedSearch()
// }, 3000)

// setTimeout(() => {
//     debouncedSearch()
// }, 4000)

// setTimeout(() => {
//     debouncedSearch()
// }, 5000)

// setTimeout(() => {
//     debouncedSearch()
// }, 6000)