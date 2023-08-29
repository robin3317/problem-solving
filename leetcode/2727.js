// https://leetcode.com/problems/is-object-empty

/**
 * @param {Object | Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    return !Object.keys(obj).length
};
