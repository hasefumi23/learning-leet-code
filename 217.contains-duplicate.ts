/*
 * @lc app=leetcode id=217 lang=typescript
 *
 * [217] Contains Duplicate
 */

// @lc code=start
function containsDuplicate(nums: number[]): boolean {
    const map = {};
    for (let i = 0; i < nums.length; i++) {
        if (map[nums[i]]) {
            return true;
        } else {
            map[nums[i]] = true;
        }
    };

    return false;
};
// @lc code=end
