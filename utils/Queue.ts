class ListNode<T> {
  value: T;
  next: ListNode<T> | null;

  constructor(value: T, next?: ListNode<T> | null) {
    this.value = value;
    this.next = next ?? null;
  }
}

class Queue<T> {
  head: ListNode<T> | null = null;
  tail: ListNode<T> | null = null;
  size: number = 0;

  constructor(list?: ListNode<T>) {
    this.head = list ?? null;
    let cur = this.head;

    if (cur) {
      this.size++;
      while (cur.next !== null) {
        this.size++;
        cur = cur.next;
      }
    }

    this.tail = cur;
  }

  remove(): ListNode<T> | null {
    const node = this.head;
    if (node === null) {
      return null;
    }

    if (this.head?.next) {
      this.head = this.head.next;
    } else {
      this.head = null;
    }

    this.size--;

    return node;
  }

  add(item: T) {
    const node = new ListNode<T>(item);

    if (this.isEmpty()) {
      //   console.log("if");
      this.head = this.tail = node;
      //   console.log("this.list");
      //   console.log((this.list.value as any).value);
      //   console.log("this.last");
      //   console.log((this.last.value as any).value);
      //   console.log();
    } else {
      //   console.log("else");
      this.tail!.next = node;
      this.tail = this.tail!.next;
      //   console.log("this.list");
      //   console.log((this.list.value as any).value);
      //   console.log("this.last");
      //   console.log((this.last.value as any).value);
      //   console.log();
    }

    this.size++;
  }

  peek(): T | undefined {
    return this.head?.value;
  }

  isEmpty(): boolean {
    return this.size === 0;
  }
}

class Queue2<T> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  remove(): T | undefined {
    return this.items.shift(); // apparently can be O(N), but mine is O(1) since I use linked lists
  }

  peek(): T | undefined {
    return this.items[0];
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  size(): number {
    return this.items.length;
  }
}

export { Queue2 as Queue };
