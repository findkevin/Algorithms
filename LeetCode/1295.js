/*
1295. Find Number with Even Number of Digits

Given an array nums of integers, return how many of them contain an even number of digits.


Example 1:

Input: nums = [12,345,2,6,7896]
Output: 2
Explanation:
12 contains 2 digits (even number of digits).
345 contains 3 digits (odd number of digits).
2 contains 1 digit (odd number of digits).
6 contains 1 digit (odd number of digits).
7896 contains 4 digits (even number of digits).
Therefore only 12 and 7896 contain an even number of digits.
Example 2:

Input: nums = [555,901,482,1771]
Output: 1
Explanation:
Only 1771 contains an even number of digits.


Constraints:

1 <= nums.length <= 500
1 <= nums[i] <= 10^5
*/

var findNumbers = function(nums) {
  //Create a counter variable to keep count of the amount of integers within the nums array with an even number of digits.
  let counter = 0;
  //Loop through the nums array to check each integer.
  for (let i = 0; i < nums.length; i++) {
    //if the integer at the current index has a length of 0...
    if (nums[i].toString().length % 2 === 0) {
      //...add one to the counter variable.
      counter++;
    }
  }
  //Return the value of counter after checking every integer inside the nums array.
  return counter;
};

console.log(findNumbers([12, 345, 2, 6, 7896])); //Output: 2

