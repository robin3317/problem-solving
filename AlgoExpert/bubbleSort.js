function bubbleSort(array) {
  let noSwap
  for (let i = array.length; i > 0; i--) {
    noSwap = true
    for (let j = 0; j < i - 1; j++) {
      if (array[j] > array[j + 1]) {
        ;[array[j], array[j + 1]] = [array[j + 1], array[j]]
        noSwap = false
      }
    }
    if (noSwap) break
  }
  return array
}

const result = bubbleSort([8, 5, 2, 9, 5, 6, 3])
console.log(result)
