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
var _MetalBar_count, _MetalBar_value;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetalBar = void 0;
exports.printMetalBars = printMetalBars;
class MetalBar {
    constructor(count, value) {
        _MetalBar_count.set(this, void 0);
        _MetalBar_value.set(this, void 0);
        __classPrivateFieldSet(this, _MetalBar_count, count, "f");
        __classPrivateFieldSet(this, _MetalBar_value, value, "f");
    }
    get count() {
        return __classPrivateFieldGet(this, _MetalBar_count, "f");
    }
    get value() {
        return __classPrivateFieldGet(this, _MetalBar_value, "f");
    }
    //   Don't really need this, can just use .sort as seen in homework5.ts
    //   // Compare based on value
    //   public int compareTo(MetalBar otherBar) {
    //     return Integer.compare(otherBar.value, value);
    //   }
    toString() {
        return `MetalBar(count: ${__classPrivateFieldGet(this, _MetalBar_count, "f")}, value: ${__classPrivateFieldGet(this, _MetalBar_value, "f")})`;
    }
}
exports.MetalBar = MetalBar;
_MetalBar_count = new WeakMap(), _MetalBar_value = new WeakMap();
function printMetalBars(metalBars) {
    metalBars.forEach((metalBar) => console.log(metalBar.toString()));
    console.log();
}
