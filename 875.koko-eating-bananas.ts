/*
 * @lc app=leetcode id=875 lang=typescript
 *
 * [875] Koko Eating Bananas
 */

// @lc code=start
function minEatingSpeed(piles: number[], h: number): number {
  let l = 1;
  let r = -1;
  piles.forEach((p) => r = Math.max(r, p));

  let k = -1;
  while (l <= r) {
    const tempK = Math.trunc((l + r) / 2);
    let hour = 0;
    for (let i = 0; i < piles.length; i++) {
      hour += Math.ceil(piles[i] / tempK);
    }

    if (hour <= h) {
      k = Math.min(tempK);
      r = tempK - 1;
    } else {
      l = tempK + 1;
    }
  }

  return k;
};
// @lc code=end

console.log(minEatingSpeed([3,6,7,11], 8));
console.log(minEatingSpeed([30,11,23,4,20], 5));
console.log(minEatingSpeed([30,11,23,4,20], 6));
