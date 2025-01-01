// algorithm Dijkstra's
// Input:
// Graph G=(V,E), directed or undirected;
// positive edge lengths {l of e : e in E}; vertex s in V

// Output:
// For all vertices u reachable from s, dist(u) is set
// to the distance from s to u.

// for all u in V:
// 	dist(u)= infinity
// 	prev(u) = null
// dist(s)=0

// H = makequeue(V) (using dist-values as keys)
// while H is not empty:
// 	u= deletemin(H)
// 	// edge from node u to node v
// 	for all edges (u,v) in E:
// 		if dist(v)>dist(u)+l(u,v):
// 			dist(v)=dist(u)+l(u,v)
// 			prev(v) = u
// 			decreasekey(H,v)

import Heap, { IsEqual } from "heap-js";

// class HeapChangeablePriority<T> extends Heap<T> {
//   changePriority() {}
// }

/** Identifying number of a node */
export type NodeNumber = number;

export class Neighbor {
  constructor(public nodeNumber: NodeNumber, public weight: number) {}
}

/** Weighted adjacency list */
export type Graph = Neighbor[][];

export type ConnectedNode = { nodeNumber: NodeNumber; distance: number };

const shortestPathGraphNodePriorityComparator = (
  a: ConnectedNode,
  b: ConnectedNode
) => a.distance - b.distance;

/** priority queue using min heap */
const nodesToVisitByDistance = new Heap(
  shortestPathGraphNodePriorityComparator
);

export function changeDistance(
  nodesToVisitByDistance: Heap<ConnectedNode>,
  target: NodeNumber,
  newDistance: number
) {
  nodesToVisitByDistance.remove(
    // distance irrelvant when deleting, just need nodeNumber, but need to adhere to types expected (a ConnectedNode)
    { distance: -1, nodeNumber: target },
    (e, o) => e.nodeNumber === o.nodeNumber
  );

  nodesToVisitByDistance.add({ distance: newDistance, nodeNumber: target });
}

/**
 * @param graph Directed or undirected graph
 * @param source Node to start from
 * @returns An object containg dist and prev. dist is an array showing the shortest distance from source to that node.
 * prev is an array showing what the previous node is along a path from source to that node.
 */
function dijkstra(graph: Graph, source: number) {
  const dist: number[] = Array(graph.length).fill(Number.MAX_VALUE);
  dist[source] = 0;

  const prev: number[] = Array(graph.length).fill(null);

  // comment next 2 lines out if adding all nodes to priority queue at first
  const visited: boolean[] = Array(graph.length).fill(false);
  visited[source] = true;

  /**
   * To be more similar to the pseudocode from lectures, could just add all nodes to nodesToVisitByDistance
   * at once here. This is because we do changeDistance which will change it's position in the priorityQueue,
   * so const currNode = nodesToVisitByDistance.pop() will give nodes in the correct order. To see this demonstrated,
   * uncomment the dist.forEach code below, comment out the if else far below, and uncomment the changeDistance far below,
   * I put comments above those areas below to easily identify them.
   *
   * Though dijksta is similar to graph breadth first search, bfs has to add as they come, because it uses a regular queue
   * which does not readjust ordering like a priortity queue.
   */
  // nodesToVisitByDistance.add({ distance: dist[source], nodeNumber: source }); // adds only source at first

  // Uncomment this if adding all nodes to priority queue at first
  dist.forEach((distance, index) => {
    nodesToVisitByDistance.add({ distance: distance, nodeNumber: index });
  });

  while (!nodesToVisitByDistance.isEmpty()) {
    const currNode = nodesToVisitByDistance.pop() as ConnectedNode;
    const currNodeNumber = currNode.nodeNumber;
    // console.log(currNodeNumber);
    // console.log(nodesToVisitByDistance.length);

    const neighbors = graph[currNodeNumber];

    for (const neighbor of neighbors) {
      const neighborNumber = neighbor.nodeNumber;
      const currDistToNeighbor = dist[neighborNumber];
      const distToNeighborThroughCurrNode =
        dist[currNodeNumber] + neighbor.weight;

      if (currDistToNeighbor > distToNeighborThroughCurrNode) {
        dist[neighborNumber] = distToNeighborThroughCurrNode;
        prev[neighborNumber] = currNodeNumber;

        // Comment this if else if adding all nodes to priority queue at first
        // if (visited[neighborNumber]) {
        //   changeDistance(
        //     nodesToVisitByDistance,
        //     neighborNumber,
        //     distToNeighborThroughCurrNode
        //   );
        // } else {
        //   visited[neighborNumber] = true;
        //   nodesToVisitByDistance.add({
        //     nodeNumber: neighborNumber,
        //     distance: distToNeighborThroughCurrNode,
        //   });
        // }

        // Uncomment this if adding all nodes to priority queue at first
        // Changes distance of neighbor in the priority queue to the distance to the neighbor through the current node
        changeDistance(
          nodesToVisitByDistance,
          neighborNumber,
          distToNeighborThroughCurrNode
        );
      }
    }
  }

  return { dist, prev };
}

/** graph[i] is list of neighbors of i. based on graph in homework 6. Is connected graph */
const weightedGraphAsAdjacencyList: Graph = [
  [new Neighbor(2, 14), new Neighbor(3, 13)],
  [new Neighbor(5, 7), new Neighbor(6, 10)],
  [new Neighbor(0, 14), new Neighbor(5, 12)],
  [new Neighbor(0, 13), new Neighbor(4, 2), new Neighbor(6, 12)],
  [new Neighbor(3, 2)],
  [new Neighbor(1, 7), new Neighbor(2, 12), new Neighbor(6, 5)],
  [new Neighbor(1, 10), new Neighbor(3, 12), new Neighbor(5, 5)],
];

// dist and prev when source is set to 0
const { dist, prev } = dijkstra(weightedGraphAsAdjacencyList, 0);

// console.log(); // uncomment if you uncomment the console.log(currNodeNumber); in the dijkstra function
// console.log("dist:");
// console.log(dist); // should be [0, 33, 14, 13, 15, 26, 25]
// console.log();
// console.log("prev:");
// console.log(prev); // should be [null, 5, 0, 0, 3, 2, 3]
