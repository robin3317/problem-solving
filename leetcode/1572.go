/*
1572. Matrix Diagonal Sum

Given a square matrix mat, return the sum of the matrix diagonals.

Only include the sum of all the elements on the primary diagonal and all the elements
on the secondary diagonal that are not part of the primary diagonal.
*/

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
