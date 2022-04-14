// https://leetcode.com/problems/find-nearest-point-that-has-the-same-x-or-y-coordinate/

package main

import "fmt"

func main() {
	a := [][]int{{2, 3}}
	result := nearestValidPoint(3, 4, a)
	fmt.Println(result)
}

func nearestValidPoint(x int, y int, points [][]int) int {
	resIndex := -1
	manDistance := 20000

	for i, val := range points {
		if val[0] == x || val[1] == y {
			distance := abs(x - val[0] + y - val[1])
			if distance < manDistance {
				manDistance = distance
				resIndex = i
			}
		}
	}
	return resIndex
}

func abs(v int) int {
	if v < 0 {
		return v * -1
	}
	return v
}
