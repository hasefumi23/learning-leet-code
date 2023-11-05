/*
 * @lc app=leetcode id=49 lang=typescript
 *
 * [49] Group Anagrams
 */

// @lc code=start

type MyType = {
  [key: string]: string[];
};

function groupAnagrams(strs: string[]): string[][] {
    const map: MyType = {};
    for(let i = 0; i < strs.length; i++) {
        const sortedStr = strs[i].split("").sort().join();
        if (map[sortedStr] == null) {
            map[sortedStr] = [strs[i]];
        } else {
            map[sortedStr].push(strs[i]);
        }
    }

    const keys = Object.keys(map);
    const ans: string[][] = [];
    keys.forEach(key => {
        ans.push(map[key]);
    });

    return ans;
};
// @lc code=end
