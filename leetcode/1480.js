// https://leetcode.com/problems/running-sum-of-1d-array/

var runningSum = function (nums) {
  const result = [nums[0]];
  let sum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    sum += nums[i];
    result.push(sum);
  }
  return result;
};

/*
var runningSum = function (nums) {
  for (let i = 1; i < nums.length; i++) {
    nums[i] += nums[i - 1];
  }
  return nums;
};
*/
