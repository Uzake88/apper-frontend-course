function convertToVowels(word) {
    word = word.toLowerCase() // Converting the word to lowercase to minimize case-sensitive errors
    const vowels = 'aeiou' //Creating vowels
    const vowelCheck = [] //Setting up empty array 

    for (let i = 0; i < word.length; i++){
       // Push vowel to the array if it the letter is detected as a vowel
        if (vowels.includes(word[i])) {
            vowelCheck.push(word[i]); 
        }
    }
    return vowelCheck.join('')
  }
  
  const word = 'thisissomeword'
  const wordWithOnlyVowels = convertToVowels(word)
  console.log(wordWithOnlyVowels) // iioeo