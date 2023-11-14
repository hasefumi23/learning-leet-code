/*
 * @lc app=leetcode id=704 lang=typescript
 *
 * [704] Binary Search
 */

// @lc code=start
function search(nums: number[], target: number): number {
    let l = 0;
    let r = nums.length - 1;
    while (l <= r) {
      const idx = Math.trunc((l + r) / 2);

      const num = nums[idx];
      if (num > target) {
        r = idx - 1;
      } else if (num < target) {
        l = idx + 1;
      } else {
        return idx;
      }
    }

    return -1;
};
// @lc code=end

console.log(search([-1,0,3,5,9,12], 9));
console.log(search([-1,0,3,5,9,12], 8));
console.log(search([-1,0,3,5,9,12], 13));
