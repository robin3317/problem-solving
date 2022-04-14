// https://leetcode.com/problems/sign-of-the-product-of-an-array/

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
