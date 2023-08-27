// https://leetcode.com/problems/sleep

/**
 * @param {number} millis
 */
async function sleep(millis) {
    return new Promise((res, rej) => {
        setTimeout(() => res(), millis)
    })
}

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */
