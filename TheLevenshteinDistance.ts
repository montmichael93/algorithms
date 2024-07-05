function levenshteinDistance(s1: string, s2: string) {
  s1 = s1.toLocaleLowerCase();
  s2 = s2.toLocaleLowerCase();
  //can declare multiple variables in a single const, let, or var statement by separating them with commas apparently...
  const m = s1.length,
    n = s2.length;
  //create a 2-dimensional array (a matrix) with dimensions (m + 1) x (n + 1), where each element is initialized to 0.
  const dp = Array.from(Array(m + 1), () => Array(n + 1).fill(0));
  for (let i = 0; i <= m; i++) {
    //setting the first value of each sub-array to the value of i.
    dp[i][0] = i;
  }
  for (let j = 0; j <= n; j++) {
    // iterate through the first sub-array (the first row) of the matrix dp and sets each element to the value of j.
    dp[0][j] = j;
  }
  //loop through first string
  for (let i = 1; i <= m; i++) {
    //loop through second string
    for (let j = 1; j <= n; j++) {
      //comparison (inquire about string minus one)
      if (s1[i - 1] === s2[j - 1]) {
        //????????????????????????????????????????????????????????????????????????????????????????????????
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        //????????????????????????????????????????????????????????????????????????????????????????????????
        dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
      }
    }
  }
  return dp[m][n];
}

console.log(levenshteinDistance("cat", "Cat"));
//output: 0
console.log(levenshteinDistance("cat", "catatonic"));
//output: 6
