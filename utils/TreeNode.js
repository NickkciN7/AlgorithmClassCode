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
var _TreeNode_value, _TreeNode_children;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TreeNode = void 0;
class TreeNode {
    constructor(value, children) {
        _TreeNode_value.set(this, void 0); // # is js private which is absolutely private. ts' private value is only private before compilation
        _TreeNode_children.set(this, void 0);
        __classPrivateFieldSet(this, _TreeNode_value, value, "f");
        __classPrivateFieldSet(this, _TreeNode_children, children !== null && children !== void 0 ? children : [], "f");
    }
    get value() {
        return __classPrivateFieldGet(this, _TreeNode_value, "f");
    }
    get children() {
        return __classPrivateFieldGet(this, _TreeNode_children, "f");
    }
    isLeaf() {
        return __classPrivateFieldGet(this, _TreeNode_children, "f").length === 0;
    }
}
exports.TreeNode = TreeNode;
_TreeNode_value = new WeakMap(), _TreeNode_children = new WeakMap();
