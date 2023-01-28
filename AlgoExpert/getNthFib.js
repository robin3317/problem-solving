function getNthFib(n) {
  const lastTwo = [0, 1]
  let counter = 3
  while (counter <= n) {
    const nextFib = lastTwo[0] + lastTwo[1]
    ;[lastTwo[0], lastTwo[1]] = [lastTwo[1], nextFib]
    counter++
  }
  return n > 1 ? lastTwo[1] : lastTwo[0]
}

/*
-------recursion using memoization-------
function getNthFib(n) {
  const memoize = {1: 0, 2: 1}
  if (n in memoize) {
    return memoize[n]
  }else {
    memoize[n] = getNthFib(n-1) + getNthFib(n-2)
    return memoize[n]
  }
}
*/
