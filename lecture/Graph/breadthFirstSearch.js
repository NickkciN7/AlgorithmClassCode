"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../../utils");
// algorithm bfs
//     Input: undirected graph G = (V,E), int s and int t
//     Output: true if there's a path from s to t; false otherwise
//     fringe = Queue of integers
//     visited = new boolean array of size |V|
//     fringe.add(s)
//     visited[s] = true
//     while fringe.size() > 0
//       currNode = fringe.remove()
//       if currNode == t
//         return true
//       for each neighbor of currNode, starting at the smallest labeled neighbor
//         if !visited[neighbor]
//           visited[neighbor] = true
//           fringe.add(neighbor)
//     return false
// 3 - 4 - 5
// |   |   |
// 1 - 6   2
//  \ /
//   0
const adjacenyList = [
    [1, 6], // 0 connects to node 1 and 6
    [0, 3, 6], // 1 connects to nodes 0, 6, and 3
    [5],
    [1, 4],
    [3, 5, 6],
    [2, 4],
    [0, 1, 4],
];
// Note that this is very similar to tree breadth first traversal!!! (see lecture/Tree/TreeProperties/trees.ts),
// except we use children (for trees) instead of "neighbors" and we need a visited array since graphs can
// loop, unlike trees. This algorithm will work on trees though since all trees are graphs
// (but not all graphs are trees)
function breadthFirstSearch(graph, start, target) {
    const fringe = new utils_1.Queue();
    fringe.add(start);
    const visited = Array(graph.length).fill(false);
    visited[start] = true;
    while (!fringe.isEmpty()) {
        const currNode = fringe.remove();
        console.log(currNode);
        if (currNode === target) {
            return true;
        }
        const neighbors = graph[currNode];
        for (const neighbor of neighbors) {
            if (!visited[neighbor]) {
                visited[neighbor] = true;
                fringe.add(neighbor);
            }
        }
    }
    return false;
}
// Note that to traverse all possible nodes make t an impossible number to reach for example,
// size of Graph, since there are only 0 to Size-1, there is no Node with number Size. Below I
// choose 7 becase there are only nodes 0 to 6
breadthFirstSearch(adjacenyList, 0, 7);
