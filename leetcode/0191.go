/*
191. Number of 1 Bits
Write a function that takes an unsigned integer and returns the number of '1' bits
it has (also known as the Hamming weight).
*/

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
