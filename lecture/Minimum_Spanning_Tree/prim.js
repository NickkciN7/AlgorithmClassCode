"use strict";
// algorithm Prims
//   Input: Weighted, Undirected, connected Graph G = (V, E) with edge weights we
//   Output: A Tree T = (V, E'), with E' ⊆ E that minimizes the edge weight sum
//            * something to note is this pseudocode doesn't even return a tree. I think
//             rather it should say it returns prev and cost, from which a mst could be formed
//   for all u ∈ V :
//     cost(u) = ∞
//     prev(u) = nil
//   Pick any initial node u0
//   cost(u0) = 0
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.nodesToVisitByCost = void 0;
exports.changeCost = changeCost;
//   H = makequeue(V) (priority queue, using cost-values as keys)
//   while H is not empty:
//     u = deletemin(H)
//     // edge from node u to node v
//     for each {u, v} ∈ E:
//       if cost(v) > w(u, v) and H.contains(v): // H.contains(v) prevents cycle
//         cost(v) = w(u, v)
//         prev(v) = u
//         decreasekey(H, v)
// Very similar to dijkstra
const heap_js_1 = __importDefault(require("heap-js"));
const dijkstra_1 = require("../Graph/dijkstra");
const lowestCostGraphNodePriorityComparator = (a, b) => a.cost - b.cost;
/** priority queue using min heap */
exports.nodesToVisitByCost = new heap_js_1.default(lowestCostGraphNodePriorityComparator);
function changeCost(nodesToVisitByCost, target, newCost) {
    nodesToVisitByCost.remove(
    // distance irrelvant when deleting, just need nodeNumber, but need to adhere to types expected (a ConnectedNode)
    { cost: -1, nodeNumber: target }, (e, o) => e.nodeNumber === o.nodeNumber);
    nodesToVisitByCost.add({ cost: newCost, nodeNumber: target });
}
/**
 * @param graph Directed or undirected graph
 * @returns An object containg cost and prev. cost is an array showing the shortest cost edge to a node
 * so far. Note this is not the path like dijkstra, it is the single edge weight which is from one of the
 * edges connected to that node.
 * prev is an array showing what the previous node is along a path from source to that node.
 */
function prim(graph) {
    const cost = Array(graph.length).fill(Number.MAX_VALUE);
    const start = 0; // arbitrarily choose node 0
    cost[start] = 0;
    const prev = Array(graph.length).fill(null);
    // add all nodes to priority queue
    exports.nodesToVisitByCost.add({ cost: cost[start], nodeNumber: start });
    cost.forEach((cost, index) => {
        if (index !== start) {
            exports.nodesToVisitByCost.add({ cost: cost, nodeNumber: index });
        }
    });
    const inQueue = Array(graph.length).fill(true);
    while (!exports.nodesToVisitByCost.isEmpty()) {
        // console.log("cost:");
        // console.log(cost);
        // console.log("prev:");
        // console.log(prev);
        // console.log();
        const currNode = exports.nodesToVisitByCost.pop();
        const currNodeNumber = currNode.nodeNumber;
        // console.log(currNodeNumber);
        inQueue[currNodeNumber] = false;
        const neighbors = graph[currNodeNumber];
        for (const neighbor of neighbors) {
            const neighborNumber = neighbor.nodeNumber;
            const currCostToNeighbor = cost[neighborNumber];
            // WE ARE NOT DOING PATH ANYMORE LIKE DIJKSTRA, SO WE ARE NOT ADDING HERE, WE ONLY CARE ABOUT THE
            // SINGLE EDGE.
            const costToNeighborThroughCurrNode = neighbor.weight;
            if (currCostToNeighbor > costToNeighborThroughCurrNode &&
                inQueue[neighborNumber]) {
                cost[neighborNumber] = costToNeighborThroughCurrNode;
                prev[neighborNumber] = currNodeNumber;
                changeCost(exports.nodesToVisitByCost, neighborNumber, costToNeighborThroughCurrNode);
            }
        }
    }
    return { cost, prev };
}
/**
 * graph[i] is list of neighbors of i. based on tesselation example graph in MST section of visual algo:
 * https://visualgo.net/en/mst
 *
 * Also shows this in the MST lecture.
 *
 * This is a connected graph
 */
const weightedGraphAsAdjacencyList = [
    [new dijkstra_1.Neighbor(1, 8), new dijkstra_1.Neighbor(2, 12)],
    [new dijkstra_1.Neighbor(0, 8), new dijkstra_1.Neighbor(2, 13), new dijkstra_1.Neighbor(4, 9)],
    [
        new dijkstra_1.Neighbor(0, 12),
        new dijkstra_1.Neighbor(1, 13),
        new dijkstra_1.Neighbor(3, 14),
        new dijkstra_1.Neighbor(6, 21),
    ],
    [
        new dijkstra_1.Neighbor(1, 25),
        new dijkstra_1.Neighbor(2, 14),
        new dijkstra_1.Neighbor(4, 20),
        new dijkstra_1.Neighbor(5, 8),
        new dijkstra_1.Neighbor(6, 12),
        new dijkstra_1.Neighbor(7, 12),
        new dijkstra_1.Neighbor(8, 16),
    ],
    [new dijkstra_1.Neighbor(1, 9), new dijkstra_1.Neighbor(3, 20), new dijkstra_1.Neighbor(5, 19)],
    [new dijkstra_1.Neighbor(3, 8), new dijkstra_1.Neighbor(4, 19), new dijkstra_1.Neighbor(7, 11)],
    [new dijkstra_1.Neighbor(2, 21), new dijkstra_1.Neighbor(3, 12), new dijkstra_1.Neighbor(8, 11)],
    [new dijkstra_1.Neighbor(3, 12), new dijkstra_1.Neighbor(5, 11), new dijkstra_1.Neighbor(8, 9)],
    [new dijkstra_1.Neighbor(3, 16), new dijkstra_1.Neighbor(6, 11), new dijkstra_1.Neighbor(7, 9)],
];
const { cost, prev } = prim(weightedGraphAsAdjacencyList);
// console.log(); // uncomment if you uncomment the console.log(currNodeNumber); in the dijkstra function
console.log("cost:");
console.log(cost); // should be [0, 8, 12, 14, 9, 8, 11, 11, 9]
console.log();
console.log("prev:");
console.log(prev); // should be [null, 0, 0, 2, 1, 3, 8, 5, 7]
