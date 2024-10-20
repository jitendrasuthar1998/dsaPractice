/*
Given two arrays of strings list1 and list2, find the common strings with the least index sum.

A common string is a string that appeared in both list1 and list2.

A common string with the least index sum is a common string such that if it appeared at list1[i] and list2[j] then i + j should be the minimum value among all the other common strings.

Return all the common strings with the least index sum. Return the answer in any order.

 

Example 1:

Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"]
Output: ["Shogun"]
Explanation: The only common string is "Shogun".
Example 2:

Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["KFC","Shogun","Burger King"]
Output: ["Shogun"]
Explanation: The common string with the least index sum is "Shogun" with index sum = (0 + 1) = 1.
Example 3:

Input: list1 = ["happy","sad","good"], list2 = ["sad","happy","good"]
Output: ["sad","happy"]
Explanation: There are three common strings:
"happy" with index sum = (0 + 1) = 1.
"sad" with index sum = (1 + 0) = 1.
"good" with index sum = (2 + 2) = 4.
The strings with the least index sum are "sad" and "happy".
 

Constraints:

1 <= list1.length, list2.length <= 1000
1 <= list1[i].length, list2[i].length <= 30
list1[i] and list2[i] consist of spaces ' ' and English letters.
All the strings of list1 are unique.
All the strings of list2 are unique.
There is at least a common string between list1 and list2.
*/


var findRestaurant = function (list1, list2) {
    let n = list1.length;
    let m = list2.length;

    let sumObj = {};

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (list1[i] == list2[j]) {
                sumObj[list1[i]] = i + j;
            }
        }
    }

    // console.log("sumObj", sumObj);

    let smallestSum = null;

    let smallestIndexStrings = [];

    for (key in sumObj) {

        if (smallestSum == null) {
            smallestSum = sumObj[key];
        }
        else {

            if (sumObj[key] < smallestSum) {
                smallestSum = sumObj[key];
            }

        }
    }

    // console.log("smallestSum", smallestSum)

    for (key in sumObj) {
        if (sumObj[key] == smallestSum) {
            smallestIndexStrings.push(key);
        }
    }
    // console.log("smallestIndexStrings", smallestIndexStrings);
    return smallestIndexStrings;
};

let list1 = ["Shogun", "Tapioca Express", "Burger King", "KFC"];

let list2 = ["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"]

let list3 = ["Shogun", "Piatti", "Tapioca Express", "Burger King", "KFC"]

let list4 = ["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"];
let list5 = ["happy", "sad", "good"], list6 = ["sad", "happy", "good"]
console.log("findRestaurant", findRestaurant(list5, list6))

