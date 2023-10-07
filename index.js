function isPalindrome(word) {
  // Write your algorithm here
  const reversedWord = word.split('').reverse().join('')

  if (word === reversedWord){
    return true
  } else {
    return false
  }
}

/* 
  Add your pseudocode here
*/
// Take a string argument(word)
// reverse the word,
// Compare the reversed word with the original word
// return true if its a palindrome and otherwise if its not

/*
  Add written explanation of your solution here
*/
/*
  The program takes in a word and strings being special type of arrays with characters we reverse the original word and store it ina new variable. We then check if both words are the same with an if statement and return true if its a palindrome
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
