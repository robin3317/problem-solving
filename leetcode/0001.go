// https://leetcode.com/problems/two-sum/

package main

import "fmt"

func main() {
	result := twoSum([]int{2, 7, 11, 15}, 9)
	fmt.Println(result)
}

func twoSum(nums []int, target int) []int {
	idxMap := make(map[int]int)

	for i := 0; i < len(nums); i++ {
		if index, isPresent := idxMap[target-nums[i]]; isPresent {
			return []int{index, i}
		}
		idxMap[nums[i]] = i
	}

	return []int{}
}
