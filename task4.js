const sequence_1 = "()()((()))()()";
const sequence_2 = "()(((())))))())";
const sequence_3 = "())(";

function isProperly(sequence) {
  let sequence_array,
    open_parenthesis = 0,
    verdict = null;

  if (sequence == "") {
    verdict = "NOT a proper sequence;";
    return false;
  } else sequence_array = sequence.split("");

  for (let element of sequence_array) {
    if (open_parenthesis < 0 || (open_parenthesis == 0 && element == ")")) {
      verdict = "NOT a proper sequence;";
      console.log(`\n${sequence} is ${verdict}\n`);
      return false;
    }

    if (element == "(") ++open_parenthesis;
    else if (element == ")") --open_parenthesis;
  }

  verdict = "a proper sequence;";
  console.log(`\n${sequence} is ${verdict}\n`);

  return true;
}

isProperly(sequence_1);
isProperly(sequence_2);
isProperly(sequence_3);
