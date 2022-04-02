/*
1281. Subtract the Product and Sum of Digits of an Integer
Given an integer number n, return the difference between the product of its
digits and the sum of its digits.
*/

package main

import "fmt"

func main() {
	result := subtractProductAndSum(4421)
	fmt.Println(result)
}

func subtractProductAndSum(n int) int {
	sum := 0
	prod := 1

	for n != 0 {
		reminder := n % 10
		sum = sum + reminder
		prod = prod * reminder
		n = n / 10
	}
	return prod - sum
}

/*
Suppose the number is "234"

234 != 0, reminder = 4, sum = 0+4,    prod = 1x4, n = 23
23 != 0,  reminder = 3, sum = 0+4+3,  prod= 1x4x3, n = 2
2 != 0,   reminder = 2, sum= 0+4+3+2, prod= 1x4x3x2, n = 0.2 ~ 0
0 != 0 -> false, stop loop

prod = 24, sum = 9
return 24-9 = 15
*/
