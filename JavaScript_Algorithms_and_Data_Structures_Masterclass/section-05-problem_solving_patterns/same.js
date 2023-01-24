/*
Write a function called same, which accepts two arrays. The function should return true if 
every value in the array has it's corresponding value squared in the second array.
The frequency of values must be the same.
*/

function same(arr1, arr2) {
  const arrMap1 = {}

  for (let val of arr1) {
    const numSqr = val ** 2
    arrMap1[numSqr] = (arrMap1[numSqr] || 0) + 1
  }

  for (let val of arr2) {
    if (arrMap1[val]) {
      arrMap1[val]--
    } else {
      return false
    }
  }

  return true
}

const result = same([1, 6, 3, 1], [36, 1, 1, 9])
console.log(result)

// solution 02
/*
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false
  }

  const arrMap1 = {}
  const arrMap2 = {}

  for (let num of arr1) {
    arrMap1[num] = (arrMap1[num] || 0) + 1
  }

  for (let num of arr2) {
    arrMap2[num] = (arrMap2[num] || 0) + 1
  }

  for (let key in arrMap1) {
    if (arrMap1[key] !== arrMap2[key ** 2]) {
      return false
    }
  }

  return true
}

const result = same([1, 6, 3, 1], [36, 1, 1, 9])
console.log(result)
*/
