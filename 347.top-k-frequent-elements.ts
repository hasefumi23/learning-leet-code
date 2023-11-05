/*
 * @lc app=leetcode id=347 lang=typescript
 *
 * [347] Top K Frequent Elements
 */

// @lc code=start
function topKFrequent(nums: number[], k: number): number[] {
    const map = {};
    nums.forEach(num => {
      if (map[num] == null) {
          map[num] = 1;
      } else {
          map[num]++
      }
    });
    const keys = Object.keys(map).map(e => parseInt(e));
    keys.sort((a, b) => map[b] - map[a]);

    const ans: number[] = [];
    for (let i = 0; i < k; i++) {
        ans.push(keys[i]);
    }

    return ans;
};
// @lc code=end

/**
{
  1: 1,
  2: 1,
}
 */

// console.log(topKFrequent([1, 2], 2));
