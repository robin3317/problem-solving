// https://leetcode.com/problems/count-odd-numbers-in-an-interval-range/

package main

import "fmt"

func main() {
	result := countOdds(3, 7)
	fmt.Println(result)
}

// leetcode part
func countOdds(low int, high int) int {
	count := 0
	for i := low; i <= high; i++ {
		if i%2 != 0 {
			count++
		}
	}
	return count
}
