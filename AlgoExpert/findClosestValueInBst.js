/*
  Write a function that takes in a Binary Search Tree (BST) and a target integer
  value and returns the closest value(absolute) to that target value contained in the BST.
  
  You can assume that there will only be one closest value.

  Each BST node has an integer value, a left child node, and a right child node. 
  A node is said to be a valid BST node if and only if it satisfies the BST
  property: its value is strictly greater than the values of every node to its left; 
  its value is less than or equal to the values of every node to its right; 
  and its children nodes are either valid BST nodes themselves or None / null.

  tree:   
          10
       /     \
      5      15
    /   \   /   \
   2     5 13   22
 /           \
1            14

target = 12
output = 13
*/

function findClosestValueInBst(tree, target) {
  // Write your code here.
  let closest = null
  let closestRange = Infinity
  let treeNode = tree

  while (treeNode !== null) {
    const diff = Math.abs(treeNode.value - target)
    if (diff <= closestRange) {
      closestRange = diff
      closest = treeNode.value
    }

    // if closestRange === 0, that means target itself is the closest value
    // so break the loop and finally return closest
    if (closestRange === 0) {
      break
    }

    // if target is less that current value, we can eliminate the right node
    // and continue finding the closest until last node
    if (target < treeNode.value) {
      treeNode = treeNode.left
    } else {
      // we can eliminate the left node
      treeNode = treeNode.right
    }
  }

  return closest
}

// This is the class of the input tree. Do not edit.
class BST {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

// Do not edit the line below.
exports.findClosestValueInBst = findClosestValueInBst
