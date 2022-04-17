// https://leetcode.com/problems/palindrome-number/

package main

import "fmt"

func main() {
	result := isPalindrome(121)
	fmt.Println(result)
}

func isPalindrome(x int) bool {
	if x < 0 {
		return false
	}
	num, rev := x, 0
	for num != 0 {
		reminder := num % 10
		num = num / 10
		rev = rev*10 + reminder
	}
	return x == rev
}
