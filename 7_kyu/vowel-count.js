/*
  Task:
  Return the number (count) of vowels in the given string.
  We will consider a, e, i, o, u as vowels for this Kata (but not y).
  The input string will only consist of lower case letters and/or spaces.
*/

// Solution

const getCount = (str) =>
  str
    .split("")
    .filter(
      (s) => s === "a" || s === "e" || s === "o" || s === "i" || s === "u"
    ).length;
