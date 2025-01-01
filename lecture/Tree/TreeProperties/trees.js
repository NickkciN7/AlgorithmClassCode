"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../../../utils");
const utils_2 = require("../../../utils");
//             5
//        __/  /\ \_____
//       /    /  \      \
//     /     /    \      \
//    4     1      0     -3
//   /  \              /  |  \
// -1    3            5   7   3
//                   /
//                  2
//                 /
//                8
const example = new utils_2.TreeNode(5, Array(new utils_2.TreeNode(4, Array(new utils_2.TreeNode(-1), new utils_2.TreeNode(3))), new utils_2.TreeNode(1), new utils_2.TreeNode(0), new utils_2.TreeNode(-3, Array(new utils_2.TreeNode(5, Array(new utils_2.TreeNode(2, Array(new utils_2.TreeNode(8))))), new utils_2.TreeNode(7), new utils_2.TreeNode(3)))));
// With [] instead of Array, but same thing basically
// const example = new TreeNode(5, [
//   new TreeNode(4, [new TreeNode(-1), new TreeNode(3)]),
//   new TreeNode(1),
//   new TreeNode(0),
//   new TreeNode(-3, [
//     new TreeNode(5, [new TreeNode(2, [new TreeNode(8)])]),
//     new TreeNode(7),
//     new TreeNode(3),
//   ]),
// ]);
function sumTree(tree) {
    if (tree.isLeaf()) {
        return tree.value;
    }
    let sum = tree.value;
    for (const child of tree.children) {
        sum += sumTree(child);
    }
    return sum;
}
// goes depth from left
function printTreeDepthLeft_Recursive(tree) {
    console.log(tree.value);
    for (const child of tree.children) {
        printTreeDepthLeft_Recursive(child);
    }
}
// Breadth first
function printTreeBreadth(tree) {
    //   console.log("0");
    const q = new utils_1.Queue();
    //   console.log("1");
    q.add(tree);
    //   console.log("2");
    while (q.size() > 0) {
        // console.log("3");
        // console.log("q.list.value");
        // console.log(q.list?.value);
        const current = q.remove();
        // console.log("size");
        // console.log(q.size);
        // console.log("current?.value");
        console.log(current === null || current === void 0 ? void 0 : current.value);
        if (current === null || current === void 0 ? void 0 : current.children) {
            for (const child of current.children) {
                q.add(child);
            }
        }
    }
}
// Depth first right using stack
function printTreeDepthRight_Stack(tree) {
    var _a;
    const s = [];
    s.push(tree);
    while (s.length > 0) {
        const cur = s.pop();
        console.log(cur === null || cur === void 0 ? void 0 : cur.value);
        const children = (_a = cur === null || cur === void 0 ? void 0 : cur.children) !== null && _a !== void 0 ? _a : [];
        for (let child of children) {
            s.push(child);
        }
    }
}
console.log(sumTree(example));
console.log();
printTreeDepthLeft_Recursive(example);
console.log();
printTreeBreadth(example);
console.log();
printTreeDepthRight_Stack(example);
console.log();
