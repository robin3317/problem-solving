function bubbleSort(arr) {
  let noSwap
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      noSwap = true
      if (arr[j] > arr[j + 1]) {
        ;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        noSwap = false
      }
      if (noSwap) break
    }
  }
  return arr
}

const result = bubbleSort([33, 2, 8, 9, 5, 15])
console.log(result)
