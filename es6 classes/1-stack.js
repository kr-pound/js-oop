const _items = new WeakMap();

class Stack {
    constructor() {
        _items.set(this, []);
    }

    peek() {
        let items = _items.get(this);
        if (items.length === 0)
            throw new Error('Stack is empty');
        return items[items.length - 1];
    }

    push(obj) {
        _items.get(this).push(obj);
    }
    pop() {
        let items = _items.get(this);
        if (items.length === 0)
            throw new Error('Stack is empty');
        return items.pop();
    }

    get count() {
        return _items.get(this).length;
    }

}

const s = new Stack();

console.log(s);
console.log(s.count);
s.push('a');
s.push('b');
console.log(s.count);
console.log(s.peek());

s.pop();
s.pop();
//s.pop();

s.peek();