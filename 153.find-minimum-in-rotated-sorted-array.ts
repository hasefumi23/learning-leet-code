/*
 * @lc app=leetcode id=153 lang=typescript
 *
 * [153] Find Minimum in Rotated Sorted Array
 */

// @lc code=start
function findMin(nums: number[]): number {
  let l = 0;
  let r = nums.length - 1;
  let res = nums[l];

  while (l <= r) {
    if (nums[l] < nums[r]) {
      res = Math.min(res, nums[l]);
      return res;
    }
    const m = Math.trunc((l + r) / 2);
    res = Math.min(res, nums[m]);
    console.log(`l=${l}, r=${r}, m=${m}, res=${res}`);

    if (nums[m] >= nums[l]) {
      l = m + 1;
    } else {
      r = m - 1;
    }
  }

  return res;
};
// @lc code=end

console.log(findMin([3,4,5,1,2]));
console.log(findMin([4,5,6,7,0,1,2]));
