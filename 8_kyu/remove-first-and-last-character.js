/*
  Task:
  It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string.
  You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
  
  Example:
  removeChar("hello") => "ell"
*/


//Solution 1

const removeChar = (str) => str.substring(1, str.length - 1);

//Solution2

function removeFirstandLastCharacter(string) 
  return string.slice(1, -1); 

  //Solution 3

  function removeFirstandLastCharacter(string) {
    if (string.length <= 2) {
        return ''; 
    } else {
        return string.slice(1, -1); 
    }
}


