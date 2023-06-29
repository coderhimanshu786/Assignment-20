//Complexity Analysis:
//Time Complexity: O(logn), where n is the number of nodes. becaause of a binary search
//Auxiliary Space: O(n), function call stack size.


class NodeDetails {
  constructor() {
    this.min;
    this.max;
    this.data;
  }
}

// Function to check if the given array can represent Level Order Traversal of Binary Search Tree
function levelOrderIsOfBST(arr, n) {
  // If tree is empty
  if (n == 0) return true;

  // q->Queue to store NodeDetails
  let q = [];

  // Index variable to access array elements
  let i = 0;

  // Node details for the root of the BST
  let newNode = new NodeDetails();
  newNode.data = arr[i++];
  newNode.min = Number.MIN_VALUE;
  newNode.max = Number.MAX_VALUE;
  q.push(newNode);

  // Until there are no more elements in arr[] or queue is not empty
  while (i != n && q.length > 0) {
    // Extracting NodeDetails of a node from the queue
    let temp = q[0];
    q.shift();
    newNode = new NodeDetails();

    // Check whether there are more elements in the arr[] and arr[i] can be left child of 'temp.data' or not
    if (i < n && arr[i] < temp.data && arr[i] > temp.min) {
      // Create NodeDetails for newNode and add it to the queue
      newNode.data = arr[i++];
      newNode.min = temp.min;
      newNode.max = temp.data;
      q.push(newNode);
    }

    newNode = new NodeDetails();

    // Check whether there are more elements in the arr[] and arr[i] can be right child of 'temp.data' or not
    if (i < n && arr[i] > temp.data && arr[i] < temp.max) {
      // Create NodeDetails for newNode and add it to the queue
      newNode.data = arr[i++];
      newNode.min = temp.data;
      newNode.max = temp.max;
      q.push(newNode);
    }
  }

  // Given array represents level order traversal of BST
  if (i == n) return true;

  // Given array do not represent level order traversal of BST
  return false;
}

//let arr[]
//Example--1

// let arr = [7, 4, 12, 3, 6, 8, 1, 5, 10];

//Example--2
let arr = [11, 6, 13, 5, 12, 10];
let n = arr.length;

if (levelOrderIsOfBST(arr, n)) console.log("Yes");
else console.log("No"); 
