// https://leetcode.com/problems/debounce

/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function(fn, t) {
    let dt
    return function(...args) {
        if (dt) {
            clearTimeout(dt)
        }
        dt = setTimeout(() => {
            fn(...args)
        }, t)
    }
};

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */
