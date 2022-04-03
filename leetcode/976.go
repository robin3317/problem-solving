/*
976. Largest Perimeter Triangle
Given an integer array nums, return the largest perimeter of a triangle
with a non-zero area, formed from three of these lengths.
If it is impossible to form any triangle of a non-zero area, return 0.
*/
package main

import (
	"fmt"
	"sort"
)

func main() {
	s := []int{1, 3, 4, 8}
	result := largestPerimeter(s)
	fmt.Println(result)
}

func largestPerimeter(nums []int) int {
	if len(nums) < 3 {
		return 0
	}
	sort.Ints(nums)

	//1, 3, 4, 8

	for i := len(nums) - 1; i >= 2; i-- {
		if nums[i-1]+nums[i-2] > nums[i] {
			return nums[i] + nums[i-1] + nums[i-2]
		}
	}

	return 0
}
