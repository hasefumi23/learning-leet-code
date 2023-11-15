/*
 * @lc app=leetcode id=74 lang=typescript
 *
 * [74] Search a 2D Matrix
 */

// @lc code=start
function searchMatrix(matrix: number[][], target: number): boolean {
  const row = verticalBinarySearch(matrix, target);
  console.log(`row=${row}`);
  const rowNums = matrix[row];
  let l = 0;
  let r = rowNums.length - 1;
  let idx = 0;
  while (l <= r) {
    idx = Math.trunc((l + r) / 2);
    console.log(`l=${l}, r=${r}, idx=${idx}, rowNums[${idx}]=${rowNums[idx]}`);
    
    if (rowNums[idx] < target) {
      l = idx + 1;
    } else if (rowNums[idx] > target) {
      r = idx - 1;
    } else {
      return true;
    }
  }

  return false;
};

function verticalBinarySearch(matrix: number[][], target: number): number {
  let l = 0;
  let r = matrix.length - 1;
  let idx = 0;
  while (l <= r) {
    idx = Math.trunc((r + l) / 2);
    console.log(`l=${l}, r=${r}, idx=${idx}, matrix[${idx}][0]=${matrix[idx][0]}`);
    if (matrix[idx][0] < target) {
      l = idx + 1;
    } else if (matrix[idx][0] > target) {
      r = idx - 1;
    } else {
      return idx;
    }
  }
  
  // 特定したidxの周辺を探る
  const matCol = matrix[0].length - 1;
  if (matrix[idx][0] <= target && target <= matrix[idx][matCol]) {
    return idx;
  } else if (idx - 1 >= 0 && matrix[idx - 1][0] <= target && target <= matrix[idx - 1][matCol]) {
    return idx - 1;
  } else if (idx + 1 < matrix.length - 1 && matrix[idx + 1][0] <= target && target <= matrix[idx + 1][matCol]) {
    return idx + 1;
  }

  return idx;
}
// @lc code=end

console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3));

console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,50]], 11));

console.log(searchMatrix([[-8,-7,-5,-3,-3,-1,1],[2,2,2,3,3,5,7],[8,9,11,11,13,15,17],[18,18,18,20,20,20,21],[23,24,26,26,26,27,27],[28,29,29,30,32,32,34]], -5));
