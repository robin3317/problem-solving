/*
  Write a function that takes in a non-empty string and that returns a boolean
  representing whether the string is a palindrome.

  A palindrome is defined as a string that's written the same forward and
  backward. Note that single-character strings are palindromes.
*/

function isPalindrome(string) {
  let leftIdx = 0
  let rightIdx = string.length - 1
  while (leftIdx < rightIdx) {
    if (string[leftIdx] !== string[rightIdx]) return false
    leftIdx++
    rightIdx--
  }
  return true
}

/*
function isPalindrome(string) {
  return string === string.split('').reverse().join(')
}
*/
