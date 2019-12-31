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
  //return the result
  return result
};

// console.log(getDecimalValue([1,0,1])) //Output: 5
// console.log(getDecimalValue([1,0,0,1,0,0,1,1,1,0,0,0,0,0,0])) //Output: 18880
