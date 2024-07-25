function reverse(word) {
    const newWord = word.split('') //Splitting up the input word first
    const reversedWord = [] //Setting up an array for the reversed word

    // Starting at the last letter, we will push that letter inward first, then iterate backwards
    for (let i = newWord.length - 1; i >= 0; i--) {
        reversedWord.push(newWord[i])
    }
    // Join back together the array to form the reversed word
    return reversedWord.join('');
   }
   const word = 'hello'
   const reversedWord = reverse(word)
   console.log(reversedWord) // 'olleh'



