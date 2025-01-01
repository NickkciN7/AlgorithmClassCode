"use strict";
// The idea for pickTrees is to chop trees in a combination that gives most wood, but we cannot cut neighbors
Object.defineProperty(exports, "__esModule", { value: true });
/** Recursive solution from lecture. try every possible combination */
function pickTreesSlow(trees) {
    // Always check how you are calling helper!!!!!! I wasn't returning and wasted like 10 minutes just to find that out!!!!! ALWAYS RETURN!!!!
    return pickTreesHelper(trees, 0);
}
function pickTreesHelper(trees, index) {
    // console.log(index);
    if (index >= trees.length) {
        // console.log("base");
        return 0;
    }
    const cut = trees[index] + pickTreesHelper(trees, index + 2);
    const dontCut = pickTreesHelper(trees, index + 1);
    return Math.max(cut, dontCut);
}
console.log("pickTreesSlow");
console.log(pickTreesSlow([1, 2, 3, 4, 5]));
console.log(pickTreesSlow([1, 3, 4, 3]));
console.log(pickTreesSlow([5, 1, 4, 9]));
console.log(pickTreesSlow([4, 2, 3, 9, 4, 5, 11, 0, 6, 7]));
console.log();
/**
 * Dynamic programming solution from lecture
 *
 * subproblem
 * maxValue[i] = most wood if we used any tree up to i. THIS IS AN IMPORTANT DISTINCTION FROM MY SOLUTION
 */
function pickTreesFastFromLecture(trees) {
    if (trees.length === 0) {
        return 0;
    }
    else if (trees.length === 1) {
        return trees[0];
    }
    const maxValues = Array(trees.length);
    maxValues[0] = trees[0];
    maxValues[1] = Math.max(trees[0], trees[1]);
    for (let i = 2; i < trees.length; i++) {
        /**
         * maxValues[i - 1] essentially means we say don't pick the current tree. Then maxValues at that index does not mean we accepted
         * that tree at that index, it contains the previous value, which represents skipping the tree at that index. We only do this,
         * if it is a better choice than selected the current tree and adding 2 trees ago
         *
         * we can replace maxValueExceptPrevious with trees[i-2] because we make things accumulative and [i-2] should have the same value
         * as maxValueExceptPrevious
         */
        maxValues[i] = Math.max(maxValues[i - 1], trees[i] + maxValues[i - 2]); // trees[i] + maxValueExceptPrevious
    }
    return maxValues[maxValues.length - 1];
}
console.log("pickTreesFastFromLecture");
console.log(pickTreesSlow([1, 2, 3, 4, 5]));
console.log(pickTreesSlow([1, 3, 4, 3]));
console.log(pickTreesSlow([5, 1, 4, 9]));
console.log(pickTreesFastFromLecture([4, 2, 3, 9, 4, 5, 11, 0, 6, 7]));
console.log();
/**
 * My own Dynamic programming solution
 *
 * subproblem
 * maxValue[i] = most wood if we ended at tree i and cut that tree
 */
function pickTreesFastMySolution(trees) {
    if (trees.length === 0) {
        return 0;
    }
    if (trees.length === 1) {
        return trees[0];
    }
    const maxValues = Array(trees.length);
    maxValues[0] = trees[0];
    maxValues[1] = trees[1];
    /**
     * Prevent us from having to do a nested for loop from i = 0 to i-2 to find maxValue.
     * "ExceptPrevious" because we cannot chop neighboring trees, and we add this value to the current tree below
     */
    let maxValueExceptPrevious = maxValues[0];
    for (let i = 2; i < trees.length; i++) {
        // assuming trees always have positive wood, there is no reason not to include maxValueExceptPrevious
        maxValues[i] = trees[i] + maxValueExceptPrevious;
        maxValueExceptPrevious = Math.max(maxValueExceptPrevious, maxValues[i - 1]);
    }
    // At the end it is possible for the second to last to be the best value too, so we must consider that
    return Math.max(maxValues[maxValues.length - 2], maxValues[maxValues.length - 1]);
}
console.log("pickTreesFast");
console.log(pickTreesSlow([1, 2, 3, 4, 5]));
console.log(pickTreesSlow([1, 3, 4, 3]));
console.log(pickTreesSlow([5, 1, 4, 9]));
console.log(pickTreesFastMySolution([4, 2, 3, 9, 4, 5, 11, 0, 6, 7]));
console.log();
