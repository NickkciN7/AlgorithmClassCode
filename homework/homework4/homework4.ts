import { TreeNode } from "../../utils";

// Autocomplete
// We want to create an autocomplete program, where we can provide a string prefix, and output a list of possible words that start with
// prefix. We do this by designing a Tree where each value is a Character, and traversing through the Tree spells out words by collecting
// each character and forming strings as you traverse depth-first. Here is an example of one such tree:

// example of autocomplete tree

// This tree spells out "ace", "acne", "and", "andrew", "beam", "beef", "bees", "cat", "cow", and "cut".
// Notice that the value in the root of the tree should be ignored when making words.
// Notice that an extra node with a "$" character denotes when a word has ended.
// (The Tree we define here is a very basic version of a Trie, but the same basic idea we see here powers your phone's keyboard autocomplete!)

// We'll build out our algorithm by working out 3 parts:

// findNode, which takes in a TreeNode node, the String prefix, and an int index into prefix, and outputs the node we need to be at in order
// start collecting elements. collectWords, which takes in a TreeNode node, the String prefix, and a list of Strings results, and updates the
// list with valid words. candidates, which takes in a TreeNode root and a string prefix, and returns the list of all possible words that can
// be made starting with the letters in prefix.

const autocompleteTree = new TreeNode(
  "*",
  Array(
    new TreeNode(
      "a",
      Array(
        new TreeNode(
          "c",
          Array(
            new TreeNode("e", Array(new TreeNode("$"))),
            new TreeNode(
              "n",
              Array(new TreeNode("e", Array(new TreeNode("$"))))
            )
          )
        ),
        new TreeNode(
          "n",
          Array(
            new TreeNode(
              "d",
              Array(
                new TreeNode("$"),
                new TreeNode(
                  "r",
                  Array(
                    new TreeNode(
                      "e",
                      Array(new TreeNode("w", Array(new TreeNode("$"))))
                    )
                  )
                )
              )
            )
          )
        )
      )
    ),
    new TreeNode(
      "b",
      Array(
        new TreeNode(
          "e",
          Array(
            new TreeNode(
              "a",
              Array(new TreeNode("m", Array(new TreeNode("$"))))
            ),
            new TreeNode(
              "e",
              Array(
                new TreeNode("f", Array(new TreeNode("$"))),
                new TreeNode("s", Array(new TreeNode("$")))
              )
            )
          )
        )
      )
    ),
    new TreeNode(
      "c",
      Array(
        new TreeNode("a", Array(new TreeNode("t", Array(new TreeNode("$"))))),
        new TreeNode("o", Array(new TreeNode("w", Array(new TreeNode("$"))))),
        new TreeNode("u", Array(new TreeNode("t", Array(new TreeNode("$")))))
      )
    )
  )
);

// Q1. findNode (3 points)
// Our first method, findNode, traverses the Tree based on the characters in prefix and outputs the TreeNode that we end at. If we cannot
// find a valid node, we return null. The index variable helps us remmeber which character we're at in prefix.

// For example, if our prefix was "acn", we should output the node with 'n' in it after traversing TreeNode('a') and TreeNode('c'):

// TreeNode<Character> endNode = findNode(example, "acn", 0);
// System.out.println(endNode.getValue()) // should output 'n'
// System.out.println(endNode.getChildren().get(0).getValue()) // should output 'e'

// endNode = findNode(example, "notInTree", 0);
// System.out.println(endNode) // should output null

function findNode(tree: TreeNode<string>, prefix: string, index: number) {
  const children = tree.children;
  if (prefix === "") {
    return tree;
  }

  for (let child of children) {
    if (child.value === prefix.charAt(index)) {
      if (index === prefix.length - 1) {
        return child;
      }
      return findNode(child, prefix, index + 1);
    }
  }
  return null;
}

console.log(findNode(autocompleteTree, "acn", 0)?.value);

console.log();
console.log("-----------");
console.log();
// Q2. collectWords (3 points)
// Our next method is here to actually collect all the words from a given TreeNode. It also ensures that each word is prepended with prefix.

// List<String> exampleList = new ArrayList<>();
// collectWords(example.getChildren().get(1), "", exampleList);
// System.out.println(exampleList); // should output ["eam", "eef", "ees"]

// exampleList.clear();
// collectWords(example.getChildren().get(1), "b", exampleList);
// System.out.println(exampleList); // should output ["beam", "beef", "bees"]

