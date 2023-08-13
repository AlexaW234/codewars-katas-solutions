/*
  Task:
  In this little assignment, you are given a string of space separated numbers, and have to return the highest and lowest number.

  Examples:
  high_and_low("1 2 3 4 5")  // return "5 1"
  high_and_low("1 2 -3 4 5") // return "5 -3"
  high_and_low("1 9 3 4 -5") // return "9 -5"
  
  Notes:
  - All numbers are valid Int32, no need to validate them.
  - There will always be at least one number in the input string.
  - Output string must be two numbers separated by a single space, and highest number is first.
*/

// Solution
const highAndLow = (numbers) => {
  const numberArray = numbers.split(" ");
  let highest = Number(numberArray[0]);
  let lowest = Number(numberArray[0]);

  for (let i = 1; i < numberArray.length; i++) {
    const currentNumber = Number(numberArray[i]);

    if (currentNumber > highest) {
      highest = currentNumber;
    }
    if (currentNumber < lowest) {
      lowest = currentNumber;
    }
  }

  return highest.toString() + " " + lowest.toString();
};
