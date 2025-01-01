import { MetalBar } from "../homework7/MetalBar";

// Q1: Treasure Cave with Fused Bars--Recursive
// Recall the set up for HW7 Q2:

// Now assume that for each type of metal, all of the bars are fused together so that you're forced
// to all the bars of a certain type, or none of them.

// This means that you sometimes should not take the metal that has the highest value, because it
// either will not fit all in your bag (since you have to take all the bars), or other metals of
// lesser will be worth more overall value when combined together.

// Write bestValueForFused, which takes in the the size of your bag, the counts of all metals,
// and the value of all metals, and returns the value of the best picks possible. Your code
// must use recursion and should run in O(2^N) where N is the total number of metals
// (aka counts.length and values.length).

// bestValueForFused(4, [], []) // 0 (the cave is empty)
// bestValueForFused(4, [4, 10, 2], [3, 1, 5]) // 12 (take metal 0, even though metal 2 is worth more per bar)
// bestValueForFused(4, [4, 2, 2], [3, 2, 5]) // 14 (take metal 1 and metal 2)
// bestValueForFused(6, [4, 2, 1], [3, 3, 5]) // 18 (take metal 0 and metal 1)

function bestValueForFused(
  bagCapacity: number,
  counts: number[],
  values: number[]
) {
  if (values.length === 0) {
    return 0;
  }

  let metalBars: MetalBar[] = [];
  for (let i = 0; i < counts.length; i++) {
    metalBars.push(new MetalBar(counts[i], values[i]));
  }

  return bestValueForFusedHelper(bagCapacity, metalBars, 0);
}

function bestValueForFusedHelper(
  bagCapacity: number,
  metalBars: MetalBar[],
  index: number
): number {
  if (index > metalBars.length - 1) {
    return 0;
  }

  const currBar = metalBars[index];
  const currBarCanFit = currBar.count <= bagCapacity;

  const take = currBarCanFit
    ? currBar.count * currBar.value +
      bestValueForFusedHelper(bagCapacity - currBar.count, metalBars, index + 1)
    : 0;
  const dontTake = bestValueForFusedHelper(bagCapacity, metalBars, index + 1);

  return Math.max(take, dontTake);
}

console.log(bestValueForFused(4, [], [])); // 0 (the cave is empty)
console.log(bestValueForFused(4, [4, 10, 2], [3, 1, 5])); // 12 (take metal 0, even though metal 2 is worth more per bar)
console.log(bestValueForFused(4, [4, 2, 2], [3, 2, 5])); // 14 (take metal 1 and metal 2)
console.log(bestValueForFused(6, [4, 2, 1], [3, 3, 5])); // 18 (take metal 0 and metal 1)
console.log();

// Q2. Treasure Cave with Fused Bars--Dynamic Programming
// Now write bestValueForFusedDP, which should use dynamic programming and should run in O(B*N) where
// B is the size of your bag and N is the total number of metals (aka counts.length and values.length).

/**
 * solution probably similar to class solution. don't have homework solutions anymore, but I do have a pic of a table on classes'
 * piazza channel and figured it out, I represented the table with the bestValues array. See Lecture 20 - Dynamic Programming II
 * notes at bottom to see the picture.
 *
 * uncomment the console logs in this function and only execute one test case to see how the table bestValues is built
 */
