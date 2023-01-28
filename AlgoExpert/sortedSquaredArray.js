/*
  Write a function that takes in a non-empty array of integers that are sorted
  in ascending order and returns a new array of the same length with the squares
  of the original integers also sorted in ascending order.

  Sample Input: [1, 2, 3, 5, 6, 8, 9]
  Sample Output: [1, 4, 9, 25, 36, 64, 81]
*/
function sortedSquaredArray(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i] ** 2
  }
  return array.sort((a, b) => a - b)
}

const result = sortedSquaredArray([1, 2, 3, 5, 6, 8, 9])
console.log(result)
