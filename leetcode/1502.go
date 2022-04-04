/*
1502. Can Make Arithmetic Progression From Sequence
A sequence of numbers is called an arithmetic progression if the difference between
any two consecutive elements is the same.

Given an array of numbers arr, return true if the array can be rearranged to form an
arithmetic progression. Otherwise, return false.
*/
package main

import "sort"

func main() {
	canMakeArithmeticProgression([]int{1, 2, 4})
}

func canMakeArithmeticProgression(arr []int) bool {
	sort.Ints(arr)
	diff := arr[0] - arr[1]

	for i := 1; i < len(arr); i++ {
		if len(arr)-i > 1 && arr[i]-arr[i+1] != diff {
			return false
		}
	}

	return true
}
