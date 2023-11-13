/*
 * @lc app=leetcode id=150 lang=typescript
 *
 * [150] Evaluate Reverse Polish Notation
 */

// @lc code=start
function evalRPN(tokens: string[]): number {
  if (tokens.length === 1) return parseInt(tokens[0]);

  const stack: string[] = [];    
  let ans = Infinity;
  while (tokens.length !== 0) {
    const el = tokens.shift() || '';
    const parsed = parseInt(el);
    if (Number.isNaN(parsed)) {
      const r = stack.pop();
      const l = stack.pop();
      const exp = `${l} ${el} ${r}`;
      ans = Math.trunc(eval(exp));
      console.log(`exp=${exp}, ans=${ans}`);
      stack.push(ans.toString());
    } else {
      stack.push(el);
    }
  }

  return ans;
};
// @lc code=end

console.log(evalRPN(["2","1","+","3","*"]));
console.log(evalRPN(["4","13","5","/","+"]));
console.log(evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"]));
