/**
 * algorithm QuickSort
  Input: lists of integers lst of size N
  Output: new list with the elements of lst in sorted order

  if N < 2
    return lst
  pivot = lst[N-1]
  left = new empty list
  right = new empty list
  for index i = 0, 1, 2, ... N-2
    if lst[i] <= pivot
      left.add(lst[i])
    else
      right.add(lst[i])
  return QuickSort(left) + [pivot] + QuickSort(right)

  
 * worst case: O(N^2)
 * if sorted already and choose pivot as last item each time, there will always be
 * 1 partition, the left list that contains all items less than the pivot. Each recursive call on the left will decrease
 * the length by 1 because we are not including the pivot. First iteration N steps, next N-1,..... and this once again
 * can be summed up with the summation formula from 1 to N which is O(N^2).
 * 
 * best case: O(NLogN)
 * if the pivot is perfectly chosen to split the items into 2 equal size arrays, each
 * recursive call on these arrays will do parent's list length/2 steps. And this eventually reaches size 1. We say there
 * are Log base 2 N levels of recursive calls because log base 2 of N is how many times 2 goes into N and we divide by 2 each
 * time. If we consider each level of recursive calls is dealing with 2 halfs (-1 item because pivot not in recursive call)
 * , then each level is still doing parentlength/2 *2 work -1, just as in the worst case (parentLength-1). so N then N-1... 
 * BUT in this case there are only Log base 2 N levels, not N like in the worst case. So we get N* log base 2 of N and we know 
 * any base can be converted with the change of base formula and leaves a constant multiple which can be ignored, so that is 
 * in O(N*Log(N))
 * 
 * average case: O(NLogN)
 * unlikely to choose the worst pivot each time, so on average it approximately splits the 
 * list in half and following the reasoning of the best case, it is O(NLogN)
 * 
 * space 
 * worst case: O(N^2)
 * each of those steps equaling N-whatever are looping over the new list. and that is a NEW list of that size each time
 * so in this case steps and space are closely grouped and the space is the same function
 * best and average: O(NLogN)
 * same reasoning as worst case, all the space complexity will have same functions as the time complexity
 * (note this algorithm could be written without making new lists and just keeping indexes specifying the halfs start and end,
 * in that case the worst is N and best/average is LogN, which comes from the call stack of the recursive calls, not making lists.
 * there is still a call stack in the other way, but N + N^2 is still in N^2 and LogN + NLogN is still in NLogN)
 * 
 * lol lecture 6 ~40 mins he says size doesn't matter is a mantra we have...
 */

function quickSort(arr: number[]): number[] {
  if (arr.length < 2) {
    return arr;
  }

  const pivot = arr.length - 1;
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < arr[pivot]) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), arr[pivot], ...quickSort(right)];
}

/**
 * solution with better space as described in space analysis above
 */
function quickSortBetterSpace(arr: number[]) {
  quickSortHelper(arr, 0, arr.length - 1);
  return arr;
}
function quickSortHelper(arr: number[], low: number, high: number) {
  if (high < low) {
    return;
  }
  //   console.log(arr);
  const partitionIndex = partition(arr, low, high);
  //   console.log(arr);

  // partitionIndex is final location of pivot after partition alg, it should already be in correct place so no longer need to include it in function calls otherwise it will be modified
  quickSortHelper(arr, low, partitionIndex - 1);
  quickSortHelper(arr, partitionIndex + 1, high);
}
function partition(arr: number[], low: number, high: number): number {
  // i is last known index where all numbers including at i are less than the pivot
  let i = low - 1;
  const pivot = arr[high];

  for (let j = low; j < high; j++) {
    if (arr[j] < pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  // arr[i + 1] should be first item in list greater than or equal to pivot (arr[high]), and all other numbers beyond i+1 will also be greater since we already moved the smaller items above
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  return i + 1;
}

console.log(quickSort([3, 1, 2]));
console.log(quickSort([1, 10, 9, 8, 3, 0, 3]));
console.log(quickSort([-3, 0, 5, -2, 1]));
console.log(quickSort([5, 4, 3, 2, 1]));
console.log(quickSort([5]));
console.log(quickSort([]));
