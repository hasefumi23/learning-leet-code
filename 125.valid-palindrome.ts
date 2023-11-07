/*
 * @lc app=leetcode id=125 lang=typescript
 *
 * [125] Valid Palindrome
 */

// @lc code=start
function isPalindrome(s: string): boolean {
    const str = s.replace(/[\W_]/g, "").toLowerCase();
    const reversed = s.replace(/[\W_]/g, "").toLowerCase().split("").reverse().join("");
    return str === reversed;
};
// @lc code=end
