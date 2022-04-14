// https://leetcode.com/problems/matrix-diagonal-sum/

package main

import "fmt"

func main() {
	mat := [][]int{
		{1, 1, 1, 1},
		{1, 1, 1, 1},
		{1, 1, 1, 1},
		{1, 1, 1, 1},
	}
	result := diagonalSum(mat)
	fmt.Println(result)
}

func diagonalSum(mat [][]int) int {
	sum := 0
	lenght := len(mat)

	for i := 0; i < lenght; i++ {
		for j := 0; j < lenght; j++ {
			if i == j || i+j == lenght-1 {
				sum += mat[i][j]
			}
		}
	}
	return sum
}
