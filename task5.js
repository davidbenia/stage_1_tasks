function countVariants(stairsCount, variants = []) {
  if (stairsCount <= 1) return 1;
  else if (!variants.includes(stairsCount)) {
    variants[stairsCount] =
      countVariants(stairsCount - 1, variants) +
      countVariants(stairsCount - 2, variants);
  }

  return variants[stairsCount];
}

for (i = 0; i <= 10; ++i) {
  console.log(`\nStairs: ${i}\nVariants: ${countVariants(i)}`);
}
