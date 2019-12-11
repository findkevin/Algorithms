// Given a valid (IPv4) IP address, return a defanged version of that IP address.

// A defanged IP address replaces every period "." with "[.]".

// Example 1:

// Input: address = "1.1.1.1"
// Output: "1[.]1[.]1[.]1"
// Example 2:

// Input: address = "255.100.50.0"
// Output: "255[.]100[.]50[.]0"


// Constraints:

// The given address is a valid IPv4 address.

//Declare a default parameter value inside the given function declaration. (ES2015 feature)
const defangIPaddr = function(address, result = '') {
  //Loop through the address argument value
  for (let i = 0; i < address.length; i++){
    //if the address at index of 'i' is '.'
      if (address[i] === '.'){
        //concat '[.]' to the result
          result += '[.]';
      } else {
        //otherwise concat the value of address at index 'i' to the result.
          result += address[i];
      }
  }
  //return the result after iterating through the entire address string value.
  return result;
};

console.log(defangIPaddr('1.1.1.1')) //"1[.]1[.]1[.]1"
console.log(defangIPaddr('255.100.50.0')) //"255[.]100[.]50[.]0"
