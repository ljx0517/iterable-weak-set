export class IterableWeakSet<T> {
  private __set: Set<any>;
  get size () {
    return this.__set.size;
  }
  constructor() {
    this.__set = new Set();
  }
  delete(el: any) {
    if (el.constructor.name === 'WeakRef') {
      return this.__set.delete(el)
    }
    for (const ref of this.__set.values()) {
      const value = ref.deref()
      if (value == el) {
        return this.__set.delete(ref)
      }
    }
    return false;
  }
  has(el: any) {
    if (el.constructor.name === 'WeakRef') {
      return this.__set.has(el)
    }
    for (const ref of this.__set.values()) {
      const value = ref.deref()
      if (value == el) {
        return true;
      }
    }
    return false;

  }
  add(el: any) {
    for (const ref of this.__set.values()) {
      const value = ref.deref()
      if (value == el) {
        return ref
      }
    }
    const ref = new WeakRef(el);
    this.__set.add(ref)
    return ref
  }
  forEach(fn: CallableFunction) {
    this.__set.forEach((ref) => {
      const value = ref.deref()
      if (value) {
        fn(value, ref)
      } else {
        this.__set.delete(ref)
      }
    })
  }
  *[Symbol.iterator]() {
    for (const ref of this.__set.values()) {
      const value = ref.deref()
      if (value) yield value
    }
  }
}
