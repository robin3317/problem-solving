// https://leetcode.com/problems/add-two-promises

/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function (promise1, promise2) {
  const [r1, r2] = await Promise.all([promise1, promise2])
  return new Promise((resolve, reject) => resolve(r1+r2))
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */
