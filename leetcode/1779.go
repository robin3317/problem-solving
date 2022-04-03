/*
1779. Find Nearest Point That Has the Same X or Y Coordinate
You are given two integers, x and y, which represent your current location on
a Cartesian grid: (x, y). You are also given an array points where each
points[i] = [ai, bi] represents that a point exists at (ai, bi).
A point is valid if it shares the same x-coordinate or the same y-coordinate as
your location.

Return the index (0-indexed) of the valid point with the smallest Manhattan distance
from your current location. If there are multiple, return the valid point with the
smallest index. If there are no valid points, return -1.

The Manhattan distance between two points (x1, y1) and (x2, y2) is
abs(x1 - x2) + abs(y1 - y2).
*/
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
