const strings = [
  "test",
  "kayak",
  "car",
  "anna",
  "mom",
  "tree",
  "level",
  "radar",
];

function isPalindrome(text) {
  /* 
  Find midpoint of a text string. 
  Even if length of the string is even, floor ensures leftmost center is picked.
  */
  let midpoint = Math.floor(text.length / 2);

  if (text.length % 2 == 0) {
    // Check if substring of text from start to midpoint, and the reversed substring of text from midpoint to end are equal.
    if (
      text.slice(0, midpoint) ==
      text.slice(midpoint).split("").reverse().join("")
    ) {
      console.log(`\n${text} is a palindrome.`);
      return true;
    } else return false;
  } else {
    if (
      text.slice(0, midpoint) ==
      text
        .slice(midpoint + 1) // Here we're adding 1 to midpoint, since the string length was odd, so we want to skip the middle character as it's irrelevant for comparison.
        .split("")
        .reverse()
        .join("")
    ) {
      console.log(`\n${text} is a palindrome.`);
      return true;
    } else return false;
  }
}

strings.forEach(isPalindrome);
