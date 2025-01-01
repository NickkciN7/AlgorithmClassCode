"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Queue = void 0;
class ListNode {
    constructor(value, next) {
        this.value = value;
        this.next = next !== null && next !== void 0 ? next : null;
    }
}
class Queue {
    constructor(list) {
        this.head = null;
        this.tail = null;
        this.size = 0;
        this.head = list !== null && list !== void 0 ? list : null;
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
    remove() {
        var _a;
        const node = this.head;
        if (node === null) {
            return null;
        }
        if ((_a = this.head) === null || _a === void 0 ? void 0 : _a.next) {
            this.head = this.head.next;
        }
        else {
            this.head = null;
        }
        this.size--;
        return node;
    }
    add(item) {
        const node = new ListNode(item);
        if (this.isEmpty()) {
            //   console.log("if");
            this.head = this.tail = node;
            //   console.log("this.list");
            //   console.log((this.list.value as any).value);
            //   console.log("this.last");
            //   console.log((this.last.value as any).value);
            //   console.log();
        }
        else {
            //   console.log("else");
            this.tail.next = node;
            this.tail = this.tail.next;
            //   console.log("this.list");
            //   console.log((this.list.value as any).value);
            //   console.log("this.last");
            //   console.log((this.last.value as any).value);
            //   console.log();
        }
        this.size++;
    }
    peek() {
        var _a;
        return (_a = this.head) === null || _a === void 0 ? void 0 : _a.value;
    }
    isEmpty() {
        return this.size === 0;
    }
}
class Queue2 {
    constructor() {
        this.items = [];
    }
    add(item) {
        this.items.push(item);
    }
    remove() {
        return this.items.shift(); // apparently can be O(N), but mine is O(1) since I use linked lists
    }
    peek() {
        return this.items[0];
    }
    isEmpty() {
        return this.items.length === 0;
    }
    size() {
        return this.items.length;
    }
}
exports.Queue = Queue2;
