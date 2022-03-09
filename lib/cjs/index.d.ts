export declare class IterableWeakSet<T> {
    private __set;
    get size(): number;
    constructor();
    delete(el: any): boolean;
    has(el: any): boolean;
    add(el: any): any;
    forEach(fn: CallableFunction): void;
    [Symbol.iterator](): Generator<any, void, unknown>;
}
