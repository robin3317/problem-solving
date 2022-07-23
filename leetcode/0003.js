// https://leetcode.com/problems/longest-substring-without-repeating-characters/
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const map = new Map();

  let left = 0,
    longestSubstring = 0;

  for (let right = 0; right < s.length; right++) {
    while (map.has(s[right])) {
      map.delete(s[left]);
      left++;
    }

    map.set(s[right], right);

    longestSubstring = Math.max(longestSubstring, right - left + 1);
  }

  return longestSubstring;
};
