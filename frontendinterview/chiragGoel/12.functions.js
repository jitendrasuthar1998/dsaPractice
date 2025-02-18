let person = {
    firstName: "John",
    lastName: "Doe",

}

function printFullName(homeTown, state) {
    console.log(this.firstName + " " + this.lastName + "is from " + homeTown + " " + state);
}

printFullName.call(person, "New York", "US");

let person2 = { firstName: "Jane", lastName: "Smith" };

let person3 = { firstName: "Jitendra", lastName: "Suthar" };

// function borrowing

// printFullName.call(person2, "Jaayville", "London");

printFullName.apply(person2, ["Jaayville", "London"]);

// bind method

let printMyName = printFullName.bind(person3, "Jodhpur", "India");

printMyName()

// group the orders based on their status

const orders = [{ id: 101, customer: "Alice", status: "completed" }, { id: 102, customer: "Bob", status: "pending" }, { id: 103, customer: "Charlie", status: "completed" }, { id: 104, customer: "David", status: "cancelled" }, { id: 105, customer: "Eve", status: "pending" }, { id: 106, customer: "Alice", status: "cancelled" }, { id: 107, customer: "Jack", status: "cancelled" }, { id: 108, customer: "John", status: "cancelled" }]

const ordersByStatus = orders.reduce((acc, order) => {
    if (acc[order.status]) {
        acc[order.status].push(order);
    } else {
        acc[order.status] = [order];
    }
    return acc;
}, {})

console.log("order by status:", ordersByStatus);

function findMajorityElements(nums) {
    const countMap = new Map();

    let length = nums.length;

    let majorityElement = null;

    for (let i = 0; i < length; i++) {
        let getNumCount = countMap.get(nums[i]) || 0;

        countMap.set(nums[i], getNumCount + 1);

        let getNumCount1 = countMap.get(nums[i])

        if (getNumCount1 > length / 2) {
            majorityElement = nums[i];
        }
    }

    return majorityElement;
}

const numbers1 = [3, 3, 2, 2, 2, 2, 2, 1]

console.log("Majority element in array 1:", findMajorityElements(numbers1));

function findMostFrequentWords(sentence) {
    let words = sentence.toLowerCase().match(/\b\w+\b/g);
    let wordsMap = new Map();
    let mostFrequentWord = null;
    let mostFrequentWordCount = 0;
    for (let word of words) {
        let wordCount = wordsMap.get(word) || 0;

        wordsMap.set(word, wordCount + 1);

        let wordCount1 = wordsMap.get(word)
        if (wordCount1 > mostFrequentWordCount) {
            mostFrequentWord = word;
            mostFrequentWordCount = wordCount1;
        }

    }

    console.log("Words:", words);
    console.log("Most frequent word:", mostFrequentWord);
    console.log("Most frequent word count:", mostFrequentWordCount);
}

findMostFrequentWords("apple cherry cherry cherry apple cherry");

function findEmployeeWithLongestName(employees) {
    let employeeWithLongestName = employees[0];;

    for (let i = 1; i < employees.length; i++) {
        if (employees[i].name.length > employeeWithLongestName.name.length) {
            employeeWithLongestName = employees[i];
        }
    }

    return employeeWithLongestName.name;
}

let employees = [
    { id: 1, name: "Mahesh", department: "HR" },
    { id: 2, name: "Radha Krishna", department: "IT" },
    { id: 3, name: "Marutha", department: "Sales" }
]

console.log("Employee with the longest name:", findEmployeeWithLongestName(employees));