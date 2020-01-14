// Find Closest Value in BST.

// You are given a BST data structure consisting of BST nodes. Each BST node has an integer value stored in a property called "value" and two children nodes stored in properties called "left" and "right," respectively. A node is said to be a BST node if and only if it satisfies the BST property: its value is strictly greater than the values of every node to its left; its value is less than or equal to the values of every node to its right; and both of its children nodes are either BST nodes themselves or None (null) values. You are also given a target integer value; write a function that finds the closest value to that target value contained in the BST. Assume that there will only be one closest value.

function findClosestValueInBst(tree, target) {
  // Write your code here.
  return findClosestValueInBstHelper(tree, target, Infinity);
}

function findClosestValueInBstHelper(tree, target, closest){
  if (tree === null){
    return closest;
  }
  if (Math.abs(target - closest) > Math.abs(target - tree.value)){
    closest = tree.value;
  }
  if (target < tree.value){
    return findClosestValueInBstHelper(tree.left, target, closest);
  }
  else if (target > tree.value){
    return findClosestValueInBstHelper(tree.right, target, closest);
  }
  else {
    return closest;
  }
}

// findClosestValueInBst(tree, 100); //Output: 100
// findClosestValueInBst(tree, 29749); //Output: 4500

const test = new BST(100)
  .insert(5)
  .insert(15)
  .insert(5)
  .insert(2)
  .insert(1)
  .insert(22)
  .insert(1)
  .insert(1)
  .insert(3)
  .insert(1)
  .insert(1)
  .insert(502)
  .insert(55000)
  .insert(204)
  .insert(205)
  .insert(207)
  .insert(208)
  .insert(203)
  .insert(-51)
  .insert(-403)
  .insert(1001)
  .insert(57)
  .insert(60)
  .insert(4500)
