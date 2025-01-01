"use strict";
/**
 *
 * Basically takes last element in inner for loop (starts index 1 then gets larger as outer loop increases). Then continuously tests it against value before it and "inserts" into correct place
 * when it finally meets a value smaller than it (cannot continue at this point)
 *
 * best case O(N): already sorted, so outer for loop fires N times, but inner will always stop after one comparison, so
 * constant.
 *
 * worst case O(N^2): opposite of sorted, so inner for loop will go 1, then 2, then 3 times... and once again use the
 * summation formula which is in O(N^2)
 *
 * average case O(N^2)
 *
 * space O(1): didn't create anything other than temp which is constant. and it is discarded and remade each iteration,
 * meaning at one instance it only takes up 1 space not N*1 space.
 */
function insertionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j > 0; j--) {
            if (arr[j] < arr[j - 1]) {
                const temp = arr[j];
                arr[j] = arr[j - 1];
                arr[j - 1] = temp;
            }
            else {
                break;
            }
        }
    }
    return arr;
}
console.log(insertionSort([3, 1, 2]));
console.log(insertionSort([1, 10, 9, 8, 3, 0, 3]));
console.log(insertionSort([-3, 0, 5, -2, 1]));
console.log(insertionSort([5, 4, 3, 2, 1]));
console.log(insertionSort([5]));
console.log(insertionSort([]));
