/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let start = 0;
  let end = str.length - 1;

  if (str.length === 1) {
    return true;
  }

  while (start <= end) {
    while (!isAlphaNum(str[start]) && start <= end) {
      start++;
    }

    while (!isAlphaNum(str[end]) && start <= end) {
      end--;
    }

    if (str[start].toLowerCase() !== str[end].toLowerCase()) {
      return false;
    }

    start++;
    end--;
  }

  return true;
}

// using ascii values

function isAlphaNum(char) {
  const code = char.charCodeAt(0);
  if (
    !(code > 47 && code < 58) && // numeric (0-9)
    !(code > 64 && code < 91) && // upper alpha (A-Z)
    !(code > 96 && code < 123) // lower alpha (a-z)
  ) {
    return false;
  }

  return true;
}

// using regex
function isAlphaNumeric(char) {
  const regex = /^[a-zA-Z0-9]+$/i;

  return char.match(regex);
}

module.exports = isPalindrome;
