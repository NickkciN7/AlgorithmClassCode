export class TreeNode<T> {
  #value: T; // # is js private which is absolutely private. ts' private value is only private before compilation
  #children: TreeNode<T>[];

  constructor(value: T, children?: TreeNode<T>[]) {
    this.#value = value;
    this.#children = children ?? [];
  }

  get value() {
    return this.#value;
  }

  get children() {
    return this.#children;
  }

  isLeaf(): boolean {
    return this.#children.length === 0;
  }
}
