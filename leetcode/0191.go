// https://leetcode.com/problems/number-of-1-bits/

package main

import (
	"fmt"
	// "math/bits"
)

func main() {
	result := hammingWeight(00000000000000000000000000001011)
	fmt.Println(result)
}

func hammingWeight(num uint32) int {
	// return bits.OnesCount32(uint32(num))
	count := 0
	for num != 0 {
		num = num & (num - 1)
		count++
	}
	return count
}
