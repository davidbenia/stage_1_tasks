const random_numbers = Array();
let numbers_display = "";
let min_num;

for (random_number = 0, i = 0; i < 20; ++i) {
  random_number = Math.floor(Math.random() * 100 + 1);
  random_numbers.push(random_number);

  if (i % 5 == 0) numbers_display += "\n";
  numbers_display += random_number + "\t";
}
console.log(numbers_display);

function notContains(array) {
  for (min_num = 1; ; ++min_num) {
    if (!array.includes(min_num)) break;
  }

  console.log(
    `\nMinimum positive integer not included in the array: ${min_num}`
  );

  return min_num;
}

notContains(random_numbers);
