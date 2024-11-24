// https://leetcode.com/problems/reverse-integer/
const min = -Math.pow(2, 31)
const max = (min * -1) - 1

function reverse(x: number): number {
    const isNegative = x < 0
    if (isNegative) x = x * -1
    let reverse = 0

    while(x > 0) {
        const rmndr = x % 10
        reverse = reverse * 10 + rmndr
        x = Math.floor(x/10)
    }

    if (reverse < min || reverse > max) {
        return 0
    }

    return isNegative ? reverse * -1 : reverse
};
