// learn and practice well how array methods works

const cars = ["Saab", "Volvo", "BMW"];


cars.sort((a, b) => a.localeCompare(b));

console.log("cars after sorting", cars);
// map

function MakeCarsNameCapital() {
    const capitalizedCars = cars.map(car => car.toUpperCase());
    console.log("capitalized cars", capitalizedCars);
    return capitalizedCars
}

// forEach

function PrintCarsName() {
    cars.forEach(car => {
        console.log(car);
    });
}

// filter

function FilterBMWCar(carToRemove) {
    let filteredCars = cars.filter(car => car == carToRemove);
    console.log("filtered cars", filteredCars);
    return filteredCars
}

// push 

function AddNewCars(car) {
    let newCars = cars.push(car);
    console.log("added new car", cars);
    console.log("added new cars length", newCars);
}

MakeCarsNameCapital();
PrintCarsName();
FilterBMWCar("BMW");
console.log("cars after filter", cars);
AddNewCars("Jaguar")
AddNewCars("Ola");
AddNewCars("Uber");


// pop

function RemoveCar() {
    let removedCar = cars.pop();
    console.log("removed car", removedCar);
}

RemoveCar();
console.log("cars after pop", cars);

RemoveCar();
console.log("cars after pop", cars);

// unshift
function AddCarToTheFront(car) {
    let newCarsLength = cars.unshift(car);
    console.log("added car to front", newCarsLength);
    console.log("updated cars", cars);
}

AddCarToTheFront("Tarzan");
AddCarToTheFront("Lamborghini")

// shift

function RemoveCarFromTheFront() {
    let removedCarFromFront = cars.shift();
    console.log("removed car from front", removedCarFromFront);
    console.log("updated cars", cars);
}

RemoveCarFromTheFront();

// join

function JoinCarsName() {
    let carsName = cars.join(", ")
    console.log("joining car", carsName);
    console.log("updated cars after join", cars);
}

JoinCarsName();

// concat

function JoinCarsArray() {
    let otherCars = ["Ferrari", "TVS", "Honda"];
    let joinedCars = cars.concat(otherCars);
    // console.log("joined car", joinedCars);
    console.log("cars before joined othersCars into cars", cars);
    console.log("total cars after joined othersCars into cars", joinedCars);
}

// JoinCarsArray();

// slice

function GiveCarsNames(start, end) {
    let givenCars = cars.slice(start, end);
    console.log("given car", givenCars);
    console.log("cars array after given car", cars);
}

GiveCarsNames(3, 5)

// splice

function SpliceCars(start, count, newCar) {
    let removedCars = cars.splice(start, count, newCar);
    console.log("removed car", removedCars);
    console.log("cars array after splice", cars);
}

SpliceCars(0, 2, "Harmor");


// reduce

const numbers = [1, 2, 3, 4, 5, 6, 7];

const result = numbers.reduce((prev, curr, currentIndex, array) => {
    console.log("prev element", prev);
    console.log("curr element", curr);
    // console.log("current index", currentIndex);
    // console.log("array", array);
    return prev + curr;
})

console.log("result", result);

const materials = [
    { name: "Brick", cost: 3000 },
    { name: "Plaster", cost: 5000 },
    { name: "Wood", cost: 3600 },
    { name: "Rust", cost: 5400 },
]

const totalPrice = materials.reduce((prev, curr) => {
    return prev + curr.cost
}, 0);

// const totalCost = materials.reduce((prev, curr) => {
//     return prev + curr.cost
// }, 0)

// console.log("totalCost", totalCost);

const keyValuePairs = [
    ["username", "decode"], ["memberSince", "2020-04-03"], ["age", 25]
]

const obj = keyValuePairs.reduce((prev, keyValuePair) => {
    const key = keyValuePair[0];
    const value = keyValuePair[1];

    prev[key] = value;
    return prev;
}, {})

console.log("obj", obj);