/*
 * @lc app=leetcode id=155 lang=typescript
 *
 * [155] Min Stack
 */

// @lc code=start
class MinStack {
    _stack: number[][];

    _min: number | undefined;

    constructor() {
        this._stack = [];        
    }

    push(val: number): void {
        if (this._min == null) this._min = val;
        if (this._min > val) this._min = val;

        this._stack.push([val, this._min]);
    }

    pop(): void {
        if (this._stack == null || this._stack.length < 1) return;

        this._stack.pop();

        if (this._stack.length > 0) {
            this._min = this._stack[this._stack.length - 1][1];
        } else if (this._stack.length === 0) {
            this._min = undefined;
        }
        console.log(`this._stack=${JSON.stringify(this._stack)}`);
    }

    top(): number {
        // if (this._stack == null) return null;
        return this._stack[this._stack.length - 1][0];
    }

    getMin(): number {
        return this._stack[this._stack.length - 1][1];
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end

var obj = new MinStack()
console.log(`obj.push(2147483646)=${obj.push(2147483646)}`);
console.log(`obj.push(2147483646)=${obj.push(2147483646)}`);
console.log(`obj.push(2147483647)=${obj.push(2147483647)}`);
console.log(`obj.top()=${obj.top()}`);
console.log(`obj.pop()=${obj.pop()}`);
console.log(`obj.getMin()=${obj.getMin()}`);
console.log(`obj.pop()=${obj.pop()}`);
console.log(`obj.getMin()=${obj.getMin()}`);
console.log(`obj.pop()=${obj.pop()}`);
console.log(`obj.push(2147483647)=${obj.push(2147483647)}`);
console.log(`obj.top()=${obj.top()}`);
console.log(`obj.getMin()=${obj.getMin()}`);
console.log(`obj.push(-2147483648)=${obj.push(-2147483648)}`);
console.log(`obj.top()=${obj.top()}`);
console.log(`obj.getMin()=${obj.getMin()}`);
console.log(`obj.pop()=${obj.pop()}`);
console.log(`obj.getMin()=${obj.getMin()}`);
