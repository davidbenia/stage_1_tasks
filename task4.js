const sequence_1 = "()()((()))()()";
const sequence_2 = "()(((())))))())";
const sequence_3 = "())(";

function isProperly(sequence) {
  let sequence_array,
    open_parenthesis = 0,
    verdict = null;

  // If the string is empty, return false.
  if (sequence == "") {
    verdict = "NOT a proper sequence;";
    return false;
  } else sequence_array = sequence.split(""); // Split the string at each character and add them to an array in the correct order.

  // For each element in the sequence characters array
  for (let element of sequence_array) {
    // If a closing parenthesis appeared before opening one was registered, return false.
    if (open_parenthesis < 0 || (open_parenthesis == 0 && element == ")")) {
      verdict = "NOT a proper sequence;";
      console.log(`\n${sequence} is ${verdict}\n`);
      return false;
    }

    // If an opening parenthesis was registered, increment the opening counter.
    if (element == "(") ++open_parenthesis;
    // If a closing parenthesis was registered, decrement the opening counter.
    else if (element == ")") --open_parenthesis;
  }

  verdict = "a proper sequence;";
  console.log(`\n${sequence} is ${verdict}\n`);

  return true;
}

isProperly(sequence_1);
isProperly(sequence_2);
isProperly(sequence_3);
