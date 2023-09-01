// https://leetcode.com/problems/array-prototype-last

Array.prototype.last = function() {
    const l = this.length
    return l ? this[l-1] : -1
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */
