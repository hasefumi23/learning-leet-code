/*
 * @lc app=leetcode id=11 lang=typescript
 *
 * [11] Container With Most Water
 */

// @lc code=start
function maxArea(height: number[]): number {
    height.unshift(0);
    let max = -1;
    // const matrix = Array.from({ length: height.length }, () => Array(height.length).fill(null));
    // for (let i = 0; i < height.length; i++) {
    //     for (let j = i + 1; j < height.length; j++) {
    //         if (i === j) continue;
    //         const tempMax = calcArea(i, j, height);
    //         max = Math.max(max, tempMax);
    //     }
    // }

    let l = 0;
    let r = height.length - 1;
    while (l < r) {
        const tempMax = calcArea(l, r, height);
        max = Math.max(max, tempMax);

        if (height[l] > height[r]) {
          r--;
        } else {
          l++;
        }
    }

    return max;
};

function calcArea(i: number, j: number, height: number[]): number {
  const h = Math.min(height[i], height[j]);
  const w = Math.abs(i - j);
  return h * w;
}
// @lc code=end
