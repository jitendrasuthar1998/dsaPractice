const input = document.createElement('input');

const state = { value: "Hello" };

function model(state, element) {
    element.value = state.value;
}

model(state, input);
console.log("input value", input.value);

state.value = "Dev"

model(state, input);
console.log("input value", input.value);