// exampleList.clear();
// collectWords(example.getChildren().get(1), "mm", exampleList);
// System.out.println(exampleList); // should output ["mmeam", "mmeef", "mmees"]

function collectWords(tree: TreeNode<string>, prefix: string, list: string[]) {
  collectWordsHelper(tree, prefix, list, "");
  // collectWordsHelperOptimized(tree, prefix, list, []);
}

function collectWordsHelper(
  tree: TreeNode<string>,
  prefix: string,
  list: string[],
  word: string
) {
  if (tree.value === "$") {
    list.push(prefix + word.slice(1));
    return;
  }

  const newWord = word + tree.value;

  const children = tree.children;
  for (const child of children) {
    collectWordsHelper(child, prefix, list, newWord);
  }
}

let list: string[] = [];

collectWords(autocompleteTree.children[1], "", list);
console.log(list);
console.log();
list = [];

collectWords(autocompleteTree.children[1], "b", list);
console.log(list);
console.log();
list = [];

collectWords(autocompleteTree.children[1], "mm", list);
console.log(list);
console.log();
list = [];

console.log();
console.log("-----------");
console.log();
// Q3. candidates (2 points)
// This is the method that uses the methods from Q1 and Q2 together to return the actual answer. Examples:

// TreeNode example = new TreeNode('*', ...);

// System.out.println(candidates(example, "c")); // Outputs ["cat", "cow", "cut"]
// System.out.println(candidates(example, "ca")); // Outputs ["cat"]
// System.out.println(candidates(example, "an")); // Outputs ["and", "andrew"]

// // Outputs ["ace", "acne", "and", "andrew", "beam", "beef", "bees", "cat", "cow", "cut"]
// System.out.println(candidates(example, ""));

// System.out.println(candidates(example, "deer")); // Outputs []
// System.out.println(candidates(example, "bean")); // Outputs []

function candidates(tree: TreeNode<string>, prefix: string) {
  const startingNode = findNode(tree, prefix, 0);

  if (startingNode === null) {
    return [];
  }

  const list: string[] = [];
  collectWords(startingNode, prefix, list);
  return list;
}

console.log(candidates(autocompleteTree, "c")); // Outputs ["cat", "cow", "cut"]
console.log(candidates(autocompleteTree, "ca")); // Outputs ["cat"]
console.log(candidates(autocompleteTree, "an")); // Outputs ["and", "andrew"]

// Outputs ["ace", "acne", "and", "andrew", "beam", "beef", "bees", "cat", "cow", "cut"]
console.log(candidates(autocompleteTree, ""));

console.log(candidates(autocompleteTree, "deer")); // Outputs []
console.log(candidates(autocompleteTree, "bean")); // Outputs []

// Q4. Runtime (2 points)
// What's the worst-case runtime of candidates? Explain your answer within runtime.txt.

// Hint #1: which of the examples in Q3 took the most number of steps?
// Hint #2: the runtime of adding Strings to Characters is O(n) in Java, where n is the length of the String.
// Java strings are immutable, so you have to create a brand new String each time you concat a String with
// Character. This means you must copy over all n letters within the String, hence O(n).

/**
 * Answer
 * I think runtime is O(N^2) worst case. Find node is O(N) worst case. collectWords when building string does 1, then 2, then 3... to N on final call
 * because building a string takes N steps. and 1+2...+N is the sum formula which is O(N^2)
 */

// Q5. Optimization (Optional)
// This question is optional and is worth extra credit. Can you do better than your answer in Q4? Ensure that candidates method takes
// the least amount of steps possible by creating an Autocomplete2.java which re-implements all the methods to be have an overall
// optimal runtime. Be sure to provide the new runtime in comments and justify your answer. If your answers to Q1-3 are already optimal,
//  then simply copy your original implementation over. Hint: you want to use StringBuilder here.
function collectWordsHelperOptimized(
  tree: TreeNode<string>,
  prefix: string,
  list: string[],
  word: string[]
) {
  if (tree.value === "$") {
    list.push(prefix + word.slice(1).join(""));
    return;
  }

  word.push(tree.value);

  const children = tree.children;
  for (let i = 0; i < children.length; i++) {
    collectWordsHelperOptimized(children[i], prefix, list, word);
    // If all children are done, we no longer care about the parent, as all strings containing parent are already in list.
    if (i === children.length - 1) {
      word.pop();
    }
  }
}
