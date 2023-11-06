/*
 * @lc app=leetcode id=128 lang=typescript
 *
 * [128] Longest Consecutive Sequence
 */

// @lc code=start
function longestConsecutive(nums: number[]): number {
    const numSet = new Set(nums);
    const startNums = nums.filter((num) => {
        if (!numSet.has(num - 1)) return true;
    });

    let longest = 0;
    for (let i = 0; i < startNums.length; i++) {
        let tempLongest = 0;
        let tempNum = startNums[i];
        while (numSet.has(tempNum)) {
            tempNum++;
            tempLongest++;
        }
        console.log(`longest=${longest},tempLongest=${tempLongest}`);
        
        if (longest < tempLongest) {
            longest = tempLongest;
        }
    }

    return longest;
};
// @lc code=end

/**
実装時のデバッグ用のコード
let ans;
ans = longestConsecutive([100,4,200,1,3,2]);
console.log(`ans=${ans}`);

ans = longestConsecutive([0,3,7,2,5,8,4,6,0,1]);
console.log(`ans=${ans}`);
 */
