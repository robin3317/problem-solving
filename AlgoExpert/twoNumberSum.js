/*
  Write a function that takes in a non-empty array of distinct integers and an
  integer representing a target sum. If any two numbers in the input array sum
  up to the target sum, the function should return them in an array, in any
  order. If no two numbers sum up to the target sum, the function should return
  an empty array.

  Note that the target sum has to be obtained by summing two different integers
  in the array; you can't add a single integer to itself in order to obtain the
  target sum.

  You can assume that there will be at most one pair of numbers summing up to
  the target sum.

  Sample Input:
  array = [3, 5, -4, 8, 11, 1, -1, 6]
  targetSum = 10

  Output: [-1, 11]
*/

function twoNumberSum(array, targetSum) {
  for (let i = 0; i < array.length; i++) {
    const currentNum = array[i]
    const otherNum = targetSum - currentNum
    const indexOfOtherNum = array.indexOf(otherNum)

    if (indexOfOtherNum > -1 && indexOfOtherNum != i) {
      return [currentNum, otherNum]
    }
  }
  return []
}

const result = twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10)
console.log(result)

/*
function twoNumberSum(array, targetSum) {
  const hashMap = {}

  for (let num of array) {
    const otherNum = targetSum - num
    if (hashMap[otherNum]) return [num, otherNum]
    else hashMap[num] = true
  }
}

const result = twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 19)
console.log(result)
*/
