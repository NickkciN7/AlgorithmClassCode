import { Queue, TreeNode } from "../../../utils";
import { BinaryTreeNode } from "../../../utils";

function sumTree(tree: TreeNode<number>): number {
  // Don't actually need this because of the return sum at the end
  //   if (tree.isLeaf()) {
  //     return tree.value;
  //   }

  let sum = tree.value;

  for (const child of tree.children) {
    sum += sumTree(child);
  }

  return sum;
}

/**
 * Best case runtime, worst and average
 * O(N) where N = # nodes in Tree.
 *
 * Space:
 * O(H) where H is the height of the tree, because at once there will be at most H recursive calls in the
 * call stack, or approximately logN.
 * Or in worst case it is like a linked list and just O(N)
 *
 */

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

function depthFirstTraversal_preOrder<T>(tree: BinaryTreeNode<T> | null) {
  if (tree === null) {
    return;
  }

  console.log(tree.value);
  depthFirstTraversal_preOrder(tree.left);
  depthFirstTraversal_preOrder(tree.right);
}

function depthFirstTraversal_inOrder<T>(tree: BinaryTreeNode<T> | null) {
  if (tree === null) {
    return;
  }

  depthFirstTraversal_inOrder(tree.left);
  console.log(tree.value);
  depthFirstTraversal_inOrder(tree.right);
}

function depthFirstTraversal_postOrder<T>(tree: BinaryTreeNode<T> | null) {
  if (tree === null) {
    return;
  }

  depthFirstTraversal_postOrder(tree.left);
  depthFirstTraversal_postOrder(tree.right);
  console.log(tree.value);
}

console.log("depthFirstTraversal_preOrder");
depthFirstTraversal_preOrder(binTree);
console.log();

console.log("depthFirstTraversal_inOrder");
depthFirstTraversal_inOrder(binTree);
console.log();

console.log("depthFirstTraversal_postOrder");
depthFirstTraversal_postOrder(binTree);
console.log();

// Breadth first
function printTreeBreadth(tree: BinaryTreeNode<number>) {
  const q = new Queue<BinaryTreeNode<number>>();

  q.add(tree);

  while (q.size() > 0) {
    const current = q.remove();

    console.log(current?.value);

    if (current?.left) {
      q.add(current.left);
    }
    if (current?.right) {
      q.add(current.right);
    }
  }
}

console.log("printTreeBreadth");
printTreeBreadth(binTree);
console.log();
