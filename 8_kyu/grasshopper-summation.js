// Grasshopper Summation
// Write a program that finds the summation of every number from 1 to num.

//Solution

let sum = 0;

function calculateSum(num) {
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
}
