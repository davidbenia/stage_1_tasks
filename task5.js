// A recursive fibonacci function to sum each amount of variants for every step, and calculate the variants based on two previous sums, until N-th step. Passing arguments: N; the second argument is an empty array by default.
function countVariants(stairsCount, variants = []) {
  // If at step 0 or 1, return 1 variant.
  if (stairsCount <= 1) return 1;
  // If the array of variants for each step does not include the current step variants, then add the sum of 2 previous steps' variants into the variants array for the next calculation.
  else if (!variants.includes(stairsCount)) {
    // At each iteration of recursion, the updated variants array is passed instead of the default empty array, that way we keep track of previous variants so that the sums can be calculated.
    variants[stairsCount] =
      countVariants(stairsCount - 1, variants) +
      countVariants(stairsCount - 2, variants);

    /* 
      Here each term of the recursive addtion represents the sum of variants for previous 2 steps. Each term is awaiting calculation of previous sum of two terms at every step from N until step 2, at which point both of the previous steps return 1's, 
      and the last two addition terms for step 2 are calculated. From here the 3rd step terms are calculated (1 for step 1 and 2 for step 2).
      This way each of the unknown terms are calculated (from the initial 2 known steps, step 0 and step 1) for every step.
      */
  }

  return variants[stairsCount];
}

for (i = 0; i <= 10; ++i) {
  console.log(`\nStairs: ${i}\nVariants: ${countVariants(i)}`);
}

/*
I'm aware that this is an extremely inefficient method, as we are recalculating sums for each step, and complexity increases exponentially based on the amount of steps,
but this is what I came up with initially.
I did however discover better methods using dynamic programming approaches after researching to see if I did it correctly.
*/
