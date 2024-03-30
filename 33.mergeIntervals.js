/*
Problem Description
An interval is a range, with a starting value and ending value. [1, 3] indicates elements 1, 2, 3 and so on.

Given a collection of intervals, merge all overlapping intervals. The result should only have mutually exclusive intervals - meaning that no number should be common between two intervals, in the result.

Note: The merged intervals should be printed in increasing order of start value.

Input format
There are N+1 lines of input.

First line contains N, the number of intervals

Next N lines contain 2 space separated integers A and B, which represent the start and end of an interval

Output format
For the X merged intervals, print each interval (the start and end being space separated) on a separate line

Constraints
1 <= N <= 50000

0 <= A, B <= 1e9

B >= A

Sample Input 1
4

1 3

2 6

8 10

15 18

Sample Output 1
1 6

8 10

15 18

Explanation 1
Since intervals [1 3] and [2 6] overlap, merge them into [1 6]

Sample Input 2
2

1 4

4 5

Sample Output 2
1 5

Explanation 2
Intervals [1 4] and [4 5] overlap and get merged into [1 5]

*/

function mergeIntervals(n, intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  // console.log("intervals",intervals);

  // create an array result containing the intervals
  const result = [];

  // iterate over the intervals

  for (const intveral of intervals) {
    const last = result.length === 0 ? null : result[result.length - 1];

    // if last interval's ending point < current interval's ending point

    if (!last || last[1] < intveral[0]) {
      result.push(intveral);
    }
    // add the current interval to the result
    else {
      last[1] = Math.max(last[1], intveral[1]);
    }
    // else update last interval's ending point as the maximum of last or current's interval's ending point

    // convert dynamic array into a static array and retun the static array
  }

  const arr = new Array(result.length);

  for (let idx = 0; idx < result.length; idx++) {
    arr[idx] = result[idx];
  }

  return arr;
}

let intervals = [
  [15, 18],
  [1, 3],
  [8, 10],
  [2, 6],
];

let intervals1 = [
  [1, 6],
  [4, 10],
  [8, 18],
];

console.log(mergeIntervals(4, intervals));

console.log("second merge intervalue",mergeIntervals(3, intervals1));
