// https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary/

package main

import (
	"fmt"
)

func main() {
	result := average([]int{4000, 3000, 1000, 2000})
	fmt.Println(result)
}

func average(salary []int) float64 {
	minSalary := salary[0]
	maxSalary := salary[1]
	total := 0

	for _, val := range salary {
		if val < minSalary {
			minSalary = val
		} else if val > maxSalary {
			maxSalary = val
		}

		total += val
	}

	return float64(total-minSalary-maxSalary) / float64(len(salary)-2)
}
