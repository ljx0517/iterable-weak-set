# iterable WeakSet implement

##api
```
const set = new IterableWeakSet();
const o1 = {a:1};
const ref1 = set.add(o1); // add
const o2 = o1;
set.add(o2);
set.size == 1 // size
//for of ,only yield valid item, not prevent gc
for (const [] of set) {} // loop
// forEach ,only pass valid item, not prevent gc
set.forEach((value, ref) => {}) // loop

set.delete(ref1) // delete by ref
set.delete(o1) // delete by value
```
