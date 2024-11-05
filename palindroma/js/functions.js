// ESECUZIONE LOIGCA
/**
 * Questa funzione permette ottenendo come parametro una stringa di restituirla in ordine invertito
 * @param {string} word
 * @returns {string}
 */
function reverseWords(word) {
    let reversedWord = '';
    for(i = word.length - 1; i >= 0; i-- ){
        reversedWord += word[i];
    }
    return reversedWord;
}

/**
 * Questa funzione richiede 2 parametri in ingresso, una stringa e la corrispettiva invertita,
 * e le confronta in modo da verificare se è palindroma, restituendo un booleano.
 * @param {string} word
 * @param {string} invertedWord
 * @returns {boolean}
 */
function palindromeCheck(word, invertedWord) {
    let isPalindrome = false;
    if (word === invertedWord){
        isPalindrome = true;
    }
    return isPalindrome;
}
