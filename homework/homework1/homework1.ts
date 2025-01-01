//  * Q1: Find Missing Number (2 points)
// Convert the following pseudocode algorithm into Java. You'll find example tests within the main method
// to ensure you're headed in the right direction. Make sure you understand each example.

// algorithm findMissing
//   Input: integer array A of length N where each element is distinct
//     and in the range [0, N]
//   Output: integer x where x is in the range [0, N], but not in A

//     int testResult1 = findMissing(new int[] {0, 1, 2, 4, 5});
//     System.out.println(testResult1); // should output 3

//     int testResult2 = findMissing(new int[] {5, 0, 4, 3, 1});
//     System.out.println(testResult2); // should output 2

//     int testResult3 = findMissing(new int[] {});
//     System.out.println(testResult3); // should output 0

//     int testResult4 = findMissing(new int[] {9, 3, 5, 1, 4, 8, 2, 10, 0, 6});
//     System.out.println(testResult4); // should output 7

//     System.out.println("\nEND Q1\n");

function findMissingEfficient(arr: number[]) {
  // O(N) time O(1) space
  let sum = 0;
  let highestNumber = 0;
  arr.forEach((num) => {
    sum += num;
    if (num > highestNumber) {
      highestNumber = num;
    }
  });

  // Formula for sum of numbers 1 through N (and 0 through N) minus the actual sum of the array elements which is missing a number.
  // So we can say the missing number is what is required to add to our computed sum to equal the sum if there were no missing numbers
  return (highestNumber * (highestNumber + 1)) / 2 - sum;
}

function findMissing(arr: number[]) {
  // O(N) time O(N) space
  const set = new Set<number>();
  //   let largestNumber = 0; // Don't need this, can use arr.length, because even though missing 1 in 0 to N,
  //   that is N-1 items plus 1 for 0 = N.
  arr.forEach((num) => {
    set.add(num);
    // if (largestNumber < num) {
    //   largestNumber = num;
    // }
  });

  let missingNumber = 0;
  //   for (let i = 0; i <= largestNumber; i++) {
  for (let i = 0; i <= arr.length; i++) {
    if (!set.has(i)) {
      missingNumber = i;
    }
  }

  return missingNumber;
}
// console.log(findMissing([0, 1, 2, 4, 5]));
// console.log(findMissing([5, 0, 4, 3, 1]));
// console.log(findMissing([]));
// console.log(findMissing([0, 1, 2]));
// console.log(findMissing([9, 3, 5, 1, 4, 8, 2, 10, 0, 6]));
// console.log("\n----\n");

// Q3: countFives (2 points)
// Write countFives, which takes in an integer and returns the number of times 5 appears as a digit within the number. Examples:

//   countFives(123467890) // should output 0
//   countFives(555555)    // should output 6
//   countFives(15354)     // should output 2
// In order to receive full credit for this problem, you must use recursion. I.e. using =, for, while, etc. is prohibited.

// Hint: recall the % and / operators:

//   123 % 10 // evaluates to 3
//   123 / 10 // evalutes to 12 (not in ts. Need Math.floor because number can have decimal)
function countFives(num: number) {
  return countFivesHelper(num, 0);
}
function countFivesHelper(num: number, count: number) {
  if (num < 1) {
    return count;
  }
  return countFivesHelper(
    Math.floor(num / 10),
    num % 10 === 5 ? count + 1 : count
  );
}
// console.log(countFives(123467890));
// console.log(countFives(555555));
// console.log(countFives(15354));

// Q4: pickTrees (3 points)
// You build homes out of wood and you need material from a nearby forest. However, you want to avoid deforestation,
// so you decide for each tree you cut down, you'll leave its neighbors alone, giving the forest time to recover.
// However, you still need as much wood as possible, so you have to be careful about which trees you pick to cut down.

// Write pickTrees, which takes in an array of N trees arr where arr[i] represents how much wood you can
// harvest by cutting down tree i. It should return the max amount of wood you can harvest while following the rule of skipping neighbors:

//     // Pick tree 0, tree 2, and tree 5 => 1 + 3 + 5 = 9 wood total
//     int testResult5 = pickTrees(new int[] {1, 2, 3, 4, 5});
//     System.out.println(testResult5); // should output 9

//     // Pick tree 1 and tree 3 => 3 + 3 = 6 wood total
//     int testResult6 = pickTrees(new int[] {1, 3, 4, 3});
//     System.out.println(testResult6); // should output 6

//     // Pick tree 0 and tree 3 => 5 + 9 = 14 wood total
//     int testResult7 = pickTrees(new int[] {5, 1, 4, 9});
//     System.out.println(testResult7); // should output 14
// In order to receive full credit for this problem, you must use recursion. I.e. using =, for, while, etc. is prohibited.

// pickTreesSlow in lecture/Dynamic Programming/pickTree.ts is more clean implementation
function pickTrees(trees: number[]) {
  // Always check how you are calling helper!!!!!! I wasn't returning and wasted like 10 minutes just to find that out!!!!! ALWAYS RETURN!!!!
  return pickTreesHelper(trees, 0);
}
function pickTreesHelper(trees: number[], index: number): number {
  // console.log(index);
  if (index >= trees.length) {
    // console.log("base");
    return 0;
  }
  // console.log(
  //   Math.max(
  //     trees[index] + pickTreesHelper(trees, index + 2),
  //     pickTreesHelper(trees, index + 1)
  //   )
  // );
  // max of cut, and don't cut
  return Math.max(
    trees[index] + pickTreesHelper(trees, index + 2),
    pickTreesHelper(trees, index + 1)
  );
}
console.log(pickTrees([1, 2, 3, 4, 5]));
console.log(pickTrees([1, 3, 4, 3]));
console.log(pickTrees([5, 1, 4, 9]));
// console.log(pickTrees([5, 1, 9]));
