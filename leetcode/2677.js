// https://leetcode.com/problems/chunk-array

/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
var chunk = function(arr, size) {
    const l = arr.length
    const chunkArr = []
    for(let i=0; i < l; i += size) {
        chunkArr.push(arr.slice(i, i+size))
    }
    return chunkArr
};
