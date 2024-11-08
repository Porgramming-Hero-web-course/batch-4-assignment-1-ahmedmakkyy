"use strict";
function countWordOccurrences(sentence, word) {
    // Convert the sentence and words to lowercase
    const lowerCaseSentence = sentence.toLowerCase();
    const lowerCaseWord = word.toLowerCase();
    // Split the sentence into words
    const words = lowerCaseSentence.split(" ");
    // Count occurrences of a word
    return words.filter(w => w === lowerCaseWord).length;
}
console.log(countWordOccurrences("I love typescript", "typescript"));
