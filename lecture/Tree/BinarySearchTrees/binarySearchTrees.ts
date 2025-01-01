import { BinaryTreeNode } from "../../../utils";

// This is just a regular binary tree. This was done in beginning of bst lecture so put it
// in this file. Later in lecture did bst stuff but didn't really code out much stuff I think

//        2
//     /     \
//    /       \
//   7         5
//  / \         \
// 2   6         9
//    / \       /
//   5  11     4

const binTree = new BinaryTreeNode(
  2,
  new BinaryTreeNode(
    7,
    new BinaryTreeNode(2),
    new BinaryTreeNode(6, new BinaryTreeNode(5), new BinaryTreeNode(11))
  ),
  new BinaryTreeNode(5, null, new BinaryTreeNode(9, new BinaryTreeNode(4)))
);

/**
 * get max of tree of binary tree
 */
function maxOfBinaryTree(tree: BinaryTreeNode<number> | null): number {
  if (tree === null) {
    return Number.MIN_SAFE_INTEGER;
  }

  return Math.max(
    tree.value,
    maxOfBinaryTree(tree.left),
    maxOfBinaryTree(tree.right)
  );
}

console.log(maxOfBinaryTree(binTree));
