/*
  Task:
  Given an array of booleans, where each boolean represents whether a sheep
  is present or not, count the number of sheep that are present (true).

  Example:
  countSheeps([true, false, true, false, true]) // Output: 3
*/

//Solution

function countSheeps(arrayOfSheep) {
  let counter = 0;
  for (let i = 0; i < arrayOfSheep.length; i++) {
    if (arrayOfSheep[i]) counter += 1;
  }
  return counter;
}
