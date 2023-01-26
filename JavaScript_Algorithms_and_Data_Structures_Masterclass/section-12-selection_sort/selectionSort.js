function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) min = j
    }
    if (i !== min) {
      ;[arr[i], arr[min]] = [arr[min], arr[i]]
    }
  }
  return arr
}

const result = selectionSort([33, 2, 8, 9, 5, 15])
console.log(result)
