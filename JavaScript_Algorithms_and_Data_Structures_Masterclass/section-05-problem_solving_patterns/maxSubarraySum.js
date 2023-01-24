/*
Write a function which accepts an array of integers and a number called n.
The function should return maximum sum of n consecutive elements in the array.
maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3) => 19
*/

function maxSubarraySum(arr, n) {
  if (arr.length < n) return null

  let maxSum = 0
  for (let i = 0; i < n; i++) {
    maxSum += arr[i]
  }

  let tempSum = maxSum
  for (i = n; i < arr.length - 1; i++) {
    tempSum = tempSum - arr[i - n] + arr[i]
    maxSum = Math.max(tempSum, maxSum)
  }

  return maxSum
}

const result = maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3)
console.log(result)
