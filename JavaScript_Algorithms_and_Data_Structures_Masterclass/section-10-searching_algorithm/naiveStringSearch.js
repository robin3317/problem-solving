// Given two strings in a function, find the frequency(number of occurance) of "target" in the "str"

function naiveStringSearch(str, target) {
  let count = 0

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < target.length; j++) {
      if (target[j] !== str[i + j]) break
      if (j === target.length - 1) count++
    }
  }

  return count
}

const result = naiveStringSearch('lorie loled lolol', 'lol') // 3
console.log(result)
