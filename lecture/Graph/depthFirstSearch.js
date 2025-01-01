"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.depthFirstSearch = depthFirstSearch;
// algorithm dfs
//   Input: undirected graph G = (V, E), int s and int t
//   Output: true if there's a path from s to t; false otherwise
//   visited = new boolean array of size |V|
//   return dfsHelper(G, s, t, visited)
// algorithm dfsHelper
//   Input: undirected graph G = (V, E), int s and int t, and boolean array visited
//   Output: true if there's a path from s to t; false otherwise
//   visited[s] = true
//   if s == t
//     return true;
//   for each neighbor of s, starting at the smallest labeled neighbor
//     if !visited[neighbor] and dfsHelper(G, neighbor, t, visited)
//       return true
//   return false
// 3 - 4 - 5
// |   |   |
// 1 - 6   2
//  \ /
//   0
const adjacenyList = [
    [1, 6], // 0 connects to node 1 and 6
    [0, 3, 6], // 1 connects to nodes 0, 3, and 6
    [5],
    [1, 4],
    [3, 5, 6],
    [2, 4],
    [0, 1, 4],
];
function depthFirstSearch(graph, start, target, silent) {
    const visited = Array(graph.length).fill(false);
    return depthFirstSearchHelper(graph, start, target, visited, silent);
}
function depthFirstSearchHelper(graph, current, target, visited, silent) {
    visited[current] = true;
    if (!silent) {
        console.log(current);
    }
    if (current === target) {
        return true;
    }
    const neighbors = graph[current];
    for (const neighbor of neighbors) {
        if (!visited[neighbor] && // short circuit AND, very important here as it will not recurse when visited
            depthFirstSearchHelper(graph, neighbor, target, visited, silent)) {
            return true;
        }
    }
    return false;
}
depthFirstSearch(adjacenyList, 0, 7, false); // essentially complete traversal since 7 does not exist in graph
console.log();
for (let index = 0; index < 8; index++) {
    console.log(depthFirstSearch(adjacenyList, 0, index, true)); // all except 7 are true because 0-6 are in graph and connected to 0, but 7 isn't
}
