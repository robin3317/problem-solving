// https://leetcode.com/problems/execute-asynchronous-functions-in-parallel

/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = async function(functions) {
    return new Promise((res, rej) => {
        const l = functions.length
        const r = new Array(l);
        let count = 0;

        for (let i=0; i<l; i++) {
            functions[i]()
                .then(val => {
                    r[i] = val;
                    count++;
                    if (count === l) res(r)
                })
                .catch(reason => rej(reason))
        }
    });
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */
