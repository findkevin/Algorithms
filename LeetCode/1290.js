/*
1290. Convert Binary Number in a Linked List to Integer

Given head which is a reference node to a singly-linked list. The value of each node in the linked list is either 0 or 1. The linked list holds the binary representation of a number.

Return the decimal value of the number in the linked list.

Example 1:
Input: head = [1,0,1]
Output: 5
Explanation: (101) in base 2 = (5) in base 10

Example 2:
Input: head = [0]
Output: 0

Example 3:
Input: head = [1]
Output: 1

Example 4:
Input: head = [1,0,0,1,0,0,1,1,1,0,0,0,0,0,0]
Output: 18880

Example 5:
Input: head = [0,0]
Output: 0

Constraints:
The Linked List is not empty.
Number of nodes will not exceed 30.
Each node's value is either 0 or 1.
*/

//Set a default parameter called result
var getDecimalValue = function(head, result = 0) {
  //While there is a head node...
  while (head) {
      //double the result value and sum up the value with the head node.
      result = result * 2 + head.val
      //Set the head node pointer to the next node.
      head = head.next
  }
  //return the result.
  return result
};

// console.log(getDecimalValue([1,0,1])) //Output: 5
// console.log(getDecimalValue([1,0,0,1,0,0,1,1,1,0,0,0,0,0,0])) //Output: 18880

/*
Question: How did you come up with this method to covert binary to decimal value?

Explanation: This is called the Doubling Method.

The first thing we need to do is write down the binary number that is given to us.
Input: 1 0 1
Expected Output: 5

Starting from left to right, we will double the previous total and add the current value.
The previous total is set to 0 because we have not started yet. We will double the previous total, 0, and add the current value, 1.
Current Total: 0
Current Value: 1
(0 x 2) + 1 = 1
Total: 1

Next, double the current total and add the next leftmost digit. Our current total is now 1 and the new current value is 0. Double 1 and add 0.
Current Total: 1
Current Value: 0
(1 x 2) + 0 = 2
Total: 2

Repeat the previous steps until we run out of digits.
Double the current total, 2, and add the new current value, 1. We have run out of digits and our current total is 5.
Current Total: 2
Current Value: 1
(2 x 2) + 1 = 5
Total: 5

Input: Binary 101
Expected Output: Decimal 5
*/
