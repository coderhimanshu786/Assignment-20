//Complexity Analysis:
//Time Complexity: O(n), where n is the number of nodes.
//Auxiliary Space: O(n), function call stack size.

// Structure of a tree node.
class Node {
  constructor(key) {
    this.left = null;
    this.right = null;
    this.key = key;
  }
}

let variable;

// Function to create new tree node.
function newNode(key) {
  let temp = new Node(key);
  return temp;
}

// Helper function to find largest subtree sum recursivariableely.
function findLargestSubtreeSumUtil(root) {
  // If current node is null then return 0 to parent node.
  if (root == null) return 0;

  // Subtree sum rooted at current node.
  let currSum =
    root.key +
    findLargestSubtreeSumUtil(root.left) +
    findLargestSubtreeSumUtil(root.right);

  // Update answer if current subtree sum is greater than answer so far.
  variable = Math.max(variable, currSum);
  return currSum;
}

// Function to find largest subtree sum.
function findLargestSubtreeSum(root) {
  // If tree does not exist, then answer is 0.
  if (root == null) return 0;

  // variableariable to store maximum subtree sum.
  variable = -9999999;

  // Call to recursive function to find maximum subtree sum.
  findLargestSubtreeSumUtil(root);

  return variable;
}
//Example-1 with O/P = 28

// let root = newNode(1);
// root.left = newNode(2);
// root.right = newNode(3);
// root.left.left = newNode(4);
// root.left.right = newNode(5);
// root.right.left = newNode(6);
// root.right.right = newNode(7);

//Example-2 with O/P = 7

let root = newNode(1);
root.left = newNode(-2);
root.right = newNode(3);
root.left.left = newNode(4);
root.left.right = newNode(5);
root.right.left = newNode(-6);
root.right.right = newNode(2);

console.log(findLargestSubtreeSum(root));
