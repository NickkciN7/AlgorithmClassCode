// introduced lecture 5: https://www.youtube.com/watch?v=Ab0GIaO3RWA&ab_channel=AndrewHuang
// Selection sort basically just goes through array and picks smallest number and places
// it at beginning. could make new array, or for in place (constant space) swap in the
// original array

// In place
// best, worst, average runtime always in O(N^2) because steps all constant and inner for loop
// runs n-1 times then n-2 ... then 1 time. And once again if we use summation formula that has degree of 2 (^2)
// space in O(1)
function selectionSort(arr: number[]) {
  for (let i = 0; i < arr.length; i++) {
    // i-1 will always contain an item guaranteed to be in the correct place
    // already (except first round because -1 index doesn't exist), since we
    // already set i to the minimum in the last outer for loop iteration
    let minIndex = i;

    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    const temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }

  return arr;
}

console.log(selectionSort([3, 1, 2]));
console.log(selectionSort([1, 10, 9, 8, 3, 0, 3]));
console.log(selectionSort([-3, 0, 5, -2, 1]));
console.log(selectionSort([5, 4, 3, 2, 1]));
console.log(selectionSort([5]));
console.log(selectionSort([]));

/** O(N^2) time, O(N) space */
// function selectionSort(arr: number[]) {
//   const sortedArr = Array(arr.length);

//   const seen = Array(arr.length).fill(false);
//   let leftMostIndex = 0;
//   for (let i = 0; i < arr.length; i++) {
//     let minIndex = leftMostIndex;
//     // need boolean seen array to ignore original array indexes we already took from, or
//     // alternatively can use .splice on original, but that is more complex space and time than
//     // boolean array, but since it only happens once per iteration, it only adds N space and time
//     // not multiply, which technically does not change the overall space and time complexity.
//     for (let j = 0; j < arr.length; j++) {
//       if (!seen[j] && arr[j] < arr[minIndex]) {
//         minIndex = j;
//       }
//     }
//     if (minIndex === leftMostIndex) {
//       leftMostIndex++;
//     }
//     seen[minIndex] = true;
//     sortedArr[i] = arr[minIndex];
//   }

//   return sortedArr;
// }

// using splice
// function selectionSort(arr: number[]) {
//   const sortedArr = Array(arr.length);

//   for (let i = 0; i < sortedArr.length; i++) {
//     let minIndex = 0;

//     for (let j = 0; j < arr.length; j++) {
//       if (arr[j] < arr[minIndex]) {
//         minIndex = j;
//       }
//     }

//     sortedArr[i] = arr[minIndex];
//     arr.splice(minIndex, 1);
//   }

//   return sortedArr;
// }
