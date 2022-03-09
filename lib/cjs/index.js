"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IterableWeakSet = void 0;
class IterableWeakSet {
    constructor() {
        this.__set = new Set();
    }
    get size() {
        return this.__set.size;
    }
    deleteByValue(el) {
        for (const ref of this.__set.values()) {
            const value = ref.deref();
            if (value == el) {
                this.__set.delete(ref);
            }
        }
    }
    deleteByRef(ref) {
        this.__set.delete(ref);
    }
    add(el) {
        for (const ref of this.__set.values()) {
            const value = ref.deref();
            if (value == el) {
                return ref;
            }
        }
        const ref = new WeakRef(el);
        this.__set.add(ref);
        return ref;
    }
    forEach(fn) {
        this.__set.forEach((ref) => {
            const value = ref.deref();
            if (value) {
                fn(value, ref);
            }
            else {
                this.__set.delete(ref);
            }
        });
    }
    *[Symbol.iterator]() {
        for (const ref of this.__set.values()) {
            const value = ref.deref();
            if (value)
                yield value;
        }
    }
}
exports.IterableWeakSet = IterableWeakSet;
