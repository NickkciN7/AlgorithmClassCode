import { MetalBar, printMetalBars } from "./MetalBar";

// Q1: Treasure Cave (3 points)
// Imagine you find a hidden cave filled with with N different types of metal bars (gold, silver, platinum, steel, etc.)
// Each type of metal bar has some value vi, and there are xi bars of that metal in the cave (for i = 0, 1, 2, 3, ... N-1).
// You want to bring back as many bars of the treasure as you can, but your bag can only fit W (will call it maxWeight) bars.
// How do you choose how many bars of each metal to bring home to maximize the total value?

// For example, if your bag can store 7 bars and you have gold, silver, platinum, and steel in these quantities:

// [4, 10, 2, 4] // 4 bars of gold, 10 silver, 2 platinum, 4 steel
// and these values

// [3, 1, 5, 2]  // gold worth 3 per bar, silver worth 1, platinum 5, steel 2
// Then you would want to take this much of each metal

// [4, 0, 2, 1]  // all the gold, no silver, all the platinum, 1 steel bar
//               // for a total value of 24 (4*3 + 2*5 + 1*2)
// Write bestValue() which takes in an integer W, an array of counts, and an array of values. It should return the best value
// you can earn by picking the bars optimally. Your code should run in O(nlogn).

// Hint #1: This can be done using a Greedy approach.
// Hint #2: We've provided MetalBars.java to help you out here. Check the homework party to see how to use it.

function bestValue(bagCapacity: number, counts: number[], values: number[]) {
  let metalBars: MetalBar[] = [];
  for (let i = 0; i < counts.length; i++) {
    metalBars.push(new MetalBar(counts[i], values[i]));
  }

  // Sort by value in descending order
  metalBars.sort((metalBarA, metalBarB) => metalBarB.value - metalBarA.value);

  let sum = 0;

  for (let i = 0; i < metalBars.length; i++) {
    const currBar = metalBars[i];
    const ammountToAdd = Math.min(bagCapacity, currBar.count);

    sum += ammountToAdd * currBar.value;

    bagCapacity -= ammountToAdd;

    if (bagCapacity === 0) {
      break;
    }
  }

  return sum;
}

console.log(bestValue(7, [4, 10, 2, 4], [3, 1, 5, 2]));

// Q2. Treasure Cave with Fused Bars (2 points)
// Now assume that for each type of metal, all of the bars are fused together so that you're forced
// to all the bars of a certain type, or none of them.

// This means that you sometimes should not take the metal that has the highest value, because it
// either will not fit all in your bag (since you have to take all the bars), or other metals of
// lesser value will be worth more overall value when combined together. In Q2.txt, explain by
// counterexample where the greedy approach you wrote in Q1 won't work for this problem.

// bagCapacity: 4
// counts: [3,2,2]
// values: [5,4,4]
// Can take 3*5=15 of first with no more room for others OR
// Can take 2*4 + 2*4 = 16 by choosing last 2.
// So this is an example where greedily taking the most high value bar first fails to give optimal answer
