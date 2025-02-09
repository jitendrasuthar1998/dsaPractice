const fruits = ["Banana", "Orange", "Apple", "Mango"];

/*
Array Methods

1. Find array length
2. Push and Pop
3. Shift and unshift
4. Convert array into a string
5. Flatten array (converting 2D array into 1D array)
*/

console.log("fruits string", fruits.toString())

console.log("fruits string with combinations", fruits.join(" * "))

fruits.push("Graps")

console.log("fruits after pushing Graps", fruits)

const poppedFruit = fruits.pop();

console.log("fruits after popping", fruits, "popped fruit", poppedFruit)

fruits.push("Kiwi");
fruits.push("Papaya");
fruits.push("Lichi")

console.log("updated fruits", fruits);

const shiftedFruit = fruits.shift();

console.log("fruits after shifted", fruits, "shifted fruit", shiftedFruit);

fruits.unshift("Kamal");

console.log("fruits after unshifted", fruits);

// splice

// add new item at specified position

// add Lemon and Locki, start from 3rd index

fruits.splice(3, 0, "Lemon", "Locki")

console.log("fruits after adding Lemon and Locki at 3rd index", fruits)

const newFruits = fruits.slice(0, 4);
// endIndex = startIndex + pageSize
// products.slice(startIndex, )

console.log("newfruit after", newFruits)

const deletedItems = fruits.splice(3, 3)

console.log("deletedItems", deletedItems)

console.log("fruits after removing", fruits)

function memoize(fn) {
    const cache = {};
    return function (n) {
        if (cache[n]) return cache[n];
        const result = fn(n);
        cache[n] = result;
        return result;
    };
}

function recursionFactorial(n) {
    return n <= 1 ? 1 : n * factorial(n - 1)
}

const factorial = memoize();

console.log(factorial(5)); // ✅ 120 (Calculated)
console.log(factorial(5)); // ✅ 120 (From Cache)
