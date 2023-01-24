/*
Given two string, write a function to determine if the second string is an anagram of the first.
An anagram is a word, phrase or name formed by rearranging the letters of another such as 
cinema, formed rom iceman.

validAnagram('', '') => true
validAnagram('zza', 'aza') => false
validAnagram('anagram', 'nagaram') => true
*/

function validAnagram(str1, str2) {
  const strMap1 = {}

  for (let val of str1) {
    strMap1[val] = (strMap1[val] || 0) + 1
  }

  for (let val of str2) {
    if (strMap1[val]) {
      strMap1[val]--
    } else {
      return false
    }
  }

  return true
}

const result = validAnagram('iceman', 'cinema')
console.log(result)
