// https://leetcode.com/problems/ransom-note/

var canConstruct = function (ransomNote, magazine) {
  let magazineArr = magazine.split('');

  for (let i = 0; i < ransomNote.length; i++) {
    const char = ransomNote[i];

    const needleIndex = magazineArr.indexOf(char);

    if (needleIndex === -1) {
      return false;
    } else {
      magazineArr.splice(needleIndex, 1);
    }
  }

  return magazineArr.length >= 0;
};
