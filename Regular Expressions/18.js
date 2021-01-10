let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // Change this line
let result = quoteSample.match(alphabetRegexV2); // 31
let result1 = alphabetRegexV2.test(quoteSample); // true

console.log(result1)


// Match returns the values, which are included within the given string
// Test return the boolean value, whether the wanted RegEx is within the given string or not