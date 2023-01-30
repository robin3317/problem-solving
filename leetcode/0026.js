// https://leetcode.com/problems/remove-duplicates-from-sorted-array/
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let j = 0
  for (let i = 1; i < nums.length; i++) {
    if (nums[j] !== nums[i]) {
      j++
      ;[nums[j], nums[i]] = [nums[i], nums[j]]
    }
  }
  return j + 1
}
