export class IterableWeakSet {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxPQUFPLGVBQWU7SUFLMUI7UUFDRSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUxELElBQUksSUFBSTtRQUNOLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7SUFDekIsQ0FBQztJQUlELE1BQU0sQ0FBQyxFQUFPO1FBQ1osSUFBSSxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksS0FBSyxTQUFTLEVBQUU7WUFDckMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQTtTQUM3QjtRQUNELEtBQUssTUFBTSxHQUFHLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsRUFBRTtZQUNyQyxNQUFNLEtBQUssR0FBRyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUE7WUFDekIsSUFBSSxLQUFLLElBQUksRUFBRSxFQUFFO2dCQUNmLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUE7YUFDOUI7U0FDRjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUNELEdBQUcsQ0FBQyxFQUFPO1FBQ1QsSUFBSSxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksS0FBSyxTQUFTLEVBQUU7WUFDckMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQTtTQUMxQjtRQUNELEtBQUssTUFBTSxHQUFHLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsRUFBRTtZQUNyQyxNQUFNLEtBQUssR0FBRyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUE7WUFDekIsSUFBSSxLQUFLLElBQUksRUFBRSxFQUFFO2dCQUNmLE9BQU8sSUFBSSxDQUFDO2FBQ2I7U0FDRjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBRWYsQ0FBQztJQUNELEdBQUcsQ0FBQyxFQUFPO1FBQ1QsS0FBSyxNQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxFQUFFO1lBQ3JDLE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtZQUN6QixJQUFJLEtBQUssSUFBSSxFQUFFLEVBQUU7Z0JBQ2YsT0FBTyxHQUFHLENBQUE7YUFDWDtTQUNGO1FBQ0QsTUFBTSxHQUFHLEdBQUcsSUFBSSxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDbkIsT0FBTyxHQUFHLENBQUE7SUFDWixDQUFDO0lBQ0QsT0FBTyxDQUFDLEVBQW9CO1FBQzFCLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7WUFDekIsTUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFBO1lBQ3pCLElBQUksS0FBSyxFQUFFO2dCQUNULEVBQUUsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUE7YUFDZjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQTthQUN2QjtRQUNILENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUNELENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDO1FBQ2hCLEtBQUssTUFBTSxHQUFHLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsRUFBRTtZQUNyQyxNQUFNLEtBQUssR0FBRyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUE7WUFDekIsSUFBSSxLQUFLO2dCQUFFLE1BQU0sS0FBSyxDQUFBO1NBQ3ZCO0lBQ0gsQ0FBQztDQUNGIn0=