// https://leetcode.com/problems/largest-perimeter-triangle/

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

	for i := len(nums) - 1; i >= 2; i-- {
		if nums[i-1]+nums[i-2] > nums[i] {
			return nums[i] + nums[i-1] + nums[i-2]
		}
	}

	return 0
}
