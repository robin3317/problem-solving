// https://leetcode.com/problems/join-two-arrays-by-id/

/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
  const a1l = arr1.length
  const a2l = arr2.length
  const m = {}
  
  for (let i=0; i<a1l; i++) {
    const id = arr1[i].id
    m[id] = arr1[i]
  }
  
  for (let i=0; i<a2l; i++) {
    const id = arr2[i].id
    m[id] = {...m[id], ...arr2[i]}
  }
  
  return Object.values(m).sort((a, b) => a - b) // sort is optional since js numeric object keys are automatically sorted
};
