"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../../../utils");
const utils_2 = require("../../../utils");
function sumTree(tree) {
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
const binTree = new utils_2.BinaryTreeNode(2, new utils_2.BinaryTreeNode(7, new utils_2.BinaryTreeNode(2), new utils_2.BinaryTreeNode(6, new utils_2.BinaryTreeNode(5), new utils_2.BinaryTreeNode(11))), new utils_2.BinaryTreeNode(5, null, new utils_2.BinaryTreeNode(9, new utils_2.BinaryTreeNode(4))));
function depthFirstTraversal_preOrder(tree) {
    if (tree === null) {
        return;
    }
    console.log(tree.value);
    depthFirstTraversal_preOrder(tree.left);
    depthFirstTraversal_preOrder(tree.right);
}
function depthFirstTraversal_inOrder(tree) {
    if (tree === null) {
        return;
    }
    depthFirstTraversal_inOrder(tree.left);
    console.log(tree.value);
    depthFirstTraversal_inOrder(tree.right);
}
function depthFirstTraversal_postOrder(tree) {
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
function printTreeBreadth(tree) {
    const q = new utils_1.Queue();
    q.add(tree);
    while (q.size() > 0) {
        const current = q.remove();
        console.log(current === null || current === void 0 ? void 0 : current.value);
        if (current === null || current === void 0 ? void 0 : current.left) {
            q.add(current.left);
        }
        if (current === null || current === void 0 ? void 0 : current.right) {
            q.add(current.right);
        }
    }
}
console.log("printTreeBreadth");
printTreeBreadth(binTree);
console.log();
