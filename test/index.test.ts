import {IterableWeakSet} from '../src/index';
import { expect } from 'chai';
// if you used the '@types/mocha' method to install mocha type definitions, uncomment the following line
// import 'mocha';

describe('test api', () => {
  it('add & size', () => {
    const set = new IterableWeakSet()
    const o = {a:1}
    const o2 = o;
    set.add(o);
    set.add(o2)
    expect(set.size).to.equal(1);
  });
  it('foreach', () => {
    const set = new IterableWeakSet()
    const o1 = {a:1}
    set.add(o1);
    const o2 = {a:2}
    set.add(o2);
    const t: any[] = [];
    set.forEach((el: any) => {
      t.push(el)
    });
    expect(t[0].a).to.equal(1);
    expect(t[1].a).to.equal(2);

  });

  it('for of', () => {
    const set = new IterableWeakSet()
    const o1 = {a:1}
    set.add(o1);
    const o2 = {a:2}
    set.add(o2);
    const t: any[] = [];
    for (const el of set) {
      t.push(el)
    }
    expect(t[0].a).to.equal(1);
    expect(t[1].a).to.equal(2);
  });

  it('delete', () => {
    const set = new IterableWeakSet()
    const o1 = {a:1}
    const ref1 = set.add(o1);
    const o2 = {a:2}
    const ref2 = set.add(o2);
    expect(set.size).to.equal(2);
    set.delete(o1) // del by value
    expect(set.size).to.equal(1);
    set.delete(ref2) // del by value ref
    expect(set.size).to.equal(0);
  });

});
