export class BinaryTreeNode<T> {
  #value: T; // # is js private which is absolutely private. ts' private value is only private before compilation
  #left: BinaryTreeNode<T> | null;
  #right: BinaryTreeNode<T> | null;

  constructor(
    value: T,
    left?: BinaryTreeNode<T> | null,
    right?: BinaryTreeNode<T> | null
  ) {
    this.#value = value;
    this.#left = left ?? null;
    this.#right = right ?? null;
  }

  get value() {
    return this.#value;
  }

  get left() {
    return this.#left;
  }

  get right() {
    return this.#right;
  }

  isLeaf(): boolean {
    return this.#left === this.#right && this.#left === null;
  }
}
