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
  let midpoint = Math.floor(text.length / 2);

  if (text.length % 2 == 0) {
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
        .slice(midpoint + 1)
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
