// 1281. Subtract the Product and Sum of Digits of an Integer

//Given an integer number n, return the difference between the product of its digits and the sum of its digits.

// Example 1:

// Input: n = 234
// Output: 15
// Explanation:
// Product of digits = 2 * 3 * 4 = 24
// Sum of digits = 2 + 3 + 4 = 9
// Result = 24 - 9 = 15
// Example 2:

// Input: n = 4421
// Output: 21
// Explanation:
// Product of digits = 4 * 4 * 2 * 1 = 32
// Sum of digits = 4 + 4 + 2 + 1 = 11
// Result = 32 - 11 = 21

// Constraints:

// 1 <= n <= 10^5

// **********************************************************************
// **********************************************************************
// **********************************************************************
// *******************Your solution below this line.*********************
// **********************************************************************
// **********************************************************************
// **********************************************************************

var subtractProductAndSum = function(n) { //n = 234

  //n.toString() turns the given number(n) to a string of digits ==> '2', '3', '4'
  //Array.from() returns the string within an array ==> ['2', '3', '4']
  //Array.map() returns an array with each string as a Number ==> [2, 3, 4]
  let numberArray = Array.from(n.toString()).map(Number)
  //console.log(numberArray) //==>[2, 3, 4]

  //Array.reduce() takes in a callback function and returns the result of that function. Use the callback function to get the product of the numbers in the array.
  let sum = numberArray.reduce(
      //The callback function takes in a accumulator and the current value in the array.
      function(accumulator, currentValue){
          //accumulator = 2, currentValue = 3 ==> 2 * 3 = 6
          //accumulator = 6, currentValue = 4 ==> 6 * 4 = 24
           return accumulator * currentValue; //==> 24
      }
);

  //Array.reduce() takes in a callback function and returns the result of that function. Use the callback function to get the sum of the numbers in the array.
  let product = numberArray.reduce(
      //The callback function takes in an accumulator and the current value in the array.
      function(accumulator, currentValue){
          //accumulator = 2, currentValue = 3 ==> 2 + 3 = 5
          //accumulator = 5, currentValue = 4 ==> 5 + 4 = 9
          return accumulator + currentValue; //==> 9
      }, 0
);
  //Finally, subtract the sum and the product and set its value to a variable called result.
  let result = sum - product; //24 - 9 = 15
  return result; // ==> 15
};

console.log(subtractProductAndSum(234)); //15
console.log(subtractProductAndSum(4421)); //21
