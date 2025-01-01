"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _BinaryTreeNode_value, _BinaryTreeNode_left, _BinaryTreeNode_right;
Object.defineProperty(exports, "__esModule", { value: true });
exports.BinaryTreeNode = void 0;
class BinaryTreeNode {
    constructor(value, left, right) {
        _BinaryTreeNode_value.set(this, void 0); // # is js private which is absolutely private. ts' private value is only private before compilation
        _BinaryTreeNode_left.set(this, void 0);
        _BinaryTreeNode_right.set(this, void 0);
        __classPrivateFieldSet(this, _BinaryTreeNode_value, value, "f");
        __classPrivateFieldSet(this, _BinaryTreeNode_left, left !== null && left !== void 0 ? left : null, "f");
        __classPrivateFieldSet(this, _BinaryTreeNode_right, right !== null && right !== void 0 ? right : null, "f");
    }
    get value() {
        return __classPrivateFieldGet(this, _BinaryTreeNode_value, "f");
    }
    get left() {
        return __classPrivateFieldGet(this, _BinaryTreeNode_left, "f");
    }
    get right() {
        return __classPrivateFieldGet(this, _BinaryTreeNode_right, "f");
    }
    isLeaf() {
        return __classPrivateFieldGet(this, _BinaryTreeNode_left, "f") === __classPrivateFieldGet(this, _BinaryTreeNode_right, "f") && __classPrivateFieldGet(this, _BinaryTreeNode_left, "f") === null;
    }
}
exports.BinaryTreeNode = BinaryTreeNode;
_BinaryTreeNode_value = new WeakMap(), _BinaryTreeNode_left = new WeakMap(), _BinaryTreeNode_right = new WeakMap();
