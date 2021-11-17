const sums = [153, 956, 310, 735, 689];

function minSplit(amount) {
  let originalAmount = amount,
    result,
    fifty = 0,
    twenty = 0,
    ten = 0,
    five = 0,
    one = 0;

  if (amount / 50 > 0) {
    fifty = Math.floor(amount / 50);
    amount = amount - 50 * Math.floor(amount / 50);
  }
  if (amount / 20 > 0) {
    twenty = Math.floor(amount / 20);
    amount = amount - 20 * Math.floor(amount / 20);
  }
  if (amount / 10 > 0) {
    ten = Math.floor(amount / 10);
    amount = amount - 10 * Math.floor(amount / 10);
  }
  if (amount / 5 > 0) {
    five = Math.floor(amount / 5);
    amount = amount - 5 * Math.floor(amount / 5);
  }
  if (amount > 0 && amount < 5) one = amount;

  result = fifty + twenty + ten + five + one;

  console.log(
    `
      \nMinimum coins for ${originalAmount}: ${result}
      \n¢50 = ${fifty}
      \n¢20 = ${twenty}
      \n¢10 = ${ten}
      \n¢5 = ${five}
      \n¢1 = ${one}\n
      `
  );

  return result;
}

sums.forEach(minSplit);
