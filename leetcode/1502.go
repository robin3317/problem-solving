// https://leetcode.com/problems/can-make-arithmetic-progression-from-sequence/

package main

import "fmt"

func main() {
	fmt.Println(canMakeArithmeticProgression([]int{1, 2, 4}))
}

func canMakeArithmeticProgression(arr []int) bool {
	for i := 0; i < len(arr); i++ {
		for j := 0; j < len(arr)-1; j++ {
			if arr[j] > arr[j+1] {
				temp := arr[j]
				arr[j] = arr[j+1]
				arr[j+1] = temp
			}
		}
	}

	// sort.Ints(arr)
	diff := arr[0] - arr[1]

	for i := 1; i < len(arr); i++ {
		if len(arr)-i > 1 && arr[i]-arr[i+1] != diff {
			return false
		}
	}

	return true
}
