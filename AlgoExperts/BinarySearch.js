// Binary Search

// Write a function that takes in a sorted array of integers as well as a target integer. The function should use the Binary Search algorithm to find if the target number is contained in the array and should return its index if it is, other -1.

//------------------------------------------------------------------------------------------------------------------------------------

//Your solution below:
//Declare a function binarySearch that takes in an array, target, left and right pointers as parameters.
//the left pointer starts at the beginning of the array at index 0.
//The right pointer starts at the end of the array at index array.length - 1.
function binarySearch(array, target, leftPointer = 0, rightPointer = array.length - 1) {
  //While the left pointer is less than the right pointer...
    while (leftPointer <= rightPointer){
      //create a variable that determines the mid point of the array.
      const midPoint = Math.floor((leftPointer + rightPointer) / 2);
      //check if the middle number in the array matches the target number.
      if (target === array[midPoint]) {
        //if it does return the index of the midpoint index.
        return midPoint;
      }
      //check if that middle number in the array is greater than the target number.
      else if (target < array[midPoint]) {
        //if it is, reassign the right pointer to the index one less than the mid point.
        rightPointer = midPoint - 1;
      }
      //otherwise, the middle number in in the array is less than the target number.
      else {
        //reassign the left pointer to the index one greater than the midpoint.
        leftPointer = midPoint + 1;
      }
    }
    //if the leftpointer is greater than the right pointer, none of the integers in the array matches our target value. therefore we return the value -1.
    return -1;
  }

//------------------------------------------------------------------------------------------------------------------------------------

//AlgoExperts Solution #1 (Recursive)
//O(log(n)) Time | O(log(n)) Space

// function binarySearch(array, target){
//   return binarySearchHelper(array, target, 0, array.length - 1);
// }

// function binarySearchHelper(array, target, left, right){
//   if (left > right) return -1;
//   const middle = Math.floor((left + right) / 2);
//   const potentialMatch = array[middle];
//   if (target === potentialMatch){
//     return middle;
//   } else if (target < potentialMatch){
//     return binarySearchHelper(array, target, left, middle - 1)
//   } else {
//     return binarySearchHelper(array, target, middle + 1, right)
//   }
// }

//------------------------------------------------------------------------------------------------------------------------------------

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
