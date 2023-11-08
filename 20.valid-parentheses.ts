/*
 * @lc app=leetcode id=20 lang=typescript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
function isValid(s: string): boolean {
    const strs = s.split("");
    const store: string[] = [];
    for (let i = 0; i < strs.length; i++) {
        if (["(", "[", "{"].includes(strs[i])) {
            store.push(strs[i]);
        } else {
            if (store.length === 0) return false;
            const str = store.pop();
            if (!(str === "{" && strs[i] === "}" || str === "[" && strs[i] === "]" || str === "(" && strs[i] === ")")) return false;
        }
    }

    return store.length === 0
};
// @lc code=end

console.log(isValid("{}[]()"));
console.log(isValid("{[]()}"));
console.log(isValid("{[]()}}}}"));
