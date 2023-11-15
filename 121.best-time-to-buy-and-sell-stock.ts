/*
 * @lc app=leetcode id=121 lang=typescript
 *
 * [121] Best Time to Buy and Sell Stock
 */

// @lc code=start
function maxProfit(prices: number[]): number {
  let min = -1;    
  let prof = 0;
  for (let i = 0; i < prices.length; i++) {
    if (i === 0) {
      min = prices[i];
      continue;
    }
    const temp = prices[i] - min;
    prof = Math.max(prof, temp);
    min = Math.min(min, prices[i]);
  }

  return prof < 0 ? 0 : prof;
};
// @lc code=end

console.log(maxProfit([7,1,5,3,6,4]));
console.log(maxProfit([7,6,4,3,1]));
