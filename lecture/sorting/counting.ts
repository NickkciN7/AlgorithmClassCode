// algorithm countingSort
//   Input: array of integers arr, integer k where each element of arr is between [0, k]
//   Output: array of integers in sorted order
//   count = array of k+1 zeros
//   for element el in arr
//     count[el] += 1
//   total = 0
//   for i in 0, 1, ... k do
//     count[i], total = total, count[i] + total
//   output = array of the same length as arr
//   for element el in arr:
//     output[count[el]] = el
//     count[el] += 1
//   return output

//
// N = n + k
// n = arr.length
// k = largest number
//
// - best, worst, average runtime O(N)
// - space: O(N)

function countingSort(arr: number[], k: number) {
  const count = Array(k + 1).fill(0);

  // fill count with how many times any number i appears in original arr
  for (let i = 0; i < arr.length; i++) {
    count[arr[i]]++;
  }

  // Changes count at index i to signify the next index of ouput array that the index of count (index
  // of count represents a value that was in the original array) should be placed at.
  let total = 0;
  for (let i = 0; i < count.length; i++) {
    const temp = count[i];
    count[i] = total;
    total += temp;
  }

  const output = Array(arr.length);
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    // count at the element-th index represents the index of output that element should be placed in.
    output[count[element]] = element;
    // Since a number can appear multiple times, we need to increase "count" there so that next appearance will
    // be placed in output 1 index over instead of overwriting the value at the same index
    count[element]++;
  }

  return output;
}

// My version
// function countingSort(arr: number[], k: number) {
//   const count = Array(k + 1).fill(0);

//   for (let i = 0; i < arr.length; i++) {
//     count[arr[i]]++;
//   }
//
//   let overwriteIndex = 0;
//   // all inner for loops = n work. outer for loop goes k times. k+n
//   for (let i = 0; i < count.length; i++) {
//     for (let j = 0; j < count[i]; j++) {
//       arr[overwriteIndex] = i;
//       overwriteIndex++;
//     }
//   }

//   return arr;
// }

console.log(countingSort([9, 2, 2, 1, 4, 2, 3], 9));
