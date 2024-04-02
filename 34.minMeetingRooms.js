/*
Problem Description
Given a list of meeting time intervals, you have to find the minimum number of rooms required to organize all the meetings.

Input format
First line contains an integer N, indicating the number of meetings.

Next N lines contain two space separated integers S and E, indicating the Starting and Ending time of a meeting, respectively.

Output format
Print the minimum number of rooms required.

Constraints
N <= 100000

0 <= S,E <= 1000000000 (10^9)

Si < Ei

Sample Input 1
3

0 20

5 10

10 15

Sample Output 1
2

Explanation 1
One room can host the 1st meeting (0-20) and the other room can host both the 2nd meeting (5-10) and 3rd meeting (10-15), one after the other.

So, only 2 rooms are required if total for the 3 meetings.
*/

function meetingRooms(meetings) {
  // create an empty array list to store timestamps and room meetings
  const list = [];
  // iterate for loop over meetings

  for (const meeting of meetings) {
    //push the start timestamp and indicate a room is occupied (+1)
    list.push({ timeStamp: meeting[0], roomChange: +1 });
    //push the end timestamp and indicate a room is vacated (-1)
    list.push({ timeStamp: meeting[1], roomChange: -1 });
  }

  //   sort the list of timeStamps and room changes based on timeStamp

  list.sort((a, b) => a.timeStamp - b.timeStamp);

  //   initialise minRooms and meetingInProgress as 0

  let minRooms = 0;

  let meetingInProgress = 0;

  for (const room of list) {
    meetingInProgress = meetingInProgress + room.roomChange;

    minRooms = Math.max(minRooms, meetingInProgress);
  }

  return minRooms;

  // iterate through the sorted list of timestamps and room changes
  // update the meetingInProgress+= roomChange
  // find minimum of minRooms and meetingInProgress and store in minRooms

  // return minRooms
}

let meetings = [
  [0, 20],
  [5, 10],
  [10, 15],
];

console.log('minRooms required == ', meetingRooms(meetings));
