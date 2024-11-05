userWord = prompt("Inserisci una parola per verificare se è palindroma");
invertedWord = reverseWords(userWord);

console.log(userWord);
console.log(invertedWord);

isPalindrome = palindromeCheck(userWord, invertedWord);

console.log(isPalindrome);
