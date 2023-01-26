// program to display fibonacci sequence using recursion
function fibonacci(num) {
  if (num < 2) {
    return num
  }
  return fibonacci(num - 1) + fibonacci(num - 2)
  // fib(5)                                                                + fib(4)
  // fib(4)                                     + fib(3)                   + fib(3)                   + fib(2)
  // fib(3)                   + fib(2)          + fib(2)          + fib(1) + fib(2)          + fib(1) + fib(1) + fib(0)
  // fib(2)          + fib(1) + fib(1) + fib(0) + fib(1) + fib(0) + 1      + fib(1) + fib(0) + 1      + 1      + 0
  // fib(1) + fib(0) + 1      + 1      + 0      + 1      + 0      + 1       + 1     + 0      + 1      + 1      + 0
  // 1 + 0 + 1 + 1 + 0 + 1 + 0 + 1 + 1 + 0 + 1 + 1 + 0
  // 8
}

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144
const result = fibonacci(6)
console.log(result)
