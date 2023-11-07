/*
 * @lc app=leetcode id=15 lang=typescript
 *
 * [15] 3Sum
 */

// @lc code=start
function threeSum(nums: number[]): number[][] {
    const sortedNums = nums.sort((a, b) => a - b);
    const ans: number[][] = [];
    for (let i = 0; i < sortedNums.length - 2; i++) {
        if (i > 0 && sortedNums[i] === sortedNums[i - 1]) continue;

        let l = i + 1;
        let r = sortedNums.length - 1;
        while (l < r) {
            let threeSum = sortedNums[i] + sortedNums[l] + sortedNums[r];
            if (threeSum > 0) {
                r -= 1;
            } else if (threeSum < 0) {
                l += 1;
            } else {
                ans.push([sortedNums[i], sortedNums[l], sortedNums[r]]);
                l += 1
                while (sortedNums[l] === sortedNums[l - 1] && 1 < r) {
                    l += 1;
                }
            }
        }
    }

    return ans;
};

function isMeetCond(num1: number, num2: number, num3: number): boolean {
    if (num1 + num2 + num3 === 0) return true;

    return false;
}

function isDup(numsAry: number[][], nums: number[]): boolean {
    for (let i = 0; i < numsAry.length; i++) {
        const ary = numsAry[i];
        if (ary[0] === nums[0] && ary[1] === nums[1] && ary[2] === nums[2]) return true;
    }
    return false;
}
// @lc code=end

// console.log(threeSum([-1,0,1,2,-1,-4]));
// console.log(threeSum([3,0,-2,-1,1,2]));
console.log(threeSum([1,-1,-1,0]));

// /home/fumi/.ghq/github.com/hasefumi23/leet-code/15.3-sum.ts
