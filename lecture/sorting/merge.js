"use strict";
// algorithm merge
//   Input: two lists of sorted L1 and L2
//   Output: lst L3 that contains the elements of L1 and L2 in sorted order
//   Note this is stable because of line 14-15
//   i = 0; j  = 0; L3 = empty list
//   while i < L1.size() or j < L2.size()
//     if i >= L1.size()
//       L3.add(L2[j])
//       j = j + 1
//     else if j >= L2.size()
//       L3.add(L1[i])
//       i = i + 1
//     else if L1[i] <= L2[j]
//       L3.add(L1[i])
//       i = i + 1
//     else
//       L3.add(L2[j])
//       j = j + 1
//   return L3
// algorithm mergeSort
//   Input: list of integers lst of size N
//   Output: lst such that its elements are in sorted order
//   if N < 2
//     return lst
//   midpoint = floor(N/2)
//   left = mergeSort(lst.subList(0, midpoint))
//   right = mergeSort(lst.subList(midpoint, N))
//   return merge(left, right)
/**
 * Runtime in best, worst, and average: O(NLogN)
 *
 * Space: O(N)
 * At one time would have recursive call stack all levels which have N space made then n/2 etc which is < 2N which is in O(N)
 */
function mergeSort(arr, recursiveLevel) {
    const hasRecursiveLevel = recursiveLevel !== undefined;
    // If passed at all, this will log - - - -  etc to better help us visually see how many nested recursive calls a certain call is. otherwise it is empty string, meaning it has no effect
    // on console logs, so this function will output as if indentation string and recursiveLevel aren't in this code at all
    const indentationString = hasRecursiveLevel
        ? "- ".repeat(recursiveLevel)
        : "";
    const length = arr.length;
    if (length < 2) {
        console.log(`${indentationString}base case curr arr (will be return of left/right): `, arr);
        return arr;
    }
    const midpoint = Math.floor(length / 2);
    console.log(`${indentationString}curr arr: `, arr);
    const left = mergeSort(
    // SLICE NOT SPLICE. SPLICE affects the original array. Look up the actual docs of a function...
    arr.slice(0, midpoint), hasRecursiveLevel ? recursiveLevel + 1 : undefined);
    console.log(`${indentationString}left: `, left);
    const right = mergeSort(arr.slice(midpoint), hasRecursiveLevel ? recursiveLevel + 1 : undefined);
    console.log(`${indentationString}right: `, right);
    return merge(left, right);
}
function merge(left, right) {
    let leftIndex = 0;
    let rightIndex = 0;
    const mergedArr = [];
    while (leftIndex < left.length || rightIndex < right.length) {
        if (leftIndex >= left.length) {
            mergedArr.push(right[rightIndex]);
            rightIndex++;
        }
        else if (rightIndex >= right.length) {
            mergedArr.push(left[leftIndex]);
            leftIndex++;
        }
        else if (left[leftIndex] <= right[rightIndex]) {
            // above (the = in <=) and below line (pushing the left if equal) guarantee stability
            mergedArr.push(left[leftIndex]);
            leftIndex++;
        }
        else {
            mergedArr.push(right[rightIndex]);
            rightIndex++;
        }
    }
    return mergedArr;
}
// console.log(mergeSort([3, 1, 2]));
// console.log(mergeSort([1, 10, 9, 8, 3, 0, 3]));
// console.log(mergeSort([-3, 0, 5, -2, 1]));
// console.log(mergeSort([5, 4, 3, 2, 1]));
// console.log(mergeSort([5]));
// console.log(mergeSort([]));
// Array from Sorting notes. See pic there for better visual representation
console.log(mergeSort([38, 27, 43, 3, 9, 82, 10], 0));
