// https://leetcode.com/problems/filter-elements-from-array

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
  let count = 0
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      arr[count] = arr[i]
      count++
    }
  }
  arr.length = count
  return arr
}
