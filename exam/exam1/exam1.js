"use strict";
// 3. Solving Mysteries Left and Right (10 points)
// (Recursion and Pseudocode)
// algorithm mystery
//   Input: List of integers lst of size N > 0
//   Output: ???
//   if N = 1
//     return lst.get(0)
//   else
//     left = mystery(lst.subList(0, floor(N/2)+1))
//     right = mystery(lst.subList(floor(N/2)+1), N)
//     if left <= right
//       return left
//     return right
// Convert this pseudocode into Typescript (was java).
function mystery(lst) {
    if (lst.length === 1) {
        return lst[0];
    }
    const midPoint = Math.floor(lst.length / 2) + 1;
    const left = mystery(lst.slice(0, midPoint));
    const right = mystery(lst.slice(midPoint));
    if (left <= right) {
        return left;
    }
    return right;
}
// 7. Almost There (4 points)
// (Coding)
// Given an array of n integers, where each integer is at most d away from its target position, devise an algorithm that
// REVERSE-sorts the array (largest to smallest) in O(n log d) time.
// reverseSort([9, 4, 4, 4, 8, 1, 2, 3, 2], 3) => [9, 8, 4, 4, 4, 3, 2, 2, 1]
// In this example,
// 9 was 0 away from its target position
// 4 was 1 away
// 4 was 1 away
// 4 was 1 away
// 8 was 3 away
// 1 was 3 away
// 2 was 0 away
// 3 was 2 away
// 2 was 1 away
// algorithm reverseSort
//   input: array arr of N integers and integer d
//   output: new array that's a reverse-sorted version of arr
//   h = new max heap of integers of size d+1
//   // will contain d+1 largest elements
//   for i = 0, 1, ..., d
//     heapAdd(heap, arr[i])
//   result = new integer array of size N
//   for i = d+1, d+2, d+3, ... n-2, n-1
//     // i-(d+1) starts at 0 then onwards (i=d+1 initially and (d+1)-(d+1) = 0)
//     result[i-(d+1)] = extractMax(heap)
//     // i = d+1 onwards in original array is guaranteed not to be in the heap yet, since the heap will have d+1 elements. and each element must be no farther
//     // than d away from its target position. note we only do heapAdd above from i=0 to d.
//     heapAdd(heap, arr[i])
//   // there should only be d+1 elements left to put in result, and they are all still in the heap, so start putting elements in result
//   // at index N-(d+1).
//   i = N-(d+1)
//   while heap is not empty
//    result[i] = extractMax(heap)
//    i++
//   return result
/**
 * I spent way too long just looking at a narrow approach. I was trying to do recursive calls with N work at each level
 * decreasing d by a multiplicative factor each time to match the Nlogd runtime. But it wasn't recursive and just uses heaps.
 * This is a lesson that if too much time has been spent on one approach and it seems almost impossible, take a step back
 * and realize your approach might not be even close to the solution and it is time to look elsewhere (heaps which take logd for operations)
 */
