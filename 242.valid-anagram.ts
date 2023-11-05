/*
 * @lc app=leetcode id=242 lang=typescript
 *
 * [242] Valid Anagram
 */

// @lc code=start
function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) {
        return false;
    }

    const mapForS = countLetter(s);
    const mapForT = countLetter(t);
    const keys = Object.keys(mapForS);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      if (mapForS[key] !== mapForT[key]) return false;
    }

    return true;
};

function countLetter(str: string): object {
    const map = {}
    for (let i = 0; i < str.length; i++) {
        if (map[str[i]] == null) {
          map[str[i]] = 1;
        } else {
          map[str[i]] = map[str[i]] + 1;
        }
    }
    return map;
}

// @lc code=end
