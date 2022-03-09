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
    delete(el) {
        if (el.constructor.name === 'WeakRef') {
            return this.__set.delete(el);
        }
        for (const ref of this.__set.values()) {
            const value = ref.deref();
            if (value == el) {
                return this.__set.delete(ref);
            }
        }
        return false;
    }
    has(el) {
        if (el.constructor.name === 'WeakRef') {
            return this.__set.has(el);
        }
        for (const ref of this.__set.values()) {
            const value = ref.deref();
            if (value == el) {
                return true;
            }
        }
        return false;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsTUFBYSxlQUFlO0lBSzFCO1FBQ0UsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFMRCxJQUFJLElBQUk7UUFDTixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO0lBQ3pCLENBQUM7SUFJRCxNQUFNLENBQUMsRUFBTztRQUNaLElBQUksRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEtBQUssU0FBUyxFQUFFO1lBQ3JDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUE7U0FDN0I7UUFDRCxLQUFLLE1BQU0sR0FBRyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLEVBQUU7WUFDckMsTUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFBO1lBQ3pCLElBQUksS0FBSyxJQUFJLEVBQUUsRUFBRTtnQkFDZixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFBO2FBQzlCO1NBQ0Y7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFDRCxHQUFHLENBQUMsRUFBTztRQUNULElBQUksRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEtBQUssU0FBUyxFQUFFO1lBQ3JDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUE7U0FDMUI7UUFDRCxLQUFLLE1BQU0sR0FBRyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLEVBQUU7WUFDckMsTUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFBO1lBQ3pCLElBQUksS0FBSyxJQUFJLEVBQUUsRUFBRTtnQkFDZixPQUFPLElBQUksQ0FBQzthQUNiO1NBQ0Y7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUVmLENBQUM7SUFDRCxHQUFHLENBQUMsRUFBTztRQUNULEtBQUssTUFBTSxHQUFHLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsRUFBRTtZQUNyQyxNQUFNLEtBQUssR0FBRyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUE7WUFDekIsSUFBSSxLQUFLLElBQUksRUFBRSxFQUFFO2dCQUNmLE9BQU8sR0FBRyxDQUFBO2FBQ1g7U0FDRjtRQUNELE1BQU0sR0FBRyxHQUFHLElBQUksT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ25CLE9BQU8sR0FBRyxDQUFBO0lBQ1osQ0FBQztJQUNELE9BQU8sQ0FBQyxFQUFvQjtRQUMxQixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBQ3pCLE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtZQUN6QixJQUFJLEtBQUssRUFBRTtnQkFDVCxFQUFFLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFBO2FBQ2Y7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUE7YUFDdkI7UUFDSCxDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFDRCxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUNoQixLQUFLLE1BQU0sR0FBRyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLEVBQUU7WUFDckMsTUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFBO1lBQ3pCLElBQUksS0FBSztnQkFBRSxNQUFNLEtBQUssQ0FBQTtTQUN2QjtJQUNILENBQUM7Q0FDRjtBQTVERCwwQ0E0REMifQ==