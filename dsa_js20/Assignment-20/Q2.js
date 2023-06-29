//Complexity Analysis:
//Time Complexity: O(n * h), where n is the number of nodes and h is height of tree.
//Auxiliary Space: O(n), Number of nodes.

	class Node {
		constructor() {
		this.data = 0;
		this.left = null;
		this.right = null;
		}
	}

	// function to get a new node
	function getNode(data) {
		// Allocate memory
		let newNode = new Node();

		// put in the data
		newNode.data = data;
		newNode.left = newNode.right = null;
		return newNode;
	}

	// function to construct a BST from its level order traversal
	function LevelOrder(root, data) {
		if (root == null) {
		root = getNode(data);
		return root;
		}

		if (data <= root.data)
		root.left = LevelOrder(root.left, data);
		else
		root.right = LevelOrder(root.right, data);
		return root;
	}

	function constructBst(arr, n) {
		if (n == 0) return null;
		let root = null;

		for (let i = 0; i < n; i++)
		root = LevelOrder(root, arr[i]);

		return root;
	}

	// function to print the inorder traversal
	function inorderTraversal(root) {
		if (root == null) return;

		inorderTraversal(root.left);
		console.log(root.data + " ");
		inorderTraversal(root.right);
	}

	// Q2
	let arr = [7, 4, 12, 3, 6, 8, 1, 5, 10];
	let n = arr.length;

	let root = constructBst(arr, n);

	console.log("Inorder Traversal: ");
    //call
	inorderTraversal(root);
