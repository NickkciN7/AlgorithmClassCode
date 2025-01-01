"use strict";
// https://www.youtube.com/watch?v=KB-gtexjTTo&ab_channel=AndrewHuang
// // Print all numbers from n to 1, then "Blastoff"
// function countdown(n: number): void {
//   if (n === 0) {
//     console.log("Blastoff");
//     return;
//   }
//   console.log(n);
//   countdown(n - 1);
// //   console.log(n); // Will then cause 1,2,..,n to be printed after blastoff
// }
// countdown(5);
// console.log("\n-----\n");
// /**
//  * Multiply numbers through repeated addition
//  * multiply(3,4) = 3 + 3 + 3 + 3 = 12
//  */
// function multiply(a: number, b: number): number {
//   if (b === 0) {
//     return 0;
//   }
//   // Multiplication is repeated addition not repeated multiplication!
//   return a + multiply(a, b - 1);
// }
// console.log(multiply(3, 4));
// console.log("\n-----\n");
/**
 * Returns true when a string is the same backwards and forwards
 *
 * isPalindrome("racecar") = true
 */
// bad space complexity; creates a new string every recursive call
// function isPalindrome(word: string): boolean {
//   //   console.log(word);
//   if (word.length <= 1) {
//     // console.log("should return true");
//     return true;
//   }
//   if (word.charAt(0) === word.charAt(word.length - 1)) {
//     // if (word.length === 2) {
//     //   //   console.log("should return true");
//     //   return true;
//     // }
//     // You need to return the recursive call!!!!! otherwise the ancestor calls will no know what the base case call returned!
//     return isPalindrome(word.slice(1, word.length - 1));
//   } else {
//     return false;
//   }
// }
// const String = {
//     slice: (word) => {return some new string that is 2 less characters than word}
// }
// String.slice()
// class String (){
//     static slice = (word) => {return some new string that is 2 less characters than word}
// }
// String.slice
/**
 * word -> memoryBlock1 containing word's contents
 * word = 3;
 *         memoryBlock1
 * word -> memoryBlock2 containing value of 3
 */
// function isPalindrome(word: string): boolean {
//   return isPalindromeHelper(word, 0);
// }
// function isPalindromeHelper(word: string, i: number): boolean {
//   if (i > word.length / 2) {
//     return true;
//   } else if (word.charAt(i) !== word.charAt(word.length - 1 - i)) {
//     return false;
//   }
//   return isPalindromeHelper(word, i + 1);
// }
// console.log(isPalindrome("racecar"));
// console.log(isPalindrome("raccar"));
// console.log(isPalindrome("accar"));
// console.log("\n-----\n");
// function fibonacci(n: number): number {
//   if (n <= 1) {
//     return n;
//   }
//   // Tree recursion: making more than 1 recursive call
//   return fibonacci(n - 1) + fibonacci(n - 2);
// }
// console.log(fibonacci(1));
// console.log(fibonacci(2));
// console.log(fibonacci(3));
// console.log(fibonacci(5));
// //                            fib(5)
// //                      /                \
// //                fib(4)                fib(3)
// //              /        \              /       \
// //          fib(3)      fib(2)         fib(2)   fib(1)
// //         /    \       /    \        /      \
// //   fib(2)   fib(1)  fib(1) fib(0) fib(1) fib(0)
// //   /     \
// // fib(1) fib(0)
// console.log(fibonacci(9));
// console.log("\n-----\n");
// /**
//  * return the number of ways to get from the bottom left corner of
//  * an M (rows) by N (columns) grid to the top right corner moving only right or up
//  */
// function paths(m: number, n: number): number {
//   // mth row and 1st column is bottom left
//   return pathsHelper(m, 1, n);
// }
// function pathsHelper(row: number, col: number, lastCol: number): number {
//   console.log(row + " " + col);
//   /**
//    * not needed if we stop once row is 1 or col is last column, because
//    * we never have a chance to do recursive call with 1-1 for row or (lastCol-1) + 1 for col
//    */
//   //   if (row < 1 || col > lastCol) {
//   //     return 0;
//   //   }
//   /**
//    * Once you reach the first row, you can only go one way: right. Once you reach the last column,
//    * you can only go one way: up. So rather than continuing the tree recursion to conclude the same thing,
//    * we can end early. Results in less recursive calls
//    */
//   if (row === 1 || col === lastCol) {
//     return 1;
//   }
//   //   if (row === 1 && col === lastCol) {
//   //     return 1;
//   //   }
//   return (
//     pathsHelper(row - 1, col, lastCol) + pathsHelper(row, col + 1, lastCol)
//   );
// }
// console.log(paths(3, 2));
