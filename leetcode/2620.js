/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    let val = n - 1
    return function() {
        val = val + 1
        return val
    };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */
