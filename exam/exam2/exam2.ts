// 1.5
// basically bfs on tree except exlude first of children when adding to fringe queue
// A B I H G WRONG
// A B G H I because we are doing for loop in reverse...

// 2

// 2.1 preorder dfs meaning current, left, right
// 8, 3, 1, 12, 15, 13

// 2.2 post order dfs meaning left, right, current
// 1, 3, 13, 15, 12, 8

// 2.3 in order dfs meaning left, current, right
// 1, 3, 8, 12, 13, 15

// 4

// 4.3
// B,C       For B remember the question asks "Select each tree for which the code will produce the correct answer... code output... false if it is not height-balanced",
//           despite the purposefully buggy code. And B passed to the alg gives false which is the correct answer

// 5

// 5.4
// A,D,G     G is a source even though it has no outgoing edges, because it has not incoming edges

// 7

// 7.1
