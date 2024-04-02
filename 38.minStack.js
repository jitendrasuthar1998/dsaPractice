let stack = []
let minStack = [];

function push(x) {
    stack.push(x);
    if (minStack.length == 0) {
        minStack.push(x)
    }

    else if (minStack.length != 0) {
        if (x < minStack[minStack.length - 1]) {
            minStack.push(x);
        }
    }
}

function pop() {
    if (stack[stack.length - 1] > minStack[minStack.length - 1]) {
        let poppedElem = stack.pop();
        return poppedElem;
    } else if (stack[stack.length - 1] <= minStack[minStack.length - 1]) {
        let poppedElem = stack.pop()
        minStack.pop()
        return poppedElem;
    }
}

function findMin() {

    if (stack.length == 0) {
        return -1;
    }
    if (stack.length != 0) {
        return minStack[minStack.length - 1];
    }
    return -1;
}


let nums = [10,8,17,5,3,4,3,12];

nums.forEach((x)=> push(x));

console.log("pop", pop())
console.log("pop", pop())
console.log("findMin()", findMin());
console.log("pop", pop())

