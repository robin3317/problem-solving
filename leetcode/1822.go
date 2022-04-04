/*
1822. Sign of the Product of an Array
There is a function signFunc(x) that returns:

1 if x is positive.
-1 if x is negative.
0 if x is equal to 0.
You are given an integer array nums. Let product be the product of all values in the array nums.

Return signFunc(product).
*/
package main

func main() {
	arraySign([]int{9, 72, 34, 29, -49, -22, -77, -17, -66, -75, -44, -30, -24})
}

func arraySign(nums []int) int {
	prod := 1
	for _, val := range nums {
		if val == 0 {
			prod *= 0
			break
		} else if val < 0 {
			prod *= -1
		}
	}
	return prod
}
