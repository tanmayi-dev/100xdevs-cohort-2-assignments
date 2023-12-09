/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  // Your code here
  let count = 0;
  for (i = 0; i < str.length; i++) {
    if (isVowel(str[i].toLowerCase())) {
      count++;
    }
  }
  return count;
}

// using switch case
function isVowel(char) {
  switch (char) {
    case "a":
      return true;
    case "e":
      return true;
    case "i":
      return true;
    case "o":
      return true;
    case "u":
      return true;
    default:
      return false;
  }
}

// using includes in-built function
function solution1(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (i = 0; i < str.length; i++) {
    if (vowels.includes(str[i].toLowerCase())) {
      count++;
    }
  }

  return count;
}

module.exports = countVowels;
