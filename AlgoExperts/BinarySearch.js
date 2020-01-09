// Binary Search

// Write a function that takes in a sorted array of integers as well as a target integer. The function should use the Binary Search algorithm to find if the target number is contained in the array and should return its index if it is, other -1.

//Your solution below:
function binarySearch(array, target, leftPointer = 0, rightPointer = array.length - 1) {
  while (leftPointer <= rightPointer){
    const midPoint = Math.floor((leftPointer + rightPointer) / 2);
    if (target === array[midPoint]) {
      return midPoint;
    } else if (target < array[midPoint]) {
      rightPointer = midPoint - 1;
    } else {
      leftPointer = midPoint + 1;
    }
  }
  return -1;
}


//AlgoExperts Solution #2 (Iterative)
//O(log(n)) Time | O(1) Space
// function binarySearch(array, target) {
// 	return bSHelper(array, target, leftPointer = 0, rightPointer = array.length - 1)
// }

// function bSHelper(array, target, leftPointer, rightPointer){
// 	while (leftPointer <= rightPointer){
// 		const middlePointer = Math.floor((leftPointer + rightPointer) / 2);
// 		if (array[middlePointer] === target){
// 			return middlePointer;
// 		} else if (array[middlePointer] > target){
// 			rightPointer = middlePointer - 1;
// 		} else {
// 			leftPointer = middlePointer + 1;
// 		}
// 	}
// 	return -1;
// }

// console.log(binarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 33)) //3
