/*
  Task:
  You are going to be given a word. Your job is to return the middle character of the word.
  If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.
*/

// Solution
function getMiddle(string) {
  if (string.length % 2 === 0) {
    return (
      string.charAt(string.length / 2 - 1) + string.charAt(string.length / 2)
    );
  } else {
    return string.charAt((string.length - 1) / 2);
  }
}
