// for each unvisted node u
// 	dfs(u)
// 		for each neighbor v of u
// 			if v unvisited, dfs(v)
// 		else skip v
// 		when done with loop (no more neighbors), add u to back of list

// reverse the list

// 3 -> 4 -> 5     8 <- 7
// ^    ^    |
// |    |    |
// |    |    v
// 1 -> 6    2
// ^   ^
//  \ /
//   0

// running topologicalSort gives
// [
//   7, 8, 0, 1, 6,
//   3, 4, 5, 2
// ]

const adjacenyList = [
  [1, 6], // 0 connects directionally to node 1 and 6
  [3, 6], // 1 connects to nodes 3 and 6
  [],
  [4],
  [5],
  [2],
  [4],
  [8],
  [],
];

function topologicalSort(graph: number[][]) {
  const visited: boolean[] = Array(graph.length).fill(false);
  const list: number[] = Array(graph.length);

  // so can modify this original listIndex and share it between recursive calls. if was just number,
  // each recursive function call gets its own copy of listIndex. Objects are always passed by value of reference
  const listIndex = { value: 0 };
  for (let i = 0; i < visited.length; i++) {
    if (visited[i]) {
      continue;
    }
    depthFirstTraversal(graph, i, visited, list, listIndex, true);
  }

  // Important to note the list we created must be reversed, as we add sinks (no neighbors) first, and
  // going backwards add those that the sink and so on depended on. So to get the actual order we must go,
  // reverse that list.
  return list.reverse();
}

// export function depthFirstSearch(
//   graph: number[][],
//   start: number,
//   target: number,
//   silent: boolean
// ) {
//   const visited: boolean[] = Array(graph.length).fill(false);

//   return depthFirstSearchHelper(graph, start, target, visited, silent);
// }

function depthFirstTraversal(
  graph: number[][],
  current: number,
  visited: boolean[],
  list: number[],
  listIndex: { value: number },
  silent: boolean
) {
  visited[current] = true;
  if (!silent) {
    console.log(current);
  }

  const neighbors = graph[current];
  for (const neighbor of neighbors) {
    if (!visited[neighbor]) {
      depthFirstTraversal(graph, neighbor, visited, list, listIndex, silent);
    }
  }

  /**
   * When there are no more neighbors, we can conclude that either the node is a sink and has no dependencies
   * and thus it is safe to add to list, OR all nodes that depend on it have already gone through the
   * algorithm through recursive calls and are added to the list, therefore it is also safe to add it to
   * the list
   */
  list[listIndex.value] = current;
  listIndex.value++;
}

console.log(topologicalSort(adjacenyList));
