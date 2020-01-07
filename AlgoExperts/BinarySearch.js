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

// console.log(binarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 33)) //3
