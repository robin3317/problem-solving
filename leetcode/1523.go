/*
1523. Count Odd Numbers in an Interval Range
Given two non-negative integers "low" and "high". 
Return the count of odd numbers between "low" and "high" (inclusive).
*/

func countOdds(low int, high int) int {
  count := 0
  for i := low; i <= high; i++ {
    if i % 2 != 0 {
      count++
    }
  }
  return count
}