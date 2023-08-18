// https://leetcode.com/problems/to-be-or-not-to-be

/**
 * @param {string} val
 * @return {Object}
 */
var expect = function (val) {
  return {
    toBe(v) {
      if (val === v) {
        return true
      }
      throw new Error('Not Equal')
    },
    notToBe(v) {
      if (val !== v) {
        return true
      }
      throw new Error('Equal')
    },
  }
}

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
