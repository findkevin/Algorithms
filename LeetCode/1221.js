/*
1221. Split a String in Balanced Strings

Balanced strings are those who have equal quantity of 'L' and 'R' characters.

Given a balanced string s split it in the maximum amount of balanced strings.

Return the maximum amount of splitted balanced strings.

Example 1:
Input: s = "RLRRLLRLRL"
Output: 4
Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.

Example 2:
Input: s = "RLLLLRRRLR"
Output: 3
Explanation: s can be split into "RL", "LLLRRR", "LR", each substring contains same number of 'L' and 'R'.

Example 3:
Input: s = "LLLLRRRR"
Output: 1
Explanation: s can be split into "LLLLRRRR".

Example 4:
Input: s = "RLRRRLLRLL"
Output: 2
Explanation: s can be split into "RL", "RRRLLRLL", since each substring contains an equal number of 'L' and 'R'

Constraints:
1 <= s.length <= 1000
s[i] = 'L' or 'R'

*/

var balancedStringSplit = function(s) {
  //Create a counter variable to keep track of each 'L' and 'R'.
  let counter = 0;
  //Create a result variable to keep count of the balanced sets.
  let result = 0;

  //Use a for loop to iterate through the given string.
  for (let i = 0; i < s.length; i++){
      //Check the string at the index of 'i' to see if it has the value of 'L'.
      //If it is true, increment our counter variable by 1.
      if (s[i] === 'L'){
          counter++;
      }
      //If it does not evaluate to 'L', it must be 'R'.
      //Therefore, we decrement our counter variable by 1.
      else {
          counter--;
      }
      //Check if our counter variable evaluates to 0.
      //If this is true we have a balanced set of 'L' and 'R'.
      //Increment our result by 1.
      if (counter === 0){
          result++;
      }
  }
  //Return our result when the for loop has iterated throughtout the entire given parameter string.
  return result;
};

// balancedStringSplit('RLRRLLRLRL') //Output: 4
