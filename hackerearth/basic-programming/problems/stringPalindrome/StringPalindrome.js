const getOutput = (input) => {
  return isPalindrome(input) ? "YES" : "NO";
}

const isPalindrome = (string) => string === string.split('').reverse().join('');

module.exports = getOutput;
