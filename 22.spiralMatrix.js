/*
Problem Description
Given an integer A, generate a square matrix filled with elements from 1 to A*A in spiral order. The spiral order will be clockwise in nature starting from (0,0)

Input format
One line of input, containing a single integer A.

Output format
Print a 2-d matrix of size A x A satisfying the spiral order.

Sample Input 1
3

Sample Output 1
1 2 3

8 9 4

7 6 5

Explanation
As you can see the matrix goes spirally with each next position incremented by one.

Constraints
1<=A<=1000

*/
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
let newMatrix = [
  ['a', 'b', 'c'],
  [1, 2, 3],
  ['d', 'e', 'f'],
];

function spiralMatrix(n) {
  let num = 1;
  let top = 0,
    left = 0,
    right = n - 1,
    bottom = n - 1;

  let numbers = [];

  for (let i = 0; i < n; i++) {
    numbers.push([]);
  }

  for (let i = 0; i < n; i++) {
    console.log('new array with n is == ', new Array(n));
    numbers[i].push(new Array(n));
  }

  console.log(numbers);

  while (num <= n * n) {
    // fill array from left to right
    for (let i = left; i <= right; i++) {
      numbers[top][i] = num++;
    }
    top++;
    // fill array from top to bottom
    for (let i = top; i <= bottom; i++) {
      numbers[i][right] = num++;
    }
    right--;

    // fill array from right to left

    for (let i = right; i >= left; i--) {
      numbers[bottom][i] = num++;
    }
    bottom--;

    // fill array from bottom to top

    for (let i = bottom; i >= top; i--) {
      numbers[i][left] = num++;
    }
    left++;
  }
  return numbers;
}
// console.log(
//     spiralMatrix(3));

function spiralOrder(matrix) {
  // MATRIX[Y][X]
  //    ---------
  //Y0 | 1  2  3 |
  //Y1 | 4  5  6 |
  //Y2 | 7  8  9 |
  //    ---------
  //     X0 X1 X2

  const yLength = matrix.length,
    xLength = matrix[0].length;
  let y = 0,
    x = 0,
    count = 0,
    area = xLength * yLength,
    bag = [];

  while (count < area) {
    for (let i = x; count < area && i < xLength - x; i++) {
      bag.push(matrix[y][i]);
      count++;
    }
    y++;
    for (let i = y; count < area && i < yLength - y + 1; i++) {
      bag.push(matrix[i][xLength - 1 - x]);
      count++;
    }
    x++;

    for (let i = xLength - 1 - x; count < area && i >= x - 1; i--) {
      bag.push(matrix[yLength - 1 - (y - 1)][i]);
      count++;
    }

    for (let i = yLength - 1 - y; count < area && i >= y; i--) {
      bag.push(matrix[i][x - 1]);
      count++;
    }
  }
  return bag;
}

console.log('spiral order is == ', spiralOrder(matrix));
console.log('new spiral order is == ', spiralOrder(newMatrix));
