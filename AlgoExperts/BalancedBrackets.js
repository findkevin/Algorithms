function balancedBrackets(string) {
  //   // Write your code here.
  console.log('wasd');
  const library = {
    '{': '}',
    '[': ']',
    '(': ')'
  };

  // 	const leftPointer = 0
  // 	const rightPointer = string.length - 1

  //check if the string length is even or odd
  if (string.length % 2 !== 0) {
    return false;
  }

  // 	//loop through string
  // 	for(let i=0; i<string.length/2; i++){
  // 		if(library.string.charAt(leftPointer)){
  // 			if(string.charAt(rightPointer) === library.string.charAt(leftPointer)){
  // 				leftPointer++
  // 				rightPointer--
  // 			}
  // 			else {
  // 				return false;
  // 			}
  // 		}
  // 		return true;
  // 	}

  //implement with a callstack
  const stack = [];
  for (let i = 0; i < string.length; i++) {
    if (string.charAt(i) in library) {
      stack.push(string.charAt(i));
    } else if (stack.length === 0) {
      return false;
    } else if (stack[(stack.length - 1)] in library ){
        let popped = stack.pop();
      if (library[popped] === string.charAt(i)){
        continue;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  return true;
}

console.log(balancedBrackets('(())'));
