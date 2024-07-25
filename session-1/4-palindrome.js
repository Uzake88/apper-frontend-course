function isPalindrome(word) {
    // Converting the word to lowercase to minimize case-sensitive errors
    word = word.toLowerCase();
    // Reversing the word
    const reversedWord = word.split('').reverse().join('');
    // Palindrome comparison (which will return true if they are equal, and false if otherwise)
    return word === reversedWord;
  }
  const word = 'racecar';
  if (isPalindrome(word)) {
    console.log('It is a palindrome!');
  } else {
    console.log('It is not a palindrome!');
  }
  