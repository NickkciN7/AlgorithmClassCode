"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../../../utils");
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
const binTree = new utils_1.BinaryTreeNode(2, new utils_1.BinaryTreeNode(7, new utils_1.BinaryTreeNode(2), new utils_1.BinaryTreeNode(6, new utils_1.BinaryTreeNode(5), new utils_1.BinaryTreeNode(11))), new utils_1.BinaryTreeNode(5, null, new utils_1.BinaryTreeNode(9, new utils_1.BinaryTreeNode(4))));
/**
 * get max of tree of binary tree
 */
function maxOfBinaryTree(tree) {
    if (tree === null) {
        return Number.MIN_SAFE_INTEGER;
    }
    return Math.max(tree.value, maxOfBinaryTree(tree.left), maxOfBinaryTree(tree.right));
}
console.log(maxOfBinaryTree(binTree));
