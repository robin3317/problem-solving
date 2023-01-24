/*
Given a sorted array of integers, write a function called search, that accepts a value and 
return the index where the passed value is found in the array. If the value is not found, 
return -1.
*/

function binarySearch(arr, value) {
  let min = 0
  let max = arr.length - 1

  while (min <= max) {
    const middle = Math.floor((min + max) / 2)
    const currentElement = arr[middle]

    if (currentElement < value) {
      min = middle + 1
    } else if (currentElement > value) {
      max = middle - 1
    } else {
      return middle
    }
  }

  return -1
}

const result = binarySearch([1, 2, 3, 4, 5, 6], 8)
console.log(result)
