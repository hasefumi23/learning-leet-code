/*
 * @lc app=leetcode id=238 lang=typescript
 *
 * [238] Product of Array Except Self
 */

// @lc code=start
function productExceptSelf(nums: number[]): number[] {
    // 元のnumsをforで回す
    // { number: count}のようなmapを作る
    let hasZero = false;
    const map = {};
    nums.forEach((num) => {
        if (num === 0) hasZero = true;

        if (map[num] == null) {
            map[num] = 1;
        } else {
            map[num]++;
        }
    });
    // console.log(map);
    
    // 元のnumsをforで回す
    // mapをコピーする。その際に、nums[i]に該当する数字のvalueを-1する
    let ans: number[] = [];
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        // 0が存在して、0じゃない場合、0を追加する
        if (hasZero && num !== 0) {
            ans.push(0);
            continue;
        }

        const copiedMap = { ...map };
        copiedMap[num]--;
        // console.log(map);
        // console.log(copiedMap);
        // mapに対して、key * valueを計算していく
        const keys = Object.keys(copiedMap);
        let temp = 1;
        for (let j = 0; j < keys.length; j++) {
            const key = keys[j];
            const val = copiedMap[key];
            // console.log(`key: ${key}, val: ${val}`);
            // console.log(`key: ${typeof key}, val: ${typeof val}`);
            
            temp = (parseInt(key) ** val) * temp;
        }
        ans.push(temp);
    };

    return ans;
};
// @lc code=end
/**
function productExceptSelf2(nums: number[]) {
  const n = nums.length;
  let prefixProduct = 1;
  let postfixProduct = 1;
  const result = new Array(n).fill(0);
  console.log("prefixProduct");
  
  for (let i = 0; i < n; i++) {
    result[i] = prefixProduct;
    prefixProduct *= nums[i];
    console.log(`${result}, nums[i]=${nums[i]}, prefixProduct=${prefixProduct}`);
  }
  console.log("postfixProduct");
  for (let i = n - 1; i >= 0; i--) {
    result[i] *= postfixProduct;
    postfixProduct *= nums[i];
    console.log(result);
  }
  return result;
}
 */
