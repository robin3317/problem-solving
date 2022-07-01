// https://leetcode.com/problems/fizz-buzz/

var fizzBuzz = function (n) {
  const result = [];

  for (let i = 1; i <= n; i++) {
    const divisibleBy3 = i % 3 === 0;
    const divisibleBy5 = i % 5 === 0;
    let str = '';

    if (divisibleBy3) {
      str += 'Fizz';
    }

    if (divisibleBy5) {
      str += 'Buzz';
    }

    if (str === '') {
      str += i;
    }

    result.push(str);
  }

  return result;
};
