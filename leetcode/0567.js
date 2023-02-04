// https://leetcode.com/problems/permutation-in-string/description/
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  if (s1.length > s2.length) return false

  const s1Count = new Array(26).fill(0)
  const s2Count = new Array(26).fill(0)
  for (i = 0; i < s1.length; i++) {
    s1Count[s1.charCodeAt(i) - 'a'.charCodeAt(0)] += 1
    s2Count[s2.charCodeAt(i) - 'a'.charCodeAt(0)] += 1
  }

  let matches = 0
  for (let i = 0; i < 26; i++) {
    if (s1Count[i] === s2Count[i]) matches++
  }

  let l = 0
  for (let r = s1.length; r < s2.length; r++) {
    if (matches === 26) return true

    let index = s2.charCodeAt(r) - 'a'.charCodeAt(0)
    s2Count[index]++
    if (s1Count[index] === s2Count[index]) matches++
    else if (s1Count[index] + 1 === s2Count[index]) matches--

    let lIndex = s2.charCodeAt(l) - 'a'.charCodeAt(0)
    s2Count[lIndex]--
    if (s1Count[lIndex] === s2Count[lIndex]) matches++
    else if (s1Count[lIndex] - 1 === s2Count[lIndex]) matches--
    l++
  }

  return matches === 26
}
