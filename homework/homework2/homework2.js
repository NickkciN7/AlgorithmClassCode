"use strict";
// Q1 Mysterious Function (2 point)
// What's the worst case runtime of the following function? Please remember to define n,
// provide a tight upper bound, and justify your answer in answers.txt.
//   public static void mystery1(int z) {
//     System.out.println(z);
//     if (z >= 10) {
//       mystery1(z/10);
//       System.out.println(z);
//     }
//   }
/**
 * Answer
 * Let N = z
 * worst case, best case, average case are all the same O(LogN), the if statement only specifies z is greater than 10,
 * which will be true for any "type" of number as z -> infinity. there is no special type of number that can avoid this.
 * Because it divides by 10 each time, this is log base 10 of N. Or just in O(LogN)
 */
// Q2 Mysteries Continue (2 point)
// What's the worst case runtime of the following function? Please remember to define n,
// provide a tight upper bound, and justify your answer in answers.txt.
//   public static String mystery2(int n) {
//     if (n % 7 == 0) {
//       return "Bzzzt!";
//     }
//     return mystery2(n-1);
//   }
/**
 * Answer
 * let N = n
 * Worst, best, average all O(1)
 * Worst:
 * worst when N is 1 less than a multiple of 7 (n%7 === 0 means it is divisible by 7). Then it recursively calls itself
 * subtracting 1 until the next multiple of 7 which will be after 6 recursive calls because if we are 1 less than next multiple
 * of 7 we are 6 greater than the previous. Impossible for any number N to cause more recursive calls than this.
 *
 * best:
 * N is divisible by 7 and ends immediately.
 */
// Q3 Exponentiation (Fast?) (4 points)
// What’s the best case, worst case, and average case runtime of pow? Assume n = power.
// Please remember to define n, provide a tight upper bound, and justify your answer in answers.txt.
// What one-line change could you make to improve the worst case? Describe the change in answers.txt.
// You must provide a written explanation of why your change works in order to receive full credit.
// algorithm pow
//   Input: positive integer b, non-negative integer p
//   Output: computing b^p (i.e. b raised to power of p)
//   if p = 0
//     return 1
//   else if p = 1
//     return b
//   else if p is even
//     temp = pow(b, p / 2)
//     return temp * temp
//   else
//     return b * b * pow(b, p-2)
/**
 * Answer
 * Let N = p
 * Best case: O(LogN)
 * if the number is a power of 2 then it can repeatedly be divided by and remain even, which will be Log base 2 of N or O(LogN)
 *
 * Worst: O(N)
 * If it is odd, then it will just keep doing p-2 in the recursive call and odd number -2 is always odd, meaning it will
 * continue to hit the else case everytime until p = 1. This will B P/2 recursive calls (because we subtract 2 each time)
 * and that is in O(N)
 *
 * Average: O(N)
 * There way more non powers of 2 than powers of 2. And any non 2 power even number eventually becomes an odd number by dividing
 * by 2.
 *
 * 1 line chage:
 * return b * b * pow(b, p-2) -> return b * pow(b, p-1)
 * here we subtract 1 making it even which on the next recursive call divides by 2. So we alternate between -1 then /2 from p
 * rather than subtract by 2 each time. Because -1 is an insignificant change relative to /2 we can say the driving factor is /2
 * and should still (ignoring the -1 calls) should be about Log base 2 of N. But each of those /2 recursive calls is always paired
 * with a -1 recursive call. Seems then like we are doubling the number of recursive calls so 2*Log base 2 N or O(LogN)
 */
// Q4 QuickSort Shenanigans (2 point)
// Given the QuickSort implementation from class, provide an 18-element list in Q4.java
// that will take the least number of recursive calls of QuickSort to complete. As a counter-example,
// here is a list that will cause QuickSort to make the MOST number of recursive calls:
//   public static List<Integer> input() {
//     return Arrays.asList(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
//   }
// And here’s the QuickSort algorithm, for convenience:
// algorithm QuickSort
//   Input: lists of integers lst of size N
//   Output: new list with the elements of lst in sorted order
//   if N < 2
//     return lst
//   pivot = lst[N-1]
//   left = new empty list
//   right = new empty list
//   for index i = 0, 1, 2, ... N-2
//     if lst[i] <= pivot
//       left.add(lst[i])
//     else
//       right.add(lst[i])
//   return QuickSort(left) + [pivot] + QuickSort(right)
/**
 * Answer (for a 10 length for simplicity)
 * 1 2 3 4 5 6 7 8 9 10   start with sorted
 * 1 2 4  3      6 7 9 10  8        5      split in half and order those halfs so that the pivot is on right (last number
 *                                       and the remaining numbers have all less than all greater than grouped, making
 *                                       it easier to visually see the split. continue this process...
 * 1 2    4   3      6 7   9 10   8        5
 * 1  2    4   3      6  7   9  10   8        5
 * 1,2,4,3,6,7,9,10,8,5
 */
