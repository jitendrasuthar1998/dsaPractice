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