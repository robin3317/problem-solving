// https://leetcode.com/problems/richest-customer-wealth/

var maximumWealth = function (accounts) {
  for (let i = 0; i < accounts.length; i++) {
    accounts[i] = accounts[i].reduce((p, c) => p + c, 0);
  }
  return Math.max(...accounts);
};