function bestValueForFusedDP(
  bagCapacity: number,
  counts: number[],
  values: number[]
) {
  if (values.length === 0) {
    return 0;
  }

  let metalBars: MetalBar[] = [];
  for (let i = 0; i < counts.length; i++) {
    metalBars.push(new MetalBar(counts[i], values[i]));
  }

  const rowCount = counts.length + 1; // index 0 no bars. makes algorithm work easier below when referencing previous row
  const colCount = bagCapacity + 1; // index 0 no weight
  const bestValues: number[][] = Array(rowCount);
  for (let i = 0; i < bestValues.length; i++) {
    bestValues[i] = Array(colCount).fill(0);
  }

  for (let barIndex = 1; barIndex < rowCount; barIndex++) {
    const currBar = metalBars[barIndex - 1];

    // bar can't fit so just copy previous row to current so our reference to previous row works (otherwise will have
    // have rows of 0). This is similar to class solution to pickTrees (see /lecture/Dynamic Programming/pickTree.ts),
    // where he allowed a value to be set to previous if we couldn't pick the tree. So having values on a row doesn't
    // mean we necessarly actually picked a bar at that index. One could say a row of bestValues represents the best
    // possible values at a weight, considering all combinations of bars from the current index or before.
    if (currBar.count >= colCount) {
      bestValues[barIndex - 1].forEach(
        (val, index) => (bestValues[barIndex][index] = val)
      );
      //   console.log(bestValues);
    }

    for (let weight = currBar.count; weight < colCount; weight++) {
      /**
       * Either the previous row already had the best value at that weight, OR the current bar PLUS the value from previous row
       * at weight that can be added to current bar and still fit in bag is a better value (means combine current bar value
       * with another bar that fits together with it)
       */
      bestValues[barIndex][weight] = Math.max(
        bestValues[barIndex - 1][weight],
        currBar.count * currBar.value +
          bestValues[barIndex - 1][weight - currBar.count]
      );
      //   console.log(bestValues);
    }
    // console.log();
  }

  // last row and column should have highest value
  return bestValues[rowCount - 1][colCount - 1];
}

console.log(bestValueForFusedDP(4, [], [])); // 0 (the cave is empty)
console.log(bestValueForFusedDP(4, [4, 10, 2], [3, 1, 5])); // 12 (take metal 0, even though metal 2 is worth more per bar)
console.log(bestValueForFusedDP(4, [4, 2, 2], [3, 2, 5])); // 14 (take metal 1 and metal 2)
console.log(bestValueForFusedDP(6, [4, 2, 1], [3, 3, 5])); // 18 (take metal 0 and metal 1)

/** my failed attempt with no assistance. doesn't work for all cases */
// function bestValueForFusedDP(
//   bagCapacity: number,
//   counts: number[],
//   values: number[]
// ) {
//   if (values.length === 0) {
//     return 0;
//   }

//   let metalBars: MetalBar[] = [];
//   for (let i = 0; i < counts.length; i++) {
//     metalBars.push(new MetalBar(counts[i], values[i]));
//   }

//   /** maxValue at i is max value we can get if the bag capacity was i */
//   const maxValues = Array(bagCapacity + 1).fill(0);
//   //   maxValues[0] = 0; // 0 weight bag can contain nothing
//   const barUsed: boolean[] = Array(metalBars.length).fill(false);

//   for (let weight = 1; weight < maxValues.length; weight++) {
//     // console.log(maxValues);
//     let barUsedForWeight = -1;
//     for (let j = 0; j < metalBars.length; j++) {
//       const weightDifference = weight - metalBars[j].count;
//       const canTakeBar = weightDifference >= 0 && !barUsed[j];

//       if (canTakeBar) {
//         const max = Math.max(
//           maxValues[weight],
//           //   maxValues[weight - 1],
//           metalBars[j].count * metalBars[j].value //+ maxValues[weightDifference]
//         );

//         if (
//           max ===
//           metalBars[j].count * metalBars[j].value //+ maxValues[weightDifference]
//         ) {
//           barUsedForWeight = j;
//           console.log(j);
//         }

//         maxValues[weight] = max;
//       } else {
//         maxValues[weight] = Math.max(maxValues[weight], maxValues[weight - 1]);
//       }

//       console.log(maxValues);
//     }
//     if (barUsedForWeight !== -1) {
//       barUsed[barUsedForWeight] = true;
//       maxValues[]
//     }
//     console.log();
//   }
//   console.log(maxValues);
//   let max = 0;
//   maxValues.forEach((value) => (max = value > max ? value : max));
//   return max;
// }

// // console.log(bestValueForFusedDP(4, [], [])); // 0 (the cave is empty)
// // console.log(bestValueForFusedDP(4, [4, 10, 2], [3, 1, 5])); // 12 (take metal 0, even though metal 2 is worth more per bar)
// // console.log(bestValueForFusedDP(4, [4, 2, 2], [3, 2, 5])); // 14 (take metal 1 and metal 2)
// console.log(bestValueForFusedDP(6, [4, 2, 1], [3, 3, 5])); // 18 (take metal 0 and metal 1)
