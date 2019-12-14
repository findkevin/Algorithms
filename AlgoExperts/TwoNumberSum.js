//Brute Force Solution...

// function twoNumberSum (arr, target) {
// 	for(let i=0; i<arr.length; i++) {
// 		for(let j=arr.length; j>i; j--) {
// 			//if any two num adds up to the target...
// 			if((arr[i]+arr[j]) === target) {
// 				//return the two num in an array
// 				let result = [arr[i], arr[j]];
// 				if(arr[i] > arr[j]){
// 					return result.sort();
// 				}
// 				return result;
// 			}
// 		}
// 	}
// 	//else return an empty array
// 	return [];
// }


//Optimal Space and Time Complexity...?

function twoNumberSum(arr, target){
	let leftPointer = 0
	let rightPointer = arr.length - 1;

	//edge case
  if (arr.length < 2){
		return [];
	}
	//edge case above

	// arr.sort()

	while (leftPointer !== rightPointer) {
		const currSum = arr[leftPointer] + arr[rightPointer];
		 if (currSum === target) {
			let result = [arr[leftPointer], arr[rightPointer]]
			if (arr[leftPointer] > arr[rightPointer]){
				return result.sort();
			} else {
				return result
			}
		}
		else if (currSum < target) {
			leftPointer++
		} else if (currSum > target){
			rightPointer--
		}
	}
	return [];
}

console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10))